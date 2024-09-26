import Service from "./Service";
import "./services.css";

const services = [
  {
    namePartOne: "Responsive",
    namePartTwo: "Web Design",
    fullName: "Responsive Web Design",
    icon: "uil-web-grid",
    description:
      "Responsive web design ensures that websites look great and function smoothly across all devices, including desktops, tablets, and mobile phones. This service involves creating flexible layouts, fluid grids, and media queries to optimize the user experience across various screen sizes.",
    keyFeatures: [
      "Adaptive layouts that adjust to screen size",
      "Cross-browser compatibility",
      "Mobile-first design approach",
      "Optimized loading times for better performance on all devices",
    ],
  },
  {
    namePartOne: "UI/UX",
    namePartTwo: "Design Integration",
    fullName: "UI/UX Design Integration",
    icon: "uil-arrow",
    description:
      "UI/UX Design Integration focuses on transforming visual designs into functional and interactive web pages. This service prioritizes user experience by ensuring that design elements, like buttons, forms, and navigation menus, are intuitive and user-friendly, enhancing the overall interaction with the site.",
    keyFeatures: [
      "Seamless transition from design mockups to code",
      "Interactive and responsive elements",
      "User-friendly navigation and layout",
      "High attention to user experience and accessibility",
    ],
  },
  {
    namePartOne: "SPA",
    namePartTwo: "Development",
    fullName: "Single Page Application (SPA) Development",
    icon: "uil-edit",
    description:
      "Single Page Application (SPA) development enhances website performance by allowing users to interact with a web app without having to reload the entire page. SPAs provide a smooth, app-like experience by loading only the necessary content dynamically, leading to faster load times and better user engagement.",
    keyFeatures: [
      "Fast and responsive user experience",
      "Efficient handling of data and page updates",
      "Reduced server load and improved performance",
      "Often built using modern JavaScript frameworks (React, Angular, Vue)",
    ],
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">

        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
    </section>
  );
}
