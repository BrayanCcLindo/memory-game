import { ReactNode, useEffect, useRef, useState } from "react";

function Footer({
  moves,
  timer,
  formatearTiempo,
}: {
  moves: number;
  timer: number;
  formatearTiempo: (timer: number) => ReactNode;
}) {
  // const [timer, setTimer] = useState(0);
  // const idtimer = setInterval(() => {
  //   setTimer((prev) => prev + 1);
  // }, 10000);

  // const timer = setInterval(function () {
  //   const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  //   const now = new Date().getTime();
  //   const distance = countDownDate + now;
  //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   console.log(minutes, seconds, "aca");
  // }, 1000);
  //   // Get today's date and time

  //   // Find the distance between now and the count down date

  //   // Time calculations for days, hours, minutes and seconds

  //   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   // Display the result in the element with id="demo"
  //   // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //   // +minutes + "m " + seconds + "s ";
  //   // console.log(days, hours, "lol");

  //   // If the count down is finished, write some text

  //   // console.log(seconds + "s");
  //   setjaja(seconds);

  return (
    <div className="flex gap-4 items-center justify-center font-semibold text-xl ">
      <div className="bg-gray flex justify-between py-4 px-6 flex-1 max-w-[30rem] rounded-xl">
        <p>Time</p>
        <p>{formatearTiempo(timer)}</p>
      </div>
      <div className="bg-gray flex justify-between py-4 flex-1 max-w-[30rem] rounded-xl px-6">
        <p>Moves</p>
        <p>{moves}</p>
      </div>
    </div>
  );
}

export default Footer;
