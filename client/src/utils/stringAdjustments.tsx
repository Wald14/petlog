export default function captializeString(string: string) {
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1)
  return capitalizedString
}