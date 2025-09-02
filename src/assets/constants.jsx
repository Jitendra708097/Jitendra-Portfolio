const CodeBracketIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 15" />
  </svg>
);

const ServerStackIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.65H8.228a3.375 3.375 0 0 0-3.285 2.65l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
  </svg>
);

const WrenchScrewdriverIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.653-4.655M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0h.01Z" />
    </svg>
);

const BookOpenIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);


export const SKILLS_DATA = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: <CodeBracketIcon /> },
      { name: 'CSS', icon: <CodeBracketIcon /> },
      { name: 'JavaScript', icon: <CodeBracketIcon /> },
      { name: 'React.js', icon: <CodeBracketIcon /> },
      { name: 'Tailwind CSS', icon: <CodeBracketIcon /> },
      { name: 'Redux', icon: <CodeBracketIcon /> },
      { name: 'Zod', icon: <CodeBracketIcon /> },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: <ServerStackIcon /> },
      { name: 'Express.js', icon: <ServerStackIcon /> },
      { name: 'MongoDB', icon: <ServerStackIcon /> },
      { name: 'Mongoose', icon: <ServerStackIcon /> },
      { name: 'JWT', icon: <ServerStackIcon /> },
    ],
  },
  {
    title: 'Languages & Fundamentals',
    skills: [
      { name: 'C/C++', icon: <CodeBracketIcon /> },
      { name: 'DSA with C++', icon: <WrenchScrewdriverIcon /> },
      { name: 'Core CSE', icon: <WrenchScrewdriverIcon /> },
    ],
  },
];

export const PROJECTS_DATA = [
    {
        title: 'Full Stack Project',
        description: 'Currently building a comprehensive full-stack application, integrating modern frontend and backend technologies to deliver a seamless user experience.',
        tags: ['MERN Stack', 'In Progress', 'Full-Stack'],
        imageUrl: 'https://picsum.photos/seed/fullstack/1000/800',
    },
    {
        title: 'Swiggy Frontend Clone',
        description: 'A pixel-perfect frontend clone of the Swiggy web application, focusing on UI/UX, component-based architecture, and state management.',
        tags: ['React.js', 'Tailwind CSS', 'Frontend'],
        imageUrl: 'https://picsum.photos/seed/swiggy/1000/800',
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Weather App',
        description: 'A dynamic weather application that fetches and displays real-time weather data from a third-party API based on user location.',
        tags: ['React.js', 'API Integration', 'JavaScript'],
        imageUrl: 'https://picsum.photos/seed/weather/1000/800',
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Tic-Tac-Toe',
        description: 'A classic Tic Tac Toe game.',
        tags: ['Java Script',"API Integration", 'HTML/CSS'],
        imageUrl: 'https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU',
        liveUrl: 'https://jitendra708097.github.io/TicTacToe.github.io/',
        repoUrl: 'https://github.com/Jitendra708097/TicTacToe.github.io',
    },
];

export const RESOURCES_DATA_FRONTED = [
    {
        title: 'React Official Docs',
        description: 'The primary source for learning React, offering comprehensive guides, tutorials, and API references.',
        url: 'https://react.dev/',
        icon: <BookOpenIcon className="w-12 h-12 text-sky-400" />,
    },
    {
        title: 'MDN Web Docs',
        description: 'An open-source, collaborative project documenting Web technologies, including CSS, HTML, and JavaScript.',
        url: 'https://developer.mozilla.org/',
        icon: <BookOpenIcon className="w-12 h-12 text-purple-400" />,
    },
    {
        title: 'Tailwind CSS Docs',
        description: 'My go-to resource for utility-first CSS, enabling rapid UI development with a highly customizable framework.',
        url: 'https://tailwindcss.com/docs',
        icon: <BookOpenIcon className="w-12 h-12 text-teal-400" />,
    },
    {
        title: 'Daisy UI Docs',
        description: 'daisyUI is the Tailwind CSS plugin you will love! It provides useful component class names to help you write less code and build faster',
        url: 'https://daisyui.com/',
        icon: <BookOpenIcon className="w-12 h-12 text-amber-400" />,
    },
    {
        title: 'Zod Docs',
        description: 'Zod is a TypeScript-first validation library. Using Zod, you can define schemas you can use to validate data, from a simple string to a complex nested object.',
        url: 'https://zod.dev/',
        icon: <BookOpenIcon className="w-12 h-12 text-blue-400" />,
    },

    {
        title: 'React Hook Form Docs',
        description: 'React Hook Form reduces the amount of code you need to write while removing unnecessary re-renders. Now dive in and explore with the following example:',
        url: 'https://react-hook-form.com/',
        icon: <BookOpenIcon className="w-12 h-12 text-pink-400" />,
    },
     {
        title: 'React Routing Docs',
        description: 'React Router is a multi-strategy router for React bridging the gap from React 18 to React 19. You can use it maximally as a React framework or as minimally as you want.',
        url: 'https://reactrouter.com/',
        icon: <BookOpenIcon className="w-12 h-12 text-amber-50-400" />,
    },

    {
        title: 'React Redux Docs',
        description: 'React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.',
        url: 'https://react-redux.js.org/',
        icon: <BookOpenIcon className="w-12 h-12 text-fuchsia-300" />,
    },
];

