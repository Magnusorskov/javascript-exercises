const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const blackBorderDiv = document.createElement("div");
blackBorderDiv.style.backgroundColor = "pink";
blackBorderDiv.style.border = "10px solid";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
blackBorderDiv.appendChild(h1);
const p = document.createElement("p");
p.textContent = "ME TOO!";
blackBorderDiv.appendChild(p);

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(h3);
container.appendChild(blackBorderDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
// the JavaScript file
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World");
});

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});
