import * as sphinx from "sphinx-bridge-kevkevinpal";

const sphinxPubkey =
  "023d8eb306f0027b902fbdc81d33b49b6558b3434d374626f8c324979c92d47c21";

async function boostAgainstBudget(amount: number) {
  let err: any = null;
  // @ts-ignore
  let res: any = await sphinx.enable(true);

  if (!res) {
    console.log(
      "Sphinx enable failed, means no pubkey and no budget (including budget of 0)"
    );
  }
  // @ts-ignore
  res = await sphinx.keysend(sphinxPubkey, amount);

  if (!res) {
    // rejected, ask for topup
    // @ts-ignore
    res = await sphinx.topup();
    if (!res || !res.budget || res?.budget < amount) {
      // topup failed
      err = new Error("Topup failed");
    } else {
      // retry keysend
      // @ts-ignore
      res = await sphinx.keysend(sphinxPubkey, amount);
      if (!res) err = new Error("Keysend failed after topup");
    }
  }

  return err;
}

const boostContent = async (refId: String, amount: number) => {
  try {
    // take away sats
    // @ts-ignore

    const err = await boostAgainstBudget(amount);

    if (err) {
      throw new Error(err);
    }

    const body = {
      ref: refId,
      amount: amount,
    };

    // record the boost
    const res = await fetch("https://knowledge-graph.sphinx.chat/boost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("res", res);

    return [res, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export { boostContent, sleep };
