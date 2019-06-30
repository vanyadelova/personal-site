const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Vanya Delova',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Vanya Delova',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Vanya Delova',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Vanya Delova',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Vanya Delova',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
