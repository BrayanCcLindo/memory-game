import { useRef } from "react";

function Confeti() {
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;

  // jsConfetti.addConfetti();

  return (
    <canvas ref={canvasRef} className="bg-red-500 h-screen w-screen"></canvas>
  );
}

export default Confeti;
