export type Project = {
  id: string;
  name: string;
  imgSrc: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "purple-tree",
    name: "Midjourney Artwork Exhibition",
    imgSrc: "/projects/PurpleTreeMidjourney.png",
    description: "A surreal Midjourney-generated artwork featuring a mystical purple tree in an ethereal landscape."
  },
  {
    id: "shadow-slave-mask",
    name: "Shadow Slave Mask",
    imgSrc: "/projects/ShadowSlave.png",
    description: "Custom 3D modeled mask inspired by the Shadow Slave universe, featuring intricate dark fantasy details."
  },
  {
    id: "flower-mask",
    name: "Flower Mask",
    imgSrc: "/projects/FlowerMask.png",
    description: "An elegant floral mask design blending organic forms with artistic expression."
  },
  {
    id: "vacuum-core",
    name: "Vacuum Core",
    imgSrc: "/projects/BlackHole.png",
    description: "A mesmerizing visualization of a black hole's event horizon and gravitational lensing effects."
  },
  {
    id: "this-website",
    name: "This Website",
    imgSrc: "/projects/WebsitePicture.jpg",
    description: "A modern, minimalist portfolio built with Next.js, featuring smooth animations and responsive design."
  },
  {
    id: "abstract-work-1",
    name: "Abstract Art I",
    imgSrc: "/projects/work-1.jpg",
    description: "An exploration of color and form through abstract digital composition."
  },
];
