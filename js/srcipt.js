// HEADER IMG ANIMATION
{
  addEventListener("DOMContentLoaded", () => {
    const headerOfferImg = document.querySelector(`.header__img_wrapper`);

    let headerImgNum = 1;

    setInterval(() => {
      headerImgNum++;
      headerOfferImg.innerHTML = ` <img src="img/header__offer_img${headerImgNum}.png" class="header__img" />`;
      if (headerImgNum === 3) {
        headerImgNum = 0;
      }
    }, 3000);
  });
}
// BESTSELLER FILTER
{
  window.addEventListener("DOMContentLoaded", () => {
    const bestsellerBtnArray = document.querySelectorAll(
      ".bestseller__menu_item"
    );
    const bestsellerMenu = document.querySelector(".bestseller__menu");

    class Bestseller {
      checked() {
        const bestsellerChecked = bestsellerMenu.querySelector(
          ".bestseller__menu_checked"
        );
        if (bestsellerChecked) {
          bestsellerChecked.classList.remove("bestseller__menu_checked");
        }
      }
      filter() {
        const bestsellerItemArray =
          document.querySelectorAll(`.bestseller__item`);

        bestsellerItemArray.forEach((el) => {
          let navItemData = event.target.dataset["btn"];
          if (!el.classList.contains(navItemData) && navItemData !== "all") {
            el.classList.add("disabled");
          } else {
            el.classList.remove("disabled");
          }
        });
      }
    }

    const bestsellerPage = new Bestseller();

    bestsellerBtnArray.forEach((el) => {
      el.addEventListener("click", () => {
        bestsellerPage.checked();
        el.classList.add("bestseller__menu_checked");
        bestsellerPage.filter();
      });
    });
  });
}
// EXAMPLE SLIDER
{
  window.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector(
        ".example__slider_item-wrapper"
      ),
      sliderItems = document.querySelectorAll(".example__slider_item"),
      sliderPrevBtn = document.querySelectorAll(".example__slider_btn")[0],
      sliderNextBtn = document.querySelectorAll(".example__slider_btn")[1],
      sliderItemWidth = window.getComputedStyle(sliderItems[0]).width,
      sliderItemGap = window.getComputedStyle(sliderWrapper).gap,
      width =
        +sliderItemWidth.slice(0, sliderItemWidth.length - 2) +
        +sliderItemGap.slice(0, sliderItemGap.length - 2),
      sliderFieldWidth = window.getComputedStyle(
        document.querySelector(".example__slider_field")
      ).width,
      sliderQuantityCounter =
        +sliderFieldWidth.slice(0, sliderFieldWidth.length - 2) / width,
      sliderItemToShow = Math.round(sliderQuantityCounter),
      sliderClicks = sliderItems.length - sliderItemToShow,
      swipe = new Hammer(sliderWrapper);
    let offSet = 0;

    function prevBtn() {
      if (offSet === 0) {
        offSet = width * sliderClicks;
      } else offSet -= width;

      sliderWrapper.style.transform = `translateX(-${offSet}px)`;
    }

    function nextBtn() {
      if (offSet >= width * sliderClicks) {
        offSet = 0;
      } else {
        offSet += width;
      }

      sliderWrapper.style.transform = `translateX(-${offSet}px)`;
    }

    sliderPrevBtn.addEventListener("click", prevBtn);

    sliderNextBtn.addEventListener("click", nextBtn);

    swipe.on("swiperight", prevBtn);
    swipe.on("swipeleft", nextBtn);
  });
}
