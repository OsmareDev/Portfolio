import { CardObject } from "../Types/types";
import { userSVG } from "./svg/Shapes/UserSVG";

export const PersonalCard : CardObject = {
  id: '1',
  name: 'Oscar Marin Egea',
  svg: userSVG,
  projects: [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/50903643?v=4",
      projectUrl: "https://github.com/OsmareDev",
      title: "OsmareDev@gmail.com"
    }
  ]
}