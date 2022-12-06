import { Lsat } from "lsat-js";
import * as sphinx from "sphinx-bridge-kevkevinpal";

type Action = "searching" | "adding_node";

export const getLSat = async (action: Action) => {
  try {
    const resp = await fetch(`https://knowledge-graph.sphinx.chat/${action}`);

    const data = await resp.json();

    const lsat = Lsat.fromHeader(data.headers);

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

    return token;
  } catch (e) {
    console.log(e);

    return null;
  }
};
