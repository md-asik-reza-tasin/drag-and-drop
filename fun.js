const image = document.getElementById("img");
const boxes = document.querySelectorAll(".box");

// console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("hovered");
  });

  box.addEventListener("dragleave", (e) => {
    box.classList.remove("hovered");
  });

  box.addEventListener("drop", () => {
    box.appendChild(image);
    box.classList.remove("hovered");

    boxes.forEach((b) => {
      if (!b.querySelector("img") && !b.querySelector("p")) {
        const p = document.createElement("p");
        p.innerText = "Hey";
        b.appendChild(p);
      } else if (b.querySelector("img") && b.querySelector('p')) {
        b.querySelector("p").remove();
      }
    });
  });
});
