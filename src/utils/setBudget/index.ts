import * as sphinx from 'sphinx-bridge-kevkevinpal'

export async function updateBudget(setBudget: (value: number) => void) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await sphinx.enable()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const budget = await sphinx.getBudget()

  if (budget?.budget) {
    setBudget(budget.budget)
  }
}
