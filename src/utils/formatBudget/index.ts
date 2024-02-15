export function formatBudget(value: number | null) {
  if (value === null) {
    return '?'
  }

  const stringBudget = value.toLocaleString('en-US')

  const splittedBudget = stringBudget.split(',')

  return splittedBudget.join(' ')
}
