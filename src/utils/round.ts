export default function round(value: number, digits: number) {
  const rounder = Math.pow(10, digits);
  return parseFloat((Math.round(value * rounder) / rounder).toFixed(digits));
}
