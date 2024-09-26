export const contactInfo = [
  {
    id: 1,
    iconClass: "bx bx-mail-send contact__card-icon",
    title: "Email",
    data: "harkouss.omar@gmail.com",
    link: "mailto:harkouss.omar@gmail.com",
  },
  {
    id: 2,
    iconClass: "bx bxl-whatsapp contact__card-icon",
    title: "Whatsapp",
    data: "+212 773-757981",
    link: "https://api.whatsapp.com/send?phone=+212773757981&text=Hello, more information !",
  },
  {
    id: 3,
    iconClass: "bx bxl-messenger contact__card-icon",
    title: "Messenger",
    data: "omar.harkouss.3",
    link: "https://m.me/crypticalcoder",
  },
];

export const formFields = [
  {
    id: 1,
    label: "Name",
    type: "text",
    name: "name",
    placeholder: "Insert your name",
    component: "input",
  },
  {
    id: 2,
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Insert your email",
    component: "input",
  },
  {
    id: 3,
    label: "Project",
    name: "project",
    placeholder: "Write your project",
    component: "textarea",
  },
];
