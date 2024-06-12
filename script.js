const fetchCharacters = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      console.log("RESPONSE OBJECT", responseObj);
      if (responseObj.ok) {
        return responseObj.json();
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    })

    .then((library) => {
      console.log(library);

      const row = document.getElementById("card-container");
      library.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col-4");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = book.img;
        img.classList.add("card-img-top");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const button = document.createElement("button");
        button.classList.add("btn", "btn-danger");
        button.innerText = "scarta";
        button.addEventListener("click", (event) => {
          col.remove();
        });

        const title = document.createElement("h1");
        title.classList.add("card-title");
        title.textContent = book.title;

        const price = document.createElement("div");
        price.classList.add("card-price");
        price.textContent = book.price;

        cardBody.appendChild(title);
        cardBody.appendChild(price);
        cardBody.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((error) => {
      console.log("Si è verificato un errore durante la richiesta", error);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  fetchCharacters();
});
