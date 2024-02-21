function tri(arr) {
  for (let i = 1; i < arr.length; i++) {
    let element = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = element;
  }

  return arr;
}
const triee = tri(arr);
console.log("Tableau trié:", triee);
