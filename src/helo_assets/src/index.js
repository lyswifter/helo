import { helo } from "../../declarations/helo";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await helo.greet(name);

  console.log("let do some modify thing")

  console.log("this is our online web editor")

  console.log("this is test console log")

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
