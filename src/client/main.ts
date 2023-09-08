const app = document.querySelector("#app") as HTMLDivElement;

const text = document.createElement("p");
text.textContent = "Cliquez ^^";

const btn = document.createElement("button");
btn.textContent = "Click me";
btn.addEventListener("click", async () => {
  const res = await fetch("/nb-secondes/12");
  const message = await res.text();
  text.innerText = message;
});

app.appendChild(text);
app.appendChild(btn);