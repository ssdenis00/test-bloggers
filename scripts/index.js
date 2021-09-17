const menuBtnSelector = document.querySelector('.header__menu-btn');
const filterBtnSelectorList = document.querySelectorAll('.filter__choice-btn');
const filterBtnCloseSelectorList = document.querySelectorAll('.filter__close-choice-btn');

const toogleMenu = () => {
  const menuSelector = document.querySelector('.header__menu-mobile');

  if (!menuSelector.classList.contains('header__menu-mobile_active')) {
    menuSelector.classList.add('header__menu-mobile_active');
  } else {
    menuSelector.classList.remove('header__menu-mobile_active');
  }
}

const toggleChoiceWindow = (btn) => {
  const filterBlockSelector = btn.closest('.filter__choice-block');
  const filterWindow = filterBlockSelector.querySelector('.filter__select-items');

  if (!filterWindow.classList.contains('filter__select-items_active')) {
    filterWindow.classList.add('filter__select-items_active');
  } else {
    filterWindow.classList.remove('filter__select-items_active');
  }
}

filterBtnSelectorList.forEach(btn => {
  btn.addEventListener('click', () => { toggleChoiceWindow(btn) });
});

filterBtnCloseSelectorList.forEach(btn => {
  btn.addEventListener('click', () => { toggleChoiceWindow(btn) });
});

menuBtnSelector.addEventListener('click', toogleMenu);