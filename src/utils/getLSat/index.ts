import { Lsat } from "lsat-js";
import * as sphinx from "sphinx-bridge-kevkevinpal";

export const getLSat = async () => {
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

    return token;
  } catch (e) {
    console.log(e);
    return null;
  }
};
