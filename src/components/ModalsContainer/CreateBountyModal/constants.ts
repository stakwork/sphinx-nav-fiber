export const BUDGET_PATTERN = /^[0-9]+$/

export const isBudgetValid = (budget: string): boolean => {
  const trimmedBudget = budget.trim()

  return !!(trimmedBudget && BUDGET_PATTERN.test(trimmedBudget))
}
