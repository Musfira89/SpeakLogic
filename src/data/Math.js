import img1 from "../assets/3D-1.jpg";
import img2 from "../assets/3D-2.jpg";
import img3 from "../assets/3D-3.jpg";

const MathBooksData = [
  {
    id: 1,
    number: 1,
    title: "The Algebra Guide",
    description: "Understand algebra with easy steps.",
    image: img1,
    category: "Math",
  },
  {
    id: 2,
    number: 4,
    title: "Mastering Calculus",
    description: "A comprehensive guide to calculus concepts.",
    image: img1,
    category: "Math",
  },
  {
    id: 3,
    number: 3,
    title: "Journey Through Geometry",
    description: "Explore the beauty of shapes and spaces.",
    image: img3,
    category: "Math",
  },
];

const NonMathBooksData = [
  {
    id: 1,
    number: 2,
    title: "The Reading Tree",
    description: "Improve reading habits from an early age.",
    image: img2,
    category: "Non-Math",
  },
  {
    id: 2,
    number: 5,
    title: "Grammar Made Easy",
    description: "Simplify grammar rules with clear examples.",
    image: img2,
    category: "Non-Math",
  },
  {
    id: 3,
    number: 6,
    title: "Science Explorers",
    description: "Engaging science facts for young minds.",
    image: img3,
    category: "Non-Math",
  },
  {
    id: 4,
    number: 7,
    title: "History Unfolded",
    description: "A fascinating journey through major events.",
    image: img1,
    category: "Non-Math",
  },
];

export { MathBooksData, NonMathBooksData };
