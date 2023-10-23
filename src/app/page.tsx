/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import dynamic from "next/dynamic";

function Home() {
  const DynamicComponentWithNoSSR = dynamic(
    () => import("./components/game"),
    { ssr: false } // <-- not including this component on server-side
  );
  return <DynamicComponentWithNoSSR />;
}

export default Home;
