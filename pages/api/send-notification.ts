import type {NextApiRequest, NextApiResponse} from 'next'
import {subscriptions, webpush} from "@/utils/notifications/config";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const notificationPayload = {
      title: "New Notification",
      body: "This is a new notification",
      icon: "https://main--pwa-nextjs-spike.netlify.app/_next/image?url=%2Flogo.png&w=256&q=75",
      data: {
        url: "https://example.com",
      },
    };

    Promise.all(
      subscriptions.map((subscription) =>
        webpush.sendNotification(subscription, JSON.stringify(notificationPayload))
      )
    )
      .then(() => res.status(200).json({message: "Notification sent successfully."}))
      .catch((err) => {
        console.error("Error sending notification", err);
        res.status(500);
      });
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}