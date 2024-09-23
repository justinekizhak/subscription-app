import { z } from "zod";
import { env } from "~/env";
import { SubscriptionType } from "~/types";

export default defineEventHandler(async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("apiKey", env.SUPABASE_API_KEY || "");

    const res = await fetch(`${env.SUPABASE_REST_URL}/subscriptions`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch subscriptions");
    }
    const data = (await res.json()).map((item: any) => {
      return {
        ...item,
        imageUrl: item.image_url,
      };
    });
    return z.array(SubscriptionType).parse(data);
  } catch (error) {
    console.error("Error: ", error);
    throw new Error("Failed to fetch subscriptions");
  }
});
