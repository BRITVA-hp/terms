document.addEventListener('DOMContentLoaded', () => {

// modal

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scarollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scarollWidth;
  }

  let scrollWidth = calcScroll();

  function modal(modal, modalActiveClass, triggers, modalClose) {
    const triggers_ = document.querySelectorAll(triggers),
      modal_ = document.querySelector(modal),
      modalClose_ = document.querySelector(modalClose);

    if (triggers_.length > 0) {
      triggers_.forEach(item => {
        item.addEventListener('click', e => {
          e.preventDefault()
          modal_.classList.add(modalActiveClass);
          document.body.style.overflow = 'hidden';
          document.body.style.marginRight = `${scrollWidth}px`;
        });
      });

      modalClose_.addEventListener('click', () => {
        modal_.classList.remove(modalActiveClass);
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
      });

      modal_.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__container')) {
          modal_.classList.remove(modalActiveClass);
          document.body.style.overflow = '';
          document.body.style.marginRight = '0px';
        }
      });
    }
  }

  modal('.modal', 'modal--active', '[data-modal]', '.modal__close');

  //city

  const cityBtn = document.querySelector("#city-btn")
  const cityMenu = document.querySelector("#city-menu")
  const cityClose = document.querySelector("#city-close")
  const cityList = document.querySelectorAll(".header__city-li")

  cityBtn?.addEventListener("click", () => {
    cityMenu?.classList.toggle("active")
  })

  cityClose?.addEventListener("click", () => {
    cityMenu?.classList.remove("active")
  })

  for (let i = 0; i < cityList.length; i++) {
    const city = cityList[i]

    if (cityList[i].textContent === cityBtn.textContent) {
      cityList[i].classList.add("active")
    }

    city.addEventListener("click", () => {
      cityBtn.textContent = city.textContent
      cityMenu?.classList.remove("active")
      cityList.forEach(el => {
        el.classList.remove("active")
      })
      city.classList.add("active")
    })
  }

  const swiper1 = new Swiper('.why__window', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.why__next',
      prevEl: '.why__prev',
    },
    breakpoints: {
      1280: {
        spaceBetween: 0,
      },
    },
  });

  const swiper2 = new Swiper('.profit__window', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.profit__next',
      prevEl: '.profit__prev',
    },
    breakpoints: {
      1280: {
        spaceBetween: 0,
      },
    },
  });

  const swiper3 = new Swiper('.complex__window', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 1,
        enabled: false,
      },
    },
  });

})