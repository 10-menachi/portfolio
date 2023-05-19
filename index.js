const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const workSection = document.querySelector('.work-section');
const works = [
  {
    title: 'To-Do List',
    image: 'assets/snapshot-1.png',
    description:
      'A simple to-do list app that allows you to add, edit and delete tasks. It also allows you to mark tasks as complete.',
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'WEBPACK', 'JEST'],
    live: 'https://10-menachi.github.io/todo-list/dist/',
    source: 'https://github.com/10-menachi/todo-list',
  },
  {
    title: 'Bartending Competition Website',
    image: 'assets/snapshot-2.png',
    description:
      'A website for a bartending competition. It is a simple UI for a competition that allows bartenders to register and submit their recipes.',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    live: 'https://10-menachi.github.io/capstone',
    source: 'https://github.com/10-menachi/capstone',
  },
];

const createWork = (work, index) => {
  const workDiv = document.createElement('div');
  workDiv.classList.add('card');
  workDiv.classList.add('card-1');
  workDiv.innerHTML = `
  <div class="left">
          <img
            src="${work.image}"
            alt="Project Snapshot"
            class="snap"
          />
        </div>
        <div class="right">
          <h1>${work.title}</h1>
          <div class="canopy">
            <h4>Canopy</h4>
            <img src="assets/circle.png" alt="Circle" />
            <h5>Back End Dev</h5>
            <img src="assets/circle.png" alt="Circle" />
            <h5>2015</h5>
          </div>
          <p>${work.description}</p>
          <ul>
            ${work.tags.map((tag) => `<li>${tag}</li>`).join('')}
          </ul>
          <button class="work-button button" id="${index}">See Project</button>
        </div>
  `;
  return workDiv;
};

const form = document.querySelector('.contact-form');
const email = document.querySelector('.email');
const errorContainer = document.createElement('div');

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

works.forEach((work, index) => {
  workSection.appendChild(createWork(work, index));
});

const popupCard = (work) => {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <div class="popup-header">
        <div class="left-side">
          <h1>${work.title}</h1>
          <div class="canopy">
            <h4>Canopy</h4>
            <img src="assets/circle.png" alt="Circle" />
            <h5>Back End Dev</h5>
            <img src="assets/circle.png" alt="Circle" />
            <h5>2015</h5>
          </div>
        </div>
        <div class="right-side">
          <i class="fas fa-times popup-close"></i>
        </div>
      </div>
      <div class="popup-left">
        <img src="${work.image}" alt="Project Snapshot" class="snapshot" />
      </div>
      <div class="popup-right">
        <p>${work.description}</p>
        <div class="popup-tags">
          <ul>
            ${work.tags.map((tag) => `<li>${tag}</li>`).join('')}
          </ul>
          <div class="line"></div>
          <div class="popup-buttons">
            <a href="${work.live}" class="popup-button button">See Live <img src="assets/Icon.png" alt="External Link" /></a>
            <a href="${work.source}" class="popup-button button">See Source <img src="assets/github.png" alt="Github" /></a>
          </div>
          <div class="next-and-prev">
            <button type="button" class="prev-button button"><i class="fas fa-chevron-left"></i> Previous</button>
            <button type="button" class="next-button button">Next <i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  `;

  const showNextWork = (currentWork) => {
    if (currentWork !== works[works.length - 1]) {
      const currentIndex = works.indexOf(currentWork);
      const nextIndex = (currentIndex + 1) % works.length;
      const nextWork = works[nextIndex];
      popup.replaceWith(popupCard(nextWork));
    }
  };

  const showPrevWork = (currentWork) => {
    if (currentWork !== works[0]) {
      const currentIndex = works.indexOf(currentWork);
      const prevIndex = (currentIndex - 1 + works.length) % works.length;
      const prevWork = works[prevIndex];
      popup.replaceWith(popupCard(prevWork));
    }
  };
  // Attach event listeners to next and previous buttons
  const nextButton = popup.querySelector('.next-button');
  nextButton.addEventListener('click', () => showNextWork(work));

  const prevButton = popup.querySelector('.prev-button');
  prevButton.addEventListener('click', () => showPrevWork(work));

  // Attach event listener to close button
  const closeButton = popup.querySelector('.popup-close');
  closeButton.addEventListener('click', () => popup.remove());

  return popup;
};
const buttons = document.querySelectorAll('.work-button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const work = works[e.target.id];
    const popup = popupCard(work);
    document.body.appendChild(popup);
  });
});

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    email.setCustomValidity('Email must be in lowercase');
    form.appendChild(errorContainer);
    errorContainer.textContent = 'Email must be in lowercase';
    errorContainer.style.color = '#fff';
    errorContainer.style.fontSize = '0.8rem';
    errorContainer.style.padding = '1rem';
    errorContainer.style.backgroundColor = 'red';
    errorContainer.style.borderRadius = '0.5rem';
  }
});

email.addEventListener('input', () => {
  email.setCustomValidity('');
});

const name = document.querySelector('.name');
const message = document.querySelector('textarea');

const getDataFromStorage = () => {
  const storageData = JSON.parse(localStorage.getItem('data'));
  if (storageData) {
    name.value = storageData.name;
    email.value = storageData.email;
    message.value = storageData.message;
  }
};

const saveDataToStorage = () => {
  const data = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('data', JSON.stringify(data));
};

name.addEventListener('input', saveDataToStorage);
email.addEventListener('input', saveDataToStorage);
message.addEventListener('input', saveDataToStorage);

window.addEventListener('load', getDataFromStorage);
