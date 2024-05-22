import type {PrecacheEntry} from "@serwist/precaching";
import {defaultCache} from "@serwist/next/worker";
import {Serwist, SerwistGlobalConfig} from "serwist";


declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    // Change this attribute's name to your `injectionPoint`.
    // `injectionPoint` is an InjectManifest option.
    // See https://serwist.pages.dev/docs/build/configuring
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

// Anything random.
// const revision = crypto.randomUUID();

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  fallbacks: {
    entries: [
      {
        url: "/offline",
        matcher({request}) {
          console.log(request.destination)
          return request.destination === "document";
        },
      },
    ],
  },
});


serwist.addEventListeners();