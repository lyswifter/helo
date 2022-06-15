import { helo } from "../../declarations/helo";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  // add a more line of code here

  button.setAttribute("disabled", true);

  // I havedo some modify here

  // Interact with foo actor, calling the greet method
  const greeting = await helo.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
