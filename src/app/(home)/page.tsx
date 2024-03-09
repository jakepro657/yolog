"use client";
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

  return <main className="">ㅎㅇ</main>;
}
