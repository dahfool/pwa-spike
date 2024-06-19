import dotenv from "dotenv";
import webpush from "web-push";

dotenv.config();

const vapidKeys = {
  publicKey: process.env.VAPID_PUBLIC_KEY || "",
  privateKey: process.env.VAPID_PRIVATE_KEY || "",
};

webpush.setVapidDetails(
  process.env.VAPID_SUBJECT || "",
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

let subscriptions: any[] = [];

export {
  subscriptions,
  webpush
}