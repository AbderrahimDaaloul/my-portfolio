export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "InfoLearn",
    description:
      "A small platforme for beginners to learn computer science from scratch.",
    logo: "/logos/education.svg",
    link: "https://github.com/AbderrahimDaaloul/learning-app-front",
    slug: "learning-app-front",
  },
  {
    title: "Internship management platform",
    description:
      "Developed an internship management platform using Spring Boot and PostgreSQL, enabling student applications, internship tracking, supervisor evaluations, and role-based access through a scalable RESTful backend.",
    logo: "/logos/spring-boot.svg",
    link: "https://github.com/AbderrahimDaaloul/backend-pfe",
    slug: "backend-pfe",
  },
  {
    title: "Tours Management APIs",
    description:
      "a tours management platform using Express.js and MongoDB, providing RESTful APIs for creating, managing, and querying tour data with secure CRUD operations and scalable backend architecture.”",
    logo: "/logos/travel.svg",
    link: "https://github.com/AbderrahimDaaloul/natours",
    slug: "natours",
  },
  {
    title: "Insurance DAPP",
    description:
      "A decentralized insurance DApp on Ethereum using smart contracts, React for the frontend, and supporting Web3 libraries to enable secure, transparent policy management and claims processing.",
    logo: "/logos/blockchain.svg",
    link: "https://github.com/AbderrahimDaaloul/insurance-DAPP",
    slug: "insurance-DAPP",
  },
];
