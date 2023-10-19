import * as sphinx from 'sphinx-bridge-kevkevinpal'

export async function updateBudget(setBudget: (value: number | null) => void) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const budget = await sphinx.getBudget()

  if (budget?.msg === 'Invalid Action') {
    setBudget(null)
  } else if (budget?.budget) {
    setBudget(budget.budget)
  }
}
