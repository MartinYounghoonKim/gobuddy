export function generateNumberFormat (target: number | string): string {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  let targetValue = target;
  if (typeof targetValue === "string") {
    targetValue = Number(targetValue);
  }
  if (isNaN(targetValue)) {
    return "0";
  }

  return target.toString().replace(regex, ",");
}
