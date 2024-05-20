"use client"
import {useEffect} from "react";

export default function Template({children}: { children: React.ReactNode }) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
    console.log("Client-side effect triggered");
  }, []);

  return <>{children}</>
}
