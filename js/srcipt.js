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

    let offset = 0;

    function prevBtn() {
      if (offset === 0) {
        offset = width * sliderClicks;
      } else offset -= width;

      sliderWrapper.style.transform = `translateX(-${offset}px)`;
      console.log(offset);
    }

    function nextBtn() {
      if (offset >= width * sliderClicks) {
        offset = 0;
      } else {
        offset += width;
      }

      sliderWrapper.style.transform = `translateX(-${offset}px)`;
      console.log(offset);
    }

    sliderPrevBtn.addEventListener("click", prevBtn);

    sliderNextBtn.addEventListener("click", nextBtn);

    swipe.on("swiperight", prevBtn);
    swipe.on("swipeleft", nextBtn);
  });
}
//  TESTIMONIALS SLIDER
{
  window.addEventListener("DOMContentLoaded", () => {
    const sliderContent = document.querySelector(
        ".testimonials__slider_content"
      ),
      sliderPrevBtn = document.querySelectorAll(".testimonials__slider_btn")[0],
      sliderNextBtn = document.querySelectorAll(".testimonials__slider_btn")[1],
      sliderItems = document.querySelectorAll(".testimonials__slider_item"),
      sliderItemHeight = window.getComputedStyle(sliderItems[0]).height,
      height = +sliderItemHeight.slice(0, sliderItemHeight.length - 2),
      sliderClicks = sliderItems.length - 1;

    let offset = 0;

    sliderPrevBtn.addEventListener("click", () => {
      if (offset === 0) {
        offset = height * sliderClicks;
      } else offset -= height;
      sliderContent.style.transform = `translate(-50%, -${offset}px)`;
      console.log(offset);
    });

    sliderNextBtn.addEventListener("click", () => {
      if (offset >= height * sliderClicks) {
        offset = 0;
      } else offset += height;
      sliderContent.style.transform = `translate(-50%, -${offset}px)`;
      console.log(offset);
    });

    console.log(height * sliderClicks);
  });
}
// OFFER SLIDER
{
  window.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector(".offer__slider_item-wrapper"),
      sliderItems = document.querySelectorAll(".offer__slider_item"),
      sliderPrevBtn = document.querySelectorAll(".offer__slider_btn")[0],
      sliderNextBtn = document.querySelectorAll(".offer__slider_btn")[1],
      sliderItemWidth = window.getComputedStyle(sliderItems[0]).width,
      sliderField = document.querySelector(".offer__slider_item-field"),
      sliderItemGap = window.getComputedStyle(sliderWrapper).gap,
      width =
        +sliderItemWidth.slice(0, sliderItemWidth.length - 2) +
        +sliderItemGap.slice(0, sliderItemGap.length - 2),
      sliderFieldWidth = window.getComputedStyle(
        document.querySelector(".offer__slider_item-field")
      ).width,
      sliderQuantityCounter =
        +sliderFieldWidth.slice(0, sliderFieldWidth.length - 2) / width,
      sliderItemToShow = Math.round(sliderQuantityCounter),
      sliderClicks = sliderItems.length - sliderItemToShow,
      swipe = new Hammer(sliderWrapper);

    let offset = 0;

    function prevBtn() {
      if (offset === 0) {
        offset = width * sliderClicks;
      } else offset -= width;

      sliderWrapper.style.transform = `translateX(-${offset}px)`;
      console.log(offset);
    }

    function nextBtn() {
      if (offset >= width * sliderClicks) {
        offset = 0;
      } else {
        offset += width;
      }

      sliderWrapper.style.transform = `translateX(-${offset}px)`;
      console.log(offset);
    }

    sliderPrevBtn.addEventListener("click", prevBtn);

    sliderNextBtn.addEventListener("click", nextBtn);

    swipe.on("swiperight", prevBtn);
    swipe.on("swipeleft", nextBtn);
  });
}
