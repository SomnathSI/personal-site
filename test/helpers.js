const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Somnath Sarkar',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Somnath Sarkar',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Somnath Sarkar',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Somnath Sarkar',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Somnath Sarkar',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
