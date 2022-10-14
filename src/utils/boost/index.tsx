import * as sphinx from "sphinx-bridge-kevkevinpal";
import { api } from "~/network/api";

const sphinxPubkey =
  "023d8eb306f0027b902fbdc81d33b49b6558b3434d374626f8c324979c92d47c21";

const boostAgainstBudget = async (amount: number, pubkey: string) => {
  let err: any = null;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let res = await sphinx.enable(true);

  if (!res) {
    console.log(
      "Sphinx enable failed, means no pubkey and no budget (including budget of 0)"
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  res = await sphinx.keysend(pubkey || sphinxPubkey, amount);

  if (!res || !res.success) {
    // rejected, ask for topup
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res = await sphinx.topup();

    if (!res || !res.budget || res?.budget < amount) {
      // topup failed
      err = new Error("Topup failed");
    } else {
      // retry keysend
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      res = await sphinx.keysend(sphinxPubkey, amount);

      if (!res) {
        err = new Error("Keysend failed after topup");
      }
    }
  }

  return err;
};

export const boost = async (refId: string, amount: number, pubkey: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const err = await boostAgainstBudget(amount, pubkey);

  if (err) {
    throw new Error(err);
  }

  const body = {
    amount,
    ref: refId,
  };

  return api.post("/boost", JSON.stringify(body));
};
