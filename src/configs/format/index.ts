export function calPercent(num: number, total: number): string {
  return Math.ceil((num / total) * 100) + '%'
}
