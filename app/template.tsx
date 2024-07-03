"use client"

import {useEffect} from "react";

export default function Template({children}: { children: React.ReactNode }) {
  useEffect(() => {
    const registerServiceWorkerAndSubscribe = async () => {
      if ("serviceWorker" in navigator) {
        try {
          // // Register the service worker
          // const registration = await navigator.serviceWorker.register("/sw.js");

          // Ensure the service worker is ready
          const serviceWorkerReady = await navigator.serviceWorker.ready;

          // Proceed with subscription only if the service worker is active
          if (serviceWorkerReady) {
            const subscription = await serviceWorkerReady.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
            });

            // Perform the subscription fetch request
            await fetch("http://localhost:3000/api/subscribe", {
              method: "POST",
              body: JSON.stringify(subscription),
              headers: {
                "content-type": "application/json",
              },
            });
          }
        } catch (error) {
          console.error("Service Worker registration or subscription failed", error);
        }
      }
    };

    registerServiceWorkerAndSubscribe();
  }, []);

  return <>{children}</>;
}