import { mototrial_backend } from "../../declarations/mototrial_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  if(button.name == "SetName")
  {
    const name = document.getElementById("name").value.toString();

    button.setAttribute("disabled", true);

    // Interact with foo actor, calling the greet method
    const greeting = await mototrial_backend.greet(name);

    button.removeAttribute("disabled");

    document.getElementById("greeting").innerText = greeting;
  }
  else if(button.name == "GetName")
  {
    const name = document.getElementById("name").value.toString();

    button.setAttribute("disabled", true);

    // Interact with foo actor, calling the greet method
    const greeting = await mototrial_backend.getName();

    button.removeAttribute("disabled");

    document.getElementById("greeting").innerText = greeting;
  }
return false;
});
