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
