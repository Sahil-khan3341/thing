const filePicker = document.getElementById("filePicker");
const library = document.getElementById("library");
const player = document.getElementById("player");

let currentURL = null;

filePicker.addEventListener("change", () => {
  library.innerHTML = "";

  [...filePicker.files].forEach(file => {
    const li = document.createElement("li");
    li.textContent = file.name;

    li.addEventListener("click", () => {
      if (currentURL) URL.revokeObjectURL(currentURL);

      currentURL = URL.createObjectURL(file);
      player.src = currentURL;

      // THIS is the magic line
      player.play();
    });

    library.appendChild(li);
  });
});
