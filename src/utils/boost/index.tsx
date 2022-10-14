import { api } from "~/network/api";
import { keysendPayment } from "~/utils/keysend";

export const boost = async (refId: string, amount: number, pubkey: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const err = await keysendPayment(amount, pubkey);

  if (err) {
    throw new Error(err);
  }

  const body = {
    amount,
    ref: refId,
  };

  return api.post("/boost", JSON.stringify(body));
};
