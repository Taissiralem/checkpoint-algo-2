function produit(vec1, vec2) {
  let num = 0;
  for (let i = 0; i < vec1.length; i++) {
    num += vec1[i] * vec2[i];
  }
  return num;
}

function check(vec1, vec2) {
  let num = produit(vec1, vec2);
  return num === 0;
}

if (check(vec1, vec2)) {
  console.log("Les vecteurs vec1 et vec2 sont orthogonaux");
} else {
  console.log("Les vecteurs vec1 et vec2 ne sont pas orthogonaux");
}
