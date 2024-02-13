const initSlider = () => {
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const imagelist = document.querySelector(".slider-wrapper .image-list");
  const sliderScrollBar = document.querySelector(
    ".container .slider-scrollbarr"
  );
  const scrollbarThumb = sliderScrollBar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imagelist.scrollWidth - imagelist.clientWidth;

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imagelist.clientWidth * direction;
      imagelist.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;

    const handlemouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition))
const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imagelist.scrollLeft = scrollPosition;
    };

    const handlemouseUp = () => {
      document.removeEventListener("mousemove", handlemouseMove);
      document.removeEventListener("mouseup", handlemouseUp);
    };

    document.addEventListener("mousemove", handlemouseMove);
    document.addEventListener("mouseup", handlemouseUp);
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display =
      imagelist.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display =
      imagelist.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  const updateScrollthambPosition = () => {
    const scrollPosition = imagelist.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollBar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imagelist.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollthambPosition();
  });
};

window.addEventListener("load", initSlider);
