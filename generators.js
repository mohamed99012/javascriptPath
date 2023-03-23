function* names() {
  let name1 = "Muhammed";
  console.log(name1);
  yield 1;
  let age = 29;
}
console.log(names().next());
