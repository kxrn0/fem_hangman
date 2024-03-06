export default function make_unique(arr: string[]) {
  const obj: Record<string, boolean> = {};
  const uniques = [];

  for (let elem of arr) {
    if (obj[elem]) continue;

    obj[elem] = true;
    uniques.push(elem);
  }
  return uniques;
}
