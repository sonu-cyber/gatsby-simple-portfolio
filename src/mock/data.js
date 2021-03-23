import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gayathri Raghuram | Front End Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Front End Web Developer',
  name: 'Gayathri Raghuram',
  subtitle: 'I have a background of HTML,CSS, Javascript,SASS & Bootstrap. I have familiarity with Vuejs, Angular, GIT, Parcel, Webpack & other technologies ',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_1.jpg',
  paragraphOne: 'I am looking for a Front End Web Developer Job',
  paragraphTwo: 'I have experience working as a Software Engineer, Instructor in Computer Science for over 4 years & as a HR Recruiter & Softskills Consultant for 6 years ',
  paragraphThree: 'I have worked on some courses in Udemy for a few years  ',
  resume: 'https://www.linkedin.com/in/gayathriraghuram/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Trillo Project',
    info: 'A Responsive Webpage Using Node-Sass & Flexbox ',
    info2: 'It also uses CSS custom Variables',
    url: 'https://trillo-proj.netlify.app',
    repo: 'https://github.com/sonu-cyber/',
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Project-start',
    info: 'A project using CSS Flexbox & Grid to display images on a webpage.',
    info2: 'A project from a course in Udemy',
    url: 'https://project-start.netlify.app',
    repo: 'https://github.com/sonu-cyber/'
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Questioner ',
    info: 'A Simple project in Vuejs using an API to fetch data(image) to a form on a web page ',
    info2: 'A Questioner project from a course in Eduonix',
    url: 'https://questioner-app.netlify.app',
    repo: 'https://github.com/sonu-cyber/'
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'NASA_APOD',
    info: 'A project using the NASA APOD API',
    info2: 'APOD project using DOM extensively, from a course in Udemy',
    url:'https://nasa-apod-proj.netlify.app',
    repo: 'https://github.com/sonu-cyber/',
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Reddit-app',
    info: 'A project using the Reddit API & Vuejs',
    info2: 'A project getting Subreddit from Reddit.com in a course from Eduonix',
    url: 'https://redditapp-proj.netlify.app',
    repo: 'https://github.com/sonu-cyber/',
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Grid-gard',
    info: 'A project using CSS Grids',
    info2: 'This project uses CSS Grids to display icons on a webpage.',
    url:'https://grid-gard.netlify.app',
    repo: 'https://github.com/sonu-cyber/',
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'start-up-of-the-year',
    info: 'A project using HTML, CSS',
    info2: 'A project showing a Responsive landing page for a startup website using HTML,CSS.',
    url:'https://fmnet.netlify.app',
    repo: 'https://github.com/sonu-cyber/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '+91-9880104619',
  btn: 'Call Me or Email Me',
  email: 'gayathriraghuram1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/gayathriraghuram',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sonu-cyber',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
