export const isBudgetValid = (budget: string): boolean => {
  const trimmedBudget = budget.trim()

  return !!(trimmedBudget && /^[0-9]+$/.test(trimmedBudget))
}

export const BUDGET_PATTERN = /^[0-9]+$/
