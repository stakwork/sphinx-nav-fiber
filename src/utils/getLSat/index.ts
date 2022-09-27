import { Lsat } from "lsat-js";
import * as sphinx from "sphinx-bridge-kevkevinpal";

export const getLSat = async () => {
  let lsat = localStorage.getItem("lsat");
  
  if (!lsat) {
    try {
      const resp = await fetch("https://knowledge-graph.sphinx.chat/searching");
      const data = await resp.json();

      lsat = Lsat.fromHeader(data.headers);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const LSATRes = await sphinx.saveLsat(
        lsat.invoice,
        lsat.baseMacaroon,
        "knowledge-graph.sphinx.chat"
      );

      if (LSATRes.success === false) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await sphinx.enable(true);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const lsat = await sphinx.getLsat();

    console.log("Getting right value");
    // Save Lsat to local Storage
    console.log(lsat);
  } catch (e) {
    console.log(e);
  }
};
