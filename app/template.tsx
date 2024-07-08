"use client"

import {useEffect} from "react";

export default function Template({children}: { children: React.ReactNode }) {
  useEffect(() => {
    const registerServiceWorkerAndSubscribe = async () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(serviceWorkerRegistration => {
          serviceWorkerRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
          })
            .then(async subscription => {
              await fetch("/api/subscribe", {
                method: "POST",
                body: JSON.stringify(subscription),
                headers: {
                  "content-type": "application/json",
                },
              });
              console.log('Subscribed to push notifications:', subscription);
              // Send the subscription to your server
            })
            .catch(error => {
              console.error('Error subscribing to push notifications:', error);
            });
        });
      }
    };

    registerServiceWorkerAndSubscribe();
  }, []);

  return <>{children}</>;
}