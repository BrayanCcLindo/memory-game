"use client";

import Image from "next/image";
import Button from "./button";

function Header({
  handleRestart,
}: {
  handleRestart?: React.ReactEventHandler;
}) {
  // const nombres = [
  //   { name: "brayan", lastname: "ccari", age: 26 },
  //   { name: "brayan", lastname: "ccari", age: 29 },
  //   { name: "alme", lastname: "maravi", age: 30 },
  // ];
  // const hola = Object.groupBy(nombres, (item) => {
  //   return item.name;
  // });
  // console.log(hola, "nombres");

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <Image src="/logo.png" alt="" height={200} width={200} />
        <div className="flex gap-4">
          <Button onClick={handleRestart}>Restart</Button>
        </div>
      </div>
    </>
  );
}

export default Header;
