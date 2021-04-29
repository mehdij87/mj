document.addEventListener("DOMContentLoaded", function (event) {
  function sayHello(event) {
    console.log(event);
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>";
    document.getElementById("content").innerHTML = message;
    if (name === "mehdi") {
      var title = document.querySelector("h1").textContent + " For you dear";
      document.querySelector("h1").textContent = title;
    }
  }
  document.querySelector("button").addEventListener("click", sayHello);

  document.querySelector("body").addEventListener("mousemove", (event) => {
    if (event.shiftKey === true) {
      console.log("X: " + event.clientX);
    }
  });
});
