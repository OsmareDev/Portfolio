import { ReactElement } from "react";

export interface CardObject {
  id: string;
  name: string;
  svg: ReactElement;
  projects: ProjectObject[];
}

export interface ProjectObject {
  imageUrl: string;
  projectUrl: string;
  briefDescription?: string;
  title?: string;
}