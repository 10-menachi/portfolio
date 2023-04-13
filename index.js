const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const workSection = document.querySelector('.work-section');
const works = [
  {
    title: 'Tonic',
    image: 'assets/snapshot-1.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    title: 'Multi-Post Stories',
    image: 'assets/snapshot-2.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    title: 'Tonic',
    image: 'assets/snapshot-3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    title: 'Multi-Post Stories',
    image: 'assets/snapshot-4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live: '',
    source: '',
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
          <button type="button" class="button" id="${index}">See Project</button>
        </div>
  `;
  return workDiv;
};

works.forEach((work, index) => {
  workSection.appendChild(createWork(work, index));
});

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
