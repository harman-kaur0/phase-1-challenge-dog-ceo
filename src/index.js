console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      const dogImg = document.querySelector("div");
      data.message.forEach((e) => {
        const img = document.createElement("img");
        img.src = e;
        dogImg.appendChild(img);
        // console.log(img);
      });
    });
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const breed = document.getElementById("breed-dropdown");
  const option = breed.getElementsByTagName("option");
  const dog = document.getElementById("dog-breeds");
  function lists(e) {
    const li = document.createElement("li");
    li.innerText = e;
    li.addEventListener("click", function () {
      li.style.color = "firebrick";
    });
    dog.appendChild(li);
  }

  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);

      const keys = Object.keys(data.message);
      keys.forEach((e) => {
        lists(e);

        breed.addEventListener("change", function () {
          //   console.log(breed.value);
          // filter breeds and start with particular letter using dropdown
          //only shows the breed with names start with letter
          dog.innerHTML = "";
          switch (breed.value) {
            case "a":
              keys.forEach((e) => {
                if (e.startsWith("a")) {
                  lists(e);
                }
              });
              break;
            case "b":
              keys.forEach((e) => {
                if (e.startsWith("b")) {
                  lists(e);
                }
              });
              break;
            case "c":
              keys.forEach((e) => {
                if (e.startsWith("c")) {
                  lists(e);
                }
              });
              break;
            case "d":
              keys.forEach((e) => {
                if (e.startsWith("d")) {
                  lists(e);
                }
              });
          }
        });
      });
    });
});
