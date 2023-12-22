export const LoadMore = 'Load More'

export const Table = 'There is not any results for selected filter'

export const showResults = (ids: number) => {
  if (ids === 0) {
    return Table
  }

  return LoadMore
}