export const RESOURCES_DATA_BACKEND = [
  {
    title: 'Node.js Official Docs',
    description: 'A comprehensive resource for learning and referencing the Node.js runtime environment and its core APIs.',
    url: 'https://nodejs.org/en/docs/',
    icon: <BookOpenIcon className="w-12 h-12 text-green-500" />,
  },
  {
    title: 'Express.js Official Docs',
    description: 'The official documentation for Express, a minimal and flexible Node.js web application framework.',
    url: 'https://expressjs.com/',
    icon: <BookOpenIcon className="w-12 h-12 text-gray-500" />,
  },
  {
    title: 'JWT Official Docs',
    description: 'The official website for JSON Web Tokens, providing documentation on how to use, validate, and secure them.',
    url: 'https://jwt.io/introduction',
    icon: <BookOpenIcon className="w-12 h-12 text-indigo-500" />,
  },
  {
    title: 'WebRTC Official Docs',
    description: 'The official documentation for WebRTC, a technology that enables real-time communication between browsers and mobile applications.',
    url: 'https://webrtc.org/getting-started/overview/',
    icon: <BookOpenIcon className="w-12 h-12 text-blue-500" />,
  },
  {
    title: 'Socket.IO Official Docs',
    description: 'The official documentation for Socket.IO, a library that enables real-time, bidirectional and event-based communication.',
    url: 'https://socket.io/docs/v4/',
    icon: <BookOpenIcon className="w-12 h-12 text-gray-900" />,
  },
];

export const CODER_ARMY = [
  {
  title : 'MERN Stack',
  description: 'This is primary source of learning MERN Stack. where i learned that How to approach a problem.(i.e. first thought principle) know about all these resouces.',
  url: 'https://www.coderarmy.in/',
  icon: <BookOpenIcon className="w-12 h-12 text-gray-900" />
 },
 {
  title : 'DSA',
  description: 'This is primary source of learning DSA. where i learned that How to approach a problem.(i.e. first thought principle) know about all these resouces.',
  url: 'https://www.youtube.com/@CoderArmy9',
  icon: <BookOpenIcon className="w-12 h-12 text-red-900" />
 },
]

export const GALLERY_DATA = [
    {
        id: 1,
        imageUrl: 'https://picsum.photos/seed/event1/800/600',
        title: 'Coder Army MERN Course Completion',
        description: 'Celebrating the successful completion of the intensive 1-year MERN stack development course.'
    },
    {
        id: 2,
        imageUrl: 'https://picsum.photos/seed/event2/800/600',
        title: 'Hackathon Winners',
        description: 'Our team securing the first place in the university-level annual hackathon.'
    },
    {
        id: 3,
        imageUrl: 'https://picsum.photos/seed/event3/800/600',
        title: 'Tech Fest Presentation',
        description: 'Presenting my project on real-time data processing at the annual Tech Fest.'
    },
    {
        id: 4,
        imageUrl: 'https://picsum.photos/seed/event4/800/600',
        title: 'College Farewell',
        description: 'A memorable moment from our final year farewell ceremony at HRIT.'
    },
     {
        id: 5,
        imageUrl: 'https://picsum.photos/seed/event5/800/600',
        title: 'Project Collaboration Meeting',
        description: 'Late-night brainstorming session for our final year major project.'
    },
    {
        id: 6,
        imageUrl: 'https://picsum.photos/seed/event6/800/600',
        title: 'Internship First Day',
        description: 'The beginning of a new chapter - my first day as a software developer intern.'
    },
]
