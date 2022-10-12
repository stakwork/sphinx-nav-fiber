/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Lsat } from "lsat-js";
import * as sphinx from "sphinx-bridge-kevkevinpal";

export const getLSat = async () => {
  const localLsat = localStorage.getItem("lsat");

  if (!localLsat) {
    // const newLsat = await getActiveLsat();
    const newLsat = null;

    if (!newLsat) {
      try {
        const resp = await fetch(
          "https://knowledge-graph.sphinx.chat/searching"
        );

        const data = await resp.json();

        const lsat = Lsat.fromHeader(data.headers);

        // @ts-ignore
        let LSATRes = await sphinx.saveLsat(
          lsat.invoice,
          lsat.baseMacaroon,
          "knowledge-graph.sphinx.chat"
        );

        if (LSATRes.success === false) {
          // @ts-ignore
          await sphinx.topup();
          // @ts-ignore

          LSATRes = await sphinx.saveLsat(
            lsat.invoice,
            lsat.baseMacaroon,
            "knowledge-graph.sphinx.chat"
          );
        }

        lsat.setPreimage(LSATRes.lsat.split(":")[1]);

        localStorage.setItem(
          "lsat",
          JSON.stringify({
            identifier: lsat.id,
            macaroon: lsat.baseMacaroon,
            paymentRequest: lsat.paymentHash,
            preimage: LSATRes.lsat.split(":")[1],
          })
        );

        const token = lsat.toToken();
        // Need to store Token in Local storage

        return token;
      } catch (e) {
        console.log(e);

        return null;
      }
    } else {
      return newLsat;
    }
  } else {
    // Need to get token from lsat
    const newlsat = JSON.parse(localLsat);

    return `LSAT ${newlsat.macaroon}:${newlsat.preimage}`;
  }
};

export const getActiveLsat = async () => {
  try {
    // @ts-ignore
    await sphinx.enable(true);
    // @ts-ignore

    const lsat = await sphinx.getLsat();

    // Save Lsat to local Storage
    if (lsat.macaroon && lsat.preimage) {
      localStorage.setItem("lsat", JSON.stringify(lsat));

      return `LSAT ${lsat.macaroon}:${lsat.preimage}`;
    }

    return null;
  } catch (e) {
    console.log(e);

    return null;
  }
};
