document.addEventListener('DOMContentLoaded', function() {

  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__list');
  let menuLinks = menu.querySelectorAll('.header__item');


  burger.addEventListener('click',

    function () {
      burger.classList.toggle('header__burger--active');
      menu.classList.toggle('header__list--active');
      document.body.classList.toggle('stop-scroll');
    })

  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      burger.classList.remove('header__burger--active');
      menu.classList.remove('header__list--active');
      document.body.classList.remove('stop-scroll')
    })
  });


  //

  let swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,


    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
  });

  //

  $(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });

  //

  document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;


      document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
        btn.classList.remove('tabs-nav__btn--active')
      });
      e.currentTarget.classList.add('tabs-nav__btn--active');

      document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });

  //

  let search = document.querySelector('.header__btn-icon');
  let searchBar = document.querySelector('.header__btn-icon-search-form');
  let btnClosed = document.querySelector('.header__btn-icon-closed');

  search.addEventListener('click',
    function () {
      search.classList.toggle('header__btn-icon--active');
      searchBar.classList.toggle('header__btn-icon-search-form--active');
    });

  btnClosed.addEventListener('click',
    function () {
      search.classList.remove('header__btn-icon--active');
      searchBar.classList.remove('header__btn-icon-search-form--active');
    });

  document.querySelector('.header__btn-icon-closed').addEventListener('click', e => {
    e.preventDefault();
  });

});




