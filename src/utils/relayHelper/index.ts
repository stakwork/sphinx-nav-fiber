/* eslint-disable no-console */
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { Node } from '~/types/index'
import { executeIfProd } from '../tests'

export const saveConsumedContent = async (selectedNode: Node | null) => {
  await executeIfProd(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await sphinx.enable(true)

    if (!res) {
      console.log('Sphinx enable failed, means no pubkey and no budget (including budget of 0)')

      return
    }

    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await sphinx.saveGraphData({
        metaData: {
          date: Math.floor(new Date().getTime() / 1000),
          ...selectedNode,
        },
        type: 'second_brain_consumed_content',
      })
    } catch (error) {
      console.log(error)
    }
  })
}

export const saveSearchTerm = async (searchTerm: string) => {
  await executeIfProd(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await sphinx.enable(true)

    if (!res) {
      console.log('Sphinx enable failed, means no pubkey and no budget (including budget of 0)')
    }
  })
  /*
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await sphinx.saveGraphData({
      metaData: { frequency: 1, searched_term: searchTerm },
      type: "search",
    });
  } catch (error) {
    console.log(error);
  }
  */
}
