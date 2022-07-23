export function validateSearch(value: string) {
  if (value.length > 3 && value.length < 33) {
    return true;
  } else {
    return "search must have from 4 to 32 chars";
  }
}
