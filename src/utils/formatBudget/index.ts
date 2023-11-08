export function formatBudget(value: number | null) {
  if (value === null) {
    return '?'
  }

  const stringBudget = value.toLocaleString()

  const splittedBudget = stringBudget.split(',')

  return splittedBudget.join(' ')
}
