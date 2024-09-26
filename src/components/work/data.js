import Work1 from "../../assets/work1.png";
import project_1_presentation from "../../assets/project_1_presentation.pptx";

import Work2_1 from "../../assets/work2_1.png";
import Work2_2 from "../../assets/work2_2.png";
import Work2_3 from "../../assets/work2_3.png";
import Work2_4 from "../../assets/work2_4.png";
import Work2_5 from "../../assets/work2_5.png";

import Work3_1 from "../../assets/work3_1.png";
import Work3_2 from "../../assets/work3_2.png";
import Work3_3 from "../../assets/work3_3.png";


import Work4_1 from "../../assets/work4_1.png";
import Work4_2 from "../../assets/work4_2.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Library Management System",
    category: "other",
    type: "video",
    links: {
      source:
        "https://www.youtube.com/embed/lYnJdT7-eU8?si=JeOXtOaSV1pigGIH&autoplay=1",
      video: "https://youtu.be/lYnJdT7-eU8?si=heEyv47is_r7D5bO",
      repository: "https://github.com/harkoussomar/library_management_system",
      presentation: project_1_presentation,
    },
  },
  {
    id: 2,
    images: [Work2_1, Work2_2, Work2_3, Work2_4, Work2_5],
    title: "Fast React Pizza Co.",
    category: "web",
    type: "image",
    repository:
      "https://github.com/harkoussomar/use-popcorn?tab=readme-ov-file",
    description:
      "Fast-React-Pizza is a web application developed using React.js and Redux Toolkit for managing pizza orders. It provides users with an easy-to-use interface to browse a menu, add items to their cart, create orders, and view/update their orders. The project utilizes modern web development tools like Vite for fast bundling, React Router for routing, and Tailwind CSS for styling.",
  },
  {
    id: 3,
    images: [Work4_1, Work3_2, Work3_3],
    title: "usePopcorn",
    category: "web",
    type: "image",
    repository:
      "https://github.com/harkoussomar/use-popcorn?tab=readme-ov-file",
    description:
      "usePopcorn is a React application designed to help users search for movies, view details about each movie, and manage their watched list. It provides a user-friendly interface for searching movies, displaying movie details, and keeping track of watched movies.",
  },
  {
    id: 4,
    images: [Work3_1, Work4_2],
    title: "WorldWise",
    category: "web",
    type: "image",
    repository: "https://github.com/harkoussomar/world-wise?tab=readme-ov-file",
    description:
      "WorldWise is a front-end web application built with React that allows users to explore different cities and countries around the world. It provides a comprehensive set of features for browsing, adding, and managing cities, as well as viewing detailed information about each city.",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "other",
  },
];
