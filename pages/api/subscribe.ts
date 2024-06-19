import type {NextApiRequest, NextApiResponse} from 'next'
import {subscriptions} from "@/utils/notifications/config";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const subscription = req.body;
    subscriptions.push(subscription);
    res.status(201).json({status: "success"});
  }
}