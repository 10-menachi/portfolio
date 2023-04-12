const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const buttons = document.querySelectorAll('.see-project');
const modalClose = document.querySelector('.modal-close');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup-title');
const popupImage = document.querySelector('.popup-image-img');
const popupDescription = document.querySelector('.popup-description');
const popupTechnologies = document.querySelector('.techs');
const popupLive = document.querySelector('.popup-live');
const popupSource = document.querySelector('.popup-source');
const popupDetails = [
  {
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'assets/snapshot-1.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLive: '',
    linkToSource: '',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'assets/snapshot-2.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLive: '',
    linkToSource: '',
  },
  {
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'assets/snapshot-3.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLive: '',
    linkToSource: '',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'assets/snapshot-4.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLive: '',
    linkToSource: '',
  },
];

hamMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    popup.classList.add('open');
    popupTitle.textContent = popupDetails[index].name;
    popupImage.src = popupDetails[index].image;
    popupDescription.textContent = popupDetails[index].description;
    popupTechnologies.innerHTML = '';
    popupDetails[index].technologies.forEach((tech) => {
      const listItem = document.createElement('li');
      listItem.textContent = tech;
      popupTechnologies.appendChild(listItem);
    });
    popupLive.href = popupDetails[index].linkToLive;
    popupSource.href = popupDetails[index].linkToSource;
  });
});

modalClose.addEventListener('click', () => {
  popup.classList.remove('open');
});
