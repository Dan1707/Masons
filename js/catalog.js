{
  window.addEventListener("DOMContentLoaded", () => {
    const catalogWrapper = document.querySelector(".catalog__item_wrapper");
    const catalogLiWrapper = document.querySelector(
      ".catalog__list_item-wrapper"
    );
    const catalogArray = [
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
      {
        img: "white__tshirt.png",
        name: "Футболка Біла",
        price: "230",
      },
      {
        img: "yellow__hoodie.png",
        name: `Жовте Худі`,
        price: "230",
      },
    ];

    catalogArray.forEach((el, index) => {
      el["id"] = index + 1;
    });

    let catalogItemsOnPage = 16;
    let catalogCurentPage = 1;
    let catalogLiCounter = catalogArray.length / catalogItemsOnPage;

    function catalogLiMaker() {
      let html = "";
      for (let i = 0; i < catalogLiCounter; i++) {
        if (i === 0) {
          html += `
                  <li class="catalog__list_item catalog__list_checked">${
                    i + 1
                  }</li>
        `;
        } else
          html += `
         <li class="catalog__list_item">${i + 1}</li>
        `;
      }
      catalogLiWrapper.innerHTML = html;
    }

    catalogLiMaker();

    const catalogPageNum = document.querySelectorAll(
      ".catalog__list_item-wrapper li"
    );

    function catalogUpdatePage(page) {
      const start = (page - 1) * catalogItemsOnPage,
        end = start + catalogItemsOnPage,
        catalogNotes = catalogArray.slice(start, end);

      let html = "";

      catalogNotes.forEach((note) => {
        html += `
           <a href="card_open.html" class="catalog__item">
                  <div class="catalog__img_wrapper">
                    <img
                      src="img/${note.img}"
                      alt=""
                      class="catalog__img"
                    />
                  </div>
                  <p class="catalog__item_text">${note.name} ${note.id}</p>
                  <h4 class="catalog__prise">${note.price}₴</h4>
                </a>
        `;
      });
      catalogWrapper.innerHTML = html;
    }

    catalogPageNum.forEach((el, index) => {
      el.addEventListener("click", () => {
        catalogCurentPage = index + 1;
        catalogUpdatePage(catalogCurentPage);
        const catalogLiChecked = catalogLiWrapper.querySelector(
          ".catalog__list_checked"
        );
        if (catalogLiChecked) {
          catalogLiChecked.classList.remove("catalog__list_checked");
        }
        el.classList.add("catalog__list_checked");
      });
    });

    catalogUpdatePage(catalogCurentPage);
  });
}
