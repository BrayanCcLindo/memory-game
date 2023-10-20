/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Header from "./components/header";
import GameLayout from "./components/gameLayout";
import { useEffect, useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Footer from "./components/footer";
import DialogWinner from "./components/DialogWinner";
import JSConfetti from "js-confetti";

const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
  }
};
const numerosConsecutivos = Array.from({ length: 8 }, (_, i) => i + 1);
const newBoxes = numerosConsecutivos.concat(numerosConsecutivos);
shuffleArray(newBoxes);

function Home() {
  const [boxes, setBoxes] = useState(newBoxes);

  const [clearedCards, setClearedCards] = useState({});
  const [itemsSelected, setItemsSelected] = useState<number[]>([]);

  const [showModal, setShowModal] = useState(false);
  const [moves, setMoves] = useState(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [timer, setTimer] = useState(0);
  const [isTimingRuning, setIsTimingRuning] = useState(false);

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === numerosConsecutivos.length) {
      setShowModal(true);
      setIsTimingRuning(false);
    }
  };

  const evaluate = () => {
    const [firstSelected, secondSelected] = itemsSelected;
    // enable();
    if (boxes[firstSelected] === boxes[secondSelected]) {
      setClearedCards((prev) => ({
        ...prev,
        [boxes[secondSelected]]: true,
      }));
      setItemsSelected([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setItemsSelected([]);
    }, 500);
  };

  const handleCardClick = (index: number) => {
    setIsTimingRuning(true);

    if (itemsSelected.length === 1) {
      setItemsSelected((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      // disable();
    } else {
      setItemsSelected([index]);
    }
  };
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (itemsSelected.length === 2) {
      timeout = setTimeout(evaluate, 0);
    }
  }, [itemsSelected]);
  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  const checkIsInactive = (card: number) => {
    return Boolean(clearedCards[card as keyof {}]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setItemsSelected([]);
    setShowModal(false);
    setMoves(0);
    // setShouldDisableAllCards(false);
    shuffleArray(newBoxes);
    setTimer(0);
    setBoxes(newBoxes);
  };

  const checkIsFlipped = (index: number) => {
    return itemsSelected.includes(index);
  };
  const jsConfetti = new JSConfetti();
  if (showModal) {
    jsConfetti.addConfetti({
      emojis: ["🦄", "✨", "🌈"],
      emojiSize: 20,
      confettiNumber: 50,
      confettiRadius: 6,
    });
  }

  useEffect(() => {
    let intervalo: any;

    if (isTimingRuning) {
      intervalo = setInterval(() => {
        setTimer((prevTiempo) => prevTiempo + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [isTimingRuning]);

  const formatearTiempo = (timer: number) => {
    const minutos = Math.floor(timer / 60);
    const segundos = timer % 60;
    return (
      (minutos < 10 ? "0" : "") +
      minutos +
      ":" +
      (segundos < 10 ? "0" : "") +
      segundos
    );
  };

  return (
    <div className="bg-content">
      <DialogWinner
        formatearTiempo={() => formatearTiempo(timer)}
        showModal={showModal}
        moves={moves}
        timer={timer}
        handleRestart={handleRestart}
      />
      <GameLayout>
        <Header handleRestart={handleRestart} />

        <main className="my-[6rem] m-auto  ">
          <div
            className={twMerge(
              `grid grid-cols-[repeat(4,100px)] gap-4 grid-rows-[repeat(4,100px)] items center justify-center`
            )}
          >
            {boxes?.map((item, index) => {
              const isfliped = checkIsFlipped(index);
              const isInactive = checkIsInactive(item);

              return (
                <button
                  onClick={() => handleCardClick(index)}
                  key={index}
                  className={twMerge(
                    "rounded-full w-full h-full cursor-pointer ",
                    isfliped
                      ? "bg-orange text-white pointer-events-none select-none"
                      : "bg-white hover:bg-[#023047]",
                    isInactive &&
                      "pointer-events-none select-none bg-orange text-red-500"
                  )}
                >
                  <p className="text-6xl font-bold text-center">
                    {isfliped && item}
                    {isInactive && item}
                  </p>
                </button>
              );
            })}
          </div>
        </main>
        <Footer
          formatearTiempo={() => formatearTiempo(timer)}
          timer={timer}
          moves={moves}
        />
      </GameLayout>
    </div>
  );
}

export default Home;
