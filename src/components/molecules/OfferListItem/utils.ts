export function isSalary(salary: any): salary is number {
  return typeof salary === 'number' && salary !== undefined;
}
