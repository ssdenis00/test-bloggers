import bloggers from './bloggersDb.js';

const bloggersContainer = document.querySelector('.bloggers__items');

const getTemplate = () => {
  const cardElement = document
    .querySelector('#bloggers__item')
    .content
    .querySelector('.bloggers__item')
    .cloneNode(true);

  return cardElement;
}

const addElementInContainer = (elem) => {
  bloggersContainer.prepend(elem);
}

bloggers.forEach(blogger => {
  const elem = getTemplate();
  const nameSelector = elem.querySelector('.bloggers__name');
  const youtubeSelector = elem.querySelector('.bloggers__social_type_youtube');
  const vkSelector = elem.querySelector('.bloggers__social_type_vk');
  const instagramSelector = elem.querySelector('.bloggers__social_type_insta');
  const avatarSelector = elem.querySelector('.bloger__avatar');

  nameSelector.textContent = blogger.name + ' ' + blogger.lastName;
  youtubeSelector.textContent = blogger.youtubeSubs + '+';
  vkSelector.textContent = blogger.vkSubs + '+';
  instagramSelector.textContent = blogger.instagramSubs + '+';
  avatarSelector.src = blogger.avatar;

  addElementInContainer(elem);
});

document.addEventListener('scroll', addElementsOnScroll);