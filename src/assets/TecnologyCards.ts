import { CardObject } from '../Types/types'
import { blenderSVG, expressSVG, mongoSVG, nodeSVG, openGL, p5SVG, processingSVG, reactSVG, unitySVG, unrealSVG } from './svg/logosSVG'
import noImage from '/noImage.jpg'

export const TecnologyCards : CardObject[] = [
  {
    id: '1',
    name: 'unity',
    svg: unitySVG,
    projects: [
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/e6dc7063-684e-4bbb-87b3-3731492401a5',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/AutoScroll_Background',
        title: 'AutoScroll Background'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/77cd6e92-79d9-4e46-b31c-046196e457d4',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/CharacterMovement',
        title: 'Character Movement'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/609955a2-9e25-402c-b843-8aadd59b1ae4',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/Collectibles',
        title: 'Collectibles'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/d657dc3d-f98f-4151-b276-b2cdf2134fe7',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/Collisions_2D',
        title: 'Collisions 2D'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/f544a8dc-5aef-4d59-ad5f-73bad878837d',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/Dialogue_System',
        title: 'Dialogue System'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/a461deb6-4ff9-4ad4-95f1-4443e6d286fe',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/FadeForVision',
        title: 'Fade For Vision'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/0fc8db23-7f0c-45ee-b39b-a68c3b604fec',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/HUD_BarController',
        title: 'HUD Bar Controller'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/399aa2ed-d84a-4418-a819-e8852019c312',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/Interest_ScreenPoint',
        title: 'Interest ScreenPoint'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/944dd90a-c61e-4a05-aab9-d3e19ae7c484',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/LoadingScreen',
        title: 'Loading Screen'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/307755ed-8652-4a47-9c11-c1917518439b',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/Pathfinding_2D',
        title: 'Pathfinding 2D'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/4d441f15-e713-41d6-bf7c-d0ca38c0ecb3',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/Portal_2D',
        title: 'Portal 2D'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/aa2b61f5-99c3-44c9-a105-432ffebeaba3',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/Shooting_System_2D',
        title: 'Shooting System 2D'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/16d5dbde-50ae-4f4c-92c7-072f4c3ef88e',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/ShowPath',
        title: 'Show Path'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/OsmareUnityModules/assets/50903643/2e39a75b-c64a-48ff-a963-5a3feceebb09',
        projectUrl: 'https://github.com/OsmareDev/OsmareUnityModules/tree/main/Touch_JoyStick',
        title: 'Touch JoyStick'
      }
    ]
  },
  {
    id: '2',
    name: 'blender',
    svg: blenderSVG,
    projects: [
      {
        imageUrl: 'https://github.com/OsmareDev/trajectoryGenerator_BlenderAddOn/assets/50903643/1dc65556-f4ae-4ff3-8888-644454c279bf',
        projectUrl: 'https://github.com/OsmareDev/trajectoryGenerator_BlenderAddOn/blob/main/README.md?plain=1',
        title: 'Trajectory Generator Blender AddOn'
      }
    ]
  },
  {
    id: '3',
    name: 'p5js',
    svg: p5SVG,
    projects: [
      {
        imageUrl: 'https://github.com/OsmareDev/BoidSimulation/assets/50903643/432d9302-6be6-4c91-8c8e-2b572ebb35d8',
        projectUrl: 'https://github.com/OsmareDev/BoidSimulation',
        title: 'Boid Simulation'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/AstarPathfinding/assets/50903643/87513516-55e6-469b-ac29-795fcb26ceaa',
        projectUrl: 'https://github.com/OsmareDev/AstarPathfinding',
        title: 'A star Pathfinding'
      }
    ]
  },
  {
    id: '4',
    name: 'processing',
    svg: processingSVG,
    projects: [
      {
        imageUrl: 'https://github.com/OsmareDev/PhysicsSimulation/assets/50903643/06607c05-e35d-4380-91f1-46480524daf9',
        projectUrl: 'https://github.com/OsmareDev/PhysicsSimulation/tree/main/05_Cloth_Simulation',
        title: 'Cloth Simulation'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PhysicsSimulation/assets/50903643/d02ef0ef-1d24-4c6b-bdfb-c17864184c05',
        projectUrl: 'https://github.com/OsmareDev/PhysicsSimulation/tree/main/01_Water_And_AirFriction',
        title: 'Water And Air Friction'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PhysicsSimulation/assets/50903643/e435ba62-2cfb-462b-8448-3c5ec0bfe3c3',
        projectUrl: 'https://github.com/OsmareDev/PhysicsSimulation/tree/main/02_ExplosionShape_And_AirForce',
        title: 'Explosion Shape And Air Force'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PhysicsSimulation/assets/50903643/05b2c5c5-007e-4092-97ec-c107693a356f',
        projectUrl: 'https://github.com/OsmareDev/PhysicsSimulation/tree/main/03_Pool_Collisions',
        title: 'Pool Collisions'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PhysicsSimulation/assets/50903643/3d1a3b25-79a5-4689-b34c-9f0ef40faa00',
        projectUrl: 'https://github.com/OsmareDev/PhysicsSimulation/tree/main/04_Collision_Efficiency',
        title: 'Collision Efficiency'
      },
      {
        imageUrl: 'http://img.youtube.com/vi/OWefXRA4vu0/0.jpg',
        projectUrl: 'https://github.com/OsmareDev/PhysicsSimulation/tree/main/06_Position_Based_Dynamics',
        title: 'PBD Simulation'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PhysicsSimulation/assets/50903643/bda25ccf-caef-4c5c-8d0e-9f941c1f4dd2',
        projectUrl: 'https://github.com/OsmareDev/PhysicsSimulation/tree/main/07_Waves',
        title: 'Waves'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PhysicsSimulation/assets/50903643/3b94931b-1cce-4d89-a1a6-4a5dab85872a',
        projectUrl: 'https://github.com/OsmareDev/PhysicsSimulation/tree/main/08_Radial_Wave_Reflexion',
        title: 'Radial Wave Relexion'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PhysicsSimulation/assets/50903643/2fc659c7-6589-4a98-92d2-2a290f3e833d',
        projectUrl: 'https://github.com/OsmareDev/PhysicsSimulation/tree/main/09_Wave_Refraction',
        title: 'Wave Refraction'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PhysicsSimulation/assets/50903643/eb882757-7c99-4ea5-a610-e15053be302b',
        projectUrl: 'https://github.com/OsmareDev/PhysicsSimulation/tree/main/00_Gravity_And_Spring',
        title: 'Gravity and Spring'
      }
    ]
  },
  {
    id: '5',
    name: 'openGL',
    svg: openGL,
    projects: [
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/178c6f9b-de8c-4a04-b87c-f195b8c4d3c8',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test01(Rotation_and_Inputs)',
        title: 'Rotation and Inputs'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/d426e2a8-45a4-45b6-8a4a-55e4291bb49d',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test02(MatrixStack)',
        title: 'Matrix Stack'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/a8b2e1f2-7313-411f-a8ad-72c139a0e3c7',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test04(Inmediate_VertexArray_VBO_VAO)',
        title: 'Inmediate VertexArray VBO VAO'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/284e3d63-000a-48fc-997f-01ef47c12889',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test05(Fragment_Shader_and_Vertex_Shader)',
        title: 'Fragment Shader and Vertex Shader'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/6f0977c9-7120-4fa1-9afc-f8d9cc2a8cf2',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test06(Textures_Reflection_Refraction)',
        title: 'Textures Reflection Refraction'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/1e696f4a-187c-48c1-8a1f-6f5775f69a20',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test07(Ilumination_and_Shadows)',
        title: 'Ilumination and Shadows'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/9498ca8d-0c35-4985-8ad4-bf22ce0cdb16',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test08(Normal_Mapping)',
        title: 'Normal Mapping'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/b4d5b5be-883a-4d26-861c-c41ec5508b04',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test09(Exterior_Ilumination)',
        title: 'Exterior Ilumination'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/245b8c03-cf52-470e-8e33-473523f1935c',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test10(Shadow_Map)',
        title: 'Shadow Map'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/72d4a68e-7fca-4cf8-b5e2-9e50956a65f2',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test11(Tesselation_and_LOD)',
        title: 'Tesselation and LOD'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/74c2e812-973c-480e-8b7f-1b77b162054b',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test12(Geometry_Shaders_and_Impostors)',
        title: 'Geometry Shaders and Impostors'
      },
      {
        imageUrl: 'https://github.com/OsmareDev/PTG_OpenGL/assets/50903643/96251c42-3a49-409d-91fd-b2ede55e851b',
        projectUrl: 'https://github.com/OsmareDev/PTG_OpenGL/tree/main/Test13(Compute_Shader)',
        title: 'Compute Shader'
      }
    ]
  },
  {
    id: '6',
    name: 'unreal',
    svg: unrealSVG,
    projects: [
      {
        imageUrl: noImage,
        projectUrl: '',
        title: 'notImplementedYet'
      }
    ]
  },
  {
    id: '7',
    name: 'express',
    svg: expressSVG,
    projects: [
      {
        imageUrl: noImage,
        projectUrl: '',
        title: 'notImplementedYet'
      }
    ]
  },
  {
    id: '8',
    name: 'mongoDB',
    svg: mongoSVG,
    projects: [
      {
        imageUrl: noImage,
        projectUrl: '',
        title: 'notImplementedYet'
      }
    ]
  },
  {
    id: '9',
    name: 'react',
    svg: reactSVG,
    projects: [
      {
        imageUrl: noImage,
        projectUrl: '',
        title: 'notImplementedYet'
      }
    ]
  },
  {
    id: '10',
    name: 'node',
    svg: nodeSVG,
    projects: [
      {
        imageUrl: noImage,
        projectUrl: '',
        title: 'notImplementedYet'
      }
    ]
  }
] 