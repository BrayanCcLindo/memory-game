"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Button from "./button";
import { ReactNode, useEffect, useState } from "react";

function DialogWinner({
  showModal,
  moves,
  handleRestart,
  formatearTiempo,
  timer,
}: {
  showModal: boolean;
  moves: number;
  handleRestart?: React.ReactEventHandler;
  formatearTiempo: (timer: number) => ReactNode;
  timer: number;
}) {
  const [open, setOpen] = useState(showModal);
  useEffect(() => {
    setOpen(showModal);
  }, [showModal]);

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="font-semibold  text-lg text-center">
            Congratulations, Memory Game Champion!
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-base leading-normal text-center">
            Today your ability to recall patterns and details has been nothing
            short of impressive
          </Dialog.Description>
          <fieldset className="font-semibold flex items-center justify-between p-4">
            <h3 className="text-violet11 w-[90px] text-left text-[15px]">
              Total Moves
            </h3>
            <p>{moves}</p>
          </fieldset>
          <fieldset className="font-semibold flex items-center justify-between p-4">
            <h3 className="text-violet11 w-[90px] text-left text-[15px]">
              Total Time
            </h3>
            <p>{formatearTiempo(timer)}</p>
          </fieldset>

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <Button onClick={handleRestart}>Restart</Button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default DialogWinner;
