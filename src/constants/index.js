const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];
window.scrollTo({
  top: 1000,
  behavior: 'smooth'
});

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 124, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
];

const abilities = [
  {
    imgPath: "/images/skill.png",
    title: "My Skill",
    desc: "Harnessing expertise and craftsmanship to deliver exceptional outcomes in every project.",
    link: "https://maarifalawii-kd7s.vercel.app/", // Ganti dengan URL keterampilan yang sesuai
  },
  {
    imgPath: "/images/chat.png",
    title: "Impact",
    desc: "Creating meaningful connections and influencing positive change through clear and effective communication.",
    link: "https://maarifalawii-kd7s.vercel.app/", // Ganti dengan URL dampak yang sesuai
  },
  {
    imgPath: "/images/medal-.png",
    title: "Certifications",
    desc: "Acquiring recognized credentials that reflect dedication and mastery in various fields.",
    link: "https://maarifalawii-kd7s.vercel.app/", // Ganti dengan URL sertifikasi yang sesuai
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "AL is professional, communicative, and always ensures projects finish on time with great results.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo1.png",
    title: "Project Manager",
    date: "January 2021 - Present",
    responsibilities: [
      "Led and coordinated cross-functional teams to deliver projects on time and within budget.",
      "Managed project scopes, schedules, and resources to ensure successful project execution.",
      "Facilitated communication between stakeholders, developers, designers, and clients.",
    ],
  },
  {
    review: "AL is creative and agile, always delivering engaging content that boosts engagement and brand awareness.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo2.png",
    title: "Social Media Specialist",
    date: "June 2022 - Present",
    responsibilities: [
      "Managed content creation, scheduling, and publishing across multiple social media platforms.",
      "Developed and executed social media strategies to increase brand awareness.",
      "Analyzed social media metrics to optimize campaigns and improve performance.",
    ],
  },
  {
    review: "AL is skilled in front-end and back-end, delivering tasks quickly with effective solutions.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Full Stack Developer",
    date: "March 2022 - Nov 2024",
    responsibilities: [
      "Designed and optimized RESTful APIs and database schemas for scalability and performance.",
      "Built responsive and user-friendly interfaces using modern JavaScript frameworks.",
      "Troubleshot and resolved bugs across the full technology stack.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Hanan",
    mentions: "Team Leader",
    review:
      "I’m really impressed with Maarif Alawi’s leadership and coordination. He managed our complex project smoothly and kept the team united.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Andika Pratama",
    mentions: "Technical Lead",
    review:
      "Collaborating with Maarif as a developer was a pleasure. His professionalism and enthusiasm for web development shone through every project.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Ven",
    mentions: "Social Media Manager",
    review:
      "Maarif truly understands what our brand needs in the digital world. His content is always spot-on and positively impacts engagement and awareness.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Nabila Anjani",
    mentions: "Quality Assurance",
    review:
      "Maarif understood our needs perfectly and delivered a website that exceeded expectations. His front-end and back-end skills are top-notch.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Fahira Natalia",
    mentions: "Marketing Manager",
    review:
      "Maarif’s web development skills are impressive. He delivered a robust, scalable solution that significantly boosted our online sales.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Abel",
    mentions: "Business Analyst",
    review:
      "I can’t say enough good things about Maarif. He transformed our complex requirements into a seamless, functional website. His problem-solving skills stand out..",
    imgPath: "/images/client1.png",
  },
];
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/maarifalawii"  // Tambahkan URL Instagram kamu di sini
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://error-steel-omega.vercel.app/"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
        url: "https://error-steel-omega.vercel.app/"

  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
        url: "https://www.linkedin.com/in/maarifalawi/"  // Tambahkan URL Instagram kamu di sini

  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
