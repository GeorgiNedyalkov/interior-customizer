import { MdSingleBed } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { TbBuildingWarehouse } from "react-icons/tb";
import {
  FcLandscape,
  FcEditImage,
  FcCloseUpMode,
  FcFilmReel,
  FcPodiumWithSpeaker,
} from "react-icons/fc";

// DESIGNS data
export const bigDesign = [
  {
    id: 1,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/big/big_design_01.jpg&h=0&w=1200&op=resize",
    caption:
      "BIG’s design brings the firm’s sought-after architectural sensibility to Nabr homes. The package will be available at an additional cost of approximately 10% of the price of your Nabr home.",
  },
  {
    id: 2,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/big/big_design_02.jpg&h=0&w=1200&op=resize",
    caption:
      "BIG offers the best of Scandinavian design, juxtaposing natural woods with metal and glass.",
  },
  {
    id: 3,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/big/big_design_03.jpg&h=0&w=1200&op=resize",
    caption:
      "The bedroom features elegantly simple details, like a custom integrated desk for a work from home environment that’s at once luxurious and pragmatic.",
  },
  {
    id: 4,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/big/palette.jpg&h=0&w=1200&op=resize",
    caption:
      "BIG emphasizes natural materials of the highest quality: wide oak floor planks, a light finish on exposed cross laminated timber ceilings, and stone in the bathrooms.",
  },
];

export const standardDesign = [
  {
    id: 1,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/nabr/nabr_design_01.jpg&h=0&w=1200&op=resize",
    caption: `We’ve designed a neutral canvas that you can customize to your lifestyle. 
              Its natural material palette creates a seamless transition from indoor to out.`,
  },
  {
    id: 2,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/nabr/nabr_design_02.jpg&h=0&w=1200&op=resize",
    caption: `Nabr’s design updates the mid-century modern aesthetic for today. 
              It’s high design meets California casual with sustainable, state-of-the-art finishes and appliances.`,
  },
  {
    id: 3,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/nabr/nabr_design_03.jpg&h=0&w=1200&op=resize",
    caption: `Our design balances versatile, high-performance materials with a warm, calming palette. 
              It’s at once functional and inviting.`,
  },
  {
    id: 4,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/steam_shower/steamshower_diagram_base.png&h=0&w=1200&op=resize",
    caption: `The Nabr design features thoughtful bathrooms with a spa-like array of materials: 
    stone tiling, light-wood details, and refined metal fixtures.`,
  },
  {
    id: 5,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/nabr/palette.jpg&h=0&w=1200&op=resize",
    caption: `Nabr’s wood-on-white material palette blends understated, 
    neutral materials with a handcrafted quality and locally-sourced products and finishes.`,
  },
];

export const kattyDesign = [
  {
    id: 1,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/end_lush.png&h=0&w=1200&op=resize",
    caption: `Designed to match your terrace’s dimensions and material palette, 
              these self-watering planters come planted with one of three packages. 
              Choose Lush for a verdant, private terrace experience.`,
  },
  {
    id: 2,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/mid_planter.png&h=0&w=1200&op=resize",
    caption: `The planters are custom-designed to match your terrace’s dimensions and material palette.`,
  },
  {
    id: 3,
    image:
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/irrigation.png&h=0&w=1200&op=resize",
  },
  {
    id: 4,
    images: [
      "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/planter_spec_tiered.png&h=0&w=1200&op=resize",
      // "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/planter_spec_half.png&h=0&w=1200&op=resize",
    ],
  },
];

// Pages Data
export const homeList = [
  {
    id: 1,
    title: "One Bedroom",
    price: 847_000,
    icon: [<MdSingleBed className="icon" />],
  },
  {
    id: 2,
    title: "Two Bedroom",
    price: 1_000_000,
    icon: [<MdSingleBed className="icon" />],
  },
  {
    id: 3,
    title: "Three Bedroom",
    price: 1_200_000,
    icon: [<MdSingleBed className="icon" />],
  },
];

export const addOns = [
  {
    title: "Parking Space",
    price: 75_000,
    icon: [<FaCarSide className="icon" />],
  },
  {
    title: "Extra Storage",
    price: 2_500,
    icon: [<TbBuildingWarehouse className="icon" />],
  },
];

export const designerList = [
  {
    id: 1,
    title: "Nabr",
    type: "Standard",
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/nabr/nabr_logo.svg&h=0&w=720&op=resize",
    comingSoon: false,
  },
  {
    id: 2,
    title: "Bjarke Ingels Group",
    type: ["Premium", "Limited Edition"],
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/big/big_logo.svg&h=0&w=720&op=resize",
    comingsoon: true,
  },
  {
    id: 3,
    title: "Katty Shiebeck Studio",
    type: ["Premium", "Limited Edition"],
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/katty/katty_logo.svg&h=0&w=720&op=resize",
    comingsoon: true,
  },
];
