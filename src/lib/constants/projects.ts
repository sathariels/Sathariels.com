import { projectDetails } from "@/data/projectDetails";

export type Project = {
  id: string;
  name: string;
  imgSrc: string;
  description: string;
};

export const projects: Project[] = Object.values(projectDetails).map((project) => ({
  id: project.slug,
  name: project.title,
  imgSrc: project.heroImage,
  description: project.description,
}));
