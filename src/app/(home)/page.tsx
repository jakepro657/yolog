"use client";
import OnboardPage from "@/components/onboard/OnboardPage";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     const registInit = async () => {
  //       const registration = await navigator.serviceWorker.register('/sw.js');
  //       registration.waiting?.postMessage('SKIP_WAITING');
  //     };
  //     registInit();
  //   }
  // }, []);
  useEffect(() => {
    require("next-pwa/register");
  }, []);

  return (
    <div className="flex flex-col items-center absolute pt-16 left-1/2 -translate-x-1/2 top-0 w-full h-full sm:w-[500px] bg-white">
      <Link href={"/onboard"}>onboard</Link>
    </div>
  );
}
