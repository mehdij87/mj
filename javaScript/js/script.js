//arrays
let array = [
  "Jafari",
  2,
  function (name) {
    console.log("Hello " + name);
  },
  { course: "HTML, CSS & JS" },
];
console.log(array);
array[2](array[0]);