"use client"
import {useEffect} from "react";

export default function Template({children}: { children: React.ReactNode }) {

  // @ts-ignore
  useEffect(async () => {
    if ("serviceWorker" in navigator) {
      const register = await navigator.serviceWorker.register("/workbox-0ea65fa9.js");

      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BOOnSoiP0OVcyxN09wM4NH4XQVpHEzMSWMX7lOMXRfwV44iAxKuq0LHxp-BJvVfRmHd1wHZV2D3jGt1Wv12Z_4o',
      });

      const res = await fetch("http://localhost:3000/api/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "content-type": "application/json",
        },
      });
    }
  }, []);

  return <>{children}</>
}