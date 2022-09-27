import { Lsat } from "lsat-js";
import * as sphinx from "sphinx-bridge-kevkevinpal";

export const getLSat = async () => {
  const lsat = localStorage.getItem("lsat");
  if (!lsat) {
    try {
      const resp = await fetch("https://knowledge-graph.sphinx.chat/searching");
      const data = await resp.json();

      const lsat = Lsat.fromHeader(data.headers);

      // @ts-ignore
      const LSATRes = await sphinx.saveLsat(
        lsat.invoice,
        lsat.baseMacaroon,
        "knowledge-graph.sphinx.chat"
      );

      if (LSATRes.success === false) {
        // @ts-ignore
        await sphinx.topup();
      }

      lsat.setPreimage(LSATRes.lsat.split(":")[1]);

      const token = lsat.toToken();
      // Need to store Token in Local storage
      return token;
    } catch (e) {
      console.log(e);
      return null;
    }
  } else {
    // Need to get token from lsat
    return lsat;
  }
};

export const getActiveLsat = async () => {
  try {
    // @ts-ignore
    await sphinx.enable(true);
    // @ts-ignore
    const lsat = await sphinx.getLsat();
    console.log("Getting right value");
    // Save Lsat to local Storage
    console.log(lsat);
  } catch (e) {
    console.log(e);
  }
};
