{
  window.addEventListener("DOMContentLoaded", () => {
    const catalogWrapper = document.querySelector(".catalog__item_wrapper"),
      catalogLiWrapper = document.querySelector(".catalog__list_item-wrapper"),
      catalogSelect = document.querySelector("#catalogOnPageId"),
      catalogArray = [
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
      ],
      sliderPrevBtn = document.querySelectorAll(".catalog__list_btn")[0],
      sliderNextBtn = document.querySelectorAll(".catalog__list_btn")[1],
      catalogPageNum = document.querySelectorAll(
        ".catalog__list_item-wrapper li"
      );

    let catalogItemsOnPage = 0;
    let catalogCurrentPage = 1;
    let catalogLiCounter = 0;

    catalogArray.forEach((el, index) => {
      el["id"] = index + 1;
    });

    catalogNumCounter();
    catalogLiMaker();
    catalogUpdatePage(catalogCurrentPage);

    catalogSelect.addEventListener("change", () => {
      catalogCurrentPage = 1;
      sliderItemIndex = 1;
      catalogNumCounter();
      catalogLiMaker();
      catalogUpdatePage(catalogCurrentPage);
      console.log(catalogPageNum);
    });

    function catalogNumCounter() {
      catalogItemsOnPage = parseInt(catalogSelect.value);
      catalogLiCounter = Math.ceil(catalogArray.length / catalogItemsOnPage);
    }

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

    function catalogUpdatePage(page) {
      const start = (page - 1) * catalogItemsOnPage,
        end = start + catalogItemsOnPage,
        catalogNotes = catalogArray.slice(start, end);
      console.log(start, end);
      let html = "";
      catalogWrapper.innerHTML = "";
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

    function catalogChecked() {
      const catalogLiChecked = catalogLiWrapper.querySelector(
        ".catalog__list_checked"
      );
      if (catalogLiChecked) {
        catalogLiChecked.classList.remove("catalog__list_checked");
      }
    }

    let sliderItemIndex = 1;

    sliderPrevBtn.addEventListener("click", () => {
      if (sliderItemIndex === 1) {
        sliderItemIndex = 1;
      } else {
        sliderItemIndex--;
        catlogLiFunc();
      }

      console.log(sliderItemIndex, catalogLiWrapper.children.length);
    });

    sliderNextBtn.addEventListener("click", () => {
      if (sliderItemIndex >= catalogLiWrapper.children.length) {
        sliderItemIndex = catalogLiWrapper.children.length;
      } else {
        sliderItemIndex++;
        catlogLiFunc();
      }

      console.log(sliderItemIndex, catalogLiWrapper.children.length);
    });

    catalogLiWrapper.addEventListener("click", (event) => {
      if (event.target.classList.contains("catalog__list_item")) {
        const index = Array.from(catalogLiWrapper.children).indexOf(
          event.target
        );
        sliderItemIndex = index + 1;
        catlogLiFunc();
      }
    });

    function catlogLiFunc() {
      catalogCurrentPage = sliderItemIndex;
      catalogUpdatePage(catalogCurrentPage);
      catalogChecked();
      const activeItem = catalogLiWrapper.children[sliderItemIndex - 1];
      for (const item of catalogLiWrapper.children) {
        item.classList.remove("catalog__list_checked");
      }
      activeItem.classList.add("catalog__list_checked");
    }
  });
}
