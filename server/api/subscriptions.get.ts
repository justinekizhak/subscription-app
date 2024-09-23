import subscriptionList from "~/mocks/data/subscription-list.json";
import { Subscription } from "~/types";

export default defineEventHandler(() => {
  const data: Subscription[] = subscriptionList;
  return data;
});
