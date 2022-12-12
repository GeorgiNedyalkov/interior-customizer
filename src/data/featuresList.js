import {
  FcLandscape,
  FcEditImage,
  FcCloseUpMode,
  FcFilmReel,
  FcPodiumWithSpeaker,
} from "react-icons/fc";

export const terraceSlides = [
  {
    id: 1,
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/end_base.png&h=0&w=1200&op=resize",
    details: `Designed to match your terrace’s dimensions and material palette, 
          these self-watering planters come planted with one of three packages.
           Choose Lush for a verdant, private terrace experience.`,
    options: [
      {
        id: 10,
        name: "Lush",
        caption: `Designed to match your terrace’s dimensions and material palette, 
            these self-watering planters come planted with one of three packages. 
            Choose Lush for a verdant, private terrace experience.`,
        img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/end_lush.png&h=0&w=1200&op=resize",
      },
      {
        id: 20,
        name: "California Native",
        caption: `The California native package offers easy-maintenance, drought-tolerant plants.`,
        img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/end_native.png&h=0&w=1200&op=resize",
      },
      {
        id: 30,
        name: "Culinary",
        caption: `Turn your terrace into an expansive home garden with the herbal planting package.`,
        img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/end_culinary.png&h=0&w=1200&op=resize",
      },
    ],
  },
  {
    id: 2,
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/mid_planter.png&h=0&w=1200&op=resize",
    details: `The planters are custom-designed to match your terrace’s dimensions and material palette.`,
  },
  {
    id: 3,
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_planter/irrigation.png&h=0&w=1200&op=resize",
    details: ``,
  },
];

export const outdoorLivingFeatures = [
  {
    id: 1,
    name: "Terrace Landscaping",
    price: 3_000,
    slides: terraceSlides,
  },
  {
    id: 2,
    name: "Outdoor Kitchen",
    price: 10_000,
    slides: [
      {
        id: 1,
        img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/outdoor_kitchen/outdoor_kitchen_after.png&h=0&w=1200&op=resize",
        caption: `Make the most of indoor-outdoor living with this moveable outdoor kitchen.
        A powder-coated aluminum finish makes it durable and sleek.`,
      },
    ],
  },
];

export const featureWallSlides = [
  {
    id: 1,
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/feature_wall/feature_wall_before_render_base.png&h=0&w=1200&op=resize",
    details: `Elevate your living room with this customizable, floor-to-ceiling feature wall. Adjust shelving to display your TV, art, or books; 
        create a workspace; or add a cocktail bar for entertaining.`,
    options: [
      {
        id: 10,
        name: "Feature Wall",
        caption: `Elevate your living room with this customizable, floor-to-ceiling feature wall. Adjust shelving to display your TV, art, or books; 
        create a workspace; or add a cocktail bar for entertaining.`,
        img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/feature_wall/feature_wall_option_1_upgrade.png&h=0&w=1200&op=resize",
      },
      {
        id: 20,
        name: "Feature Wall + Desk",
        caption: `The home office component includes a desk-height countertop, 
        desk drawer, and cable management.It creates a workspace that seamlessly
        disappears behind closed doors.`,
        img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/feature_wall/feature_wall_desk_upgrade.png&h=0&w=1200&op=resize",
      },
      {
        id: 30,
        name: "Feature Wall + Bar",
        caption: `The cocktail/coffee bar component, which includes a stone countertop and drawers for storage, 
        transforms your living room into an informal entertainment or dining space.`,
        img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/feature_wall/feature_wall_bar_upgrade.png&h=0&w=1200&op=resize",
      },
    ],
  },
  {
    id: 2,
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/feature_wall/feature_wall_option_1_upgrade.png&h=0&w=1200&op=resize",
    details: `The feature wall has been custom designed to match your home’s material palette and fit its dimensions. 
        It comes pre-installed, ready for you on move-in.`,
  },
  {
    id: 3,
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/feature_wall/feature_wall_option_1_upgrade.png&h=0&w=1200&op=resize",
  },
];

export const bedroomDeskSlides = [
  {
    id: 1,
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/features/br_desk/feature_wall.png&h=0&w=1200&op=resize",
    details: `This versatile oak built-in matches your home’s material palette and dimensions perfectly. 
    Plus, it seamlessly integrates electrical wiring — so no more unsightly cables.`,
  },
];

export const highDesignFeatures = [
  {
    name: "Feature Wall",
    price: 8_000,
    slides: featureWallSlides,
  },
  {
    name: "Glass Sliding Doors",
    price: 6_000,
  },
  {
    name: "Built-in Bedroom Desk",
    price: 6_000,
  },
  {
    name: "Built-in Bed Upgrades",
    price: 10_000,
    slides: bedroomDeskSlides,
  },
  {
    name: "Live-Work Collection",
    price: 50_000,
  },
];

export const featuresList = [
  {
    id: 1,
    name: "Outdoor Living",
    category: "outdoor",
    icon: <FcLandscape className="icon" />,
    subfeatures: outdoorLivingFeatures,
  },
  {
    id: 2,
    title: "High Design",
    category: "design",
    icon: <FcEditImage className="icon" />,
    subfeatures: highDesignFeatures,
  },
  {
    id: 3,
    title: "Effortless Entertaining",
    icon: <FcFilmReel className="icon" />,
    features: [
      {
        title: "Wine Fridge",
        price: 2_000,
        details: "",
      },
      {
        title: "Pro-Grade Appliance Package",
        price: 10_000,
        details: "",
      },
      {
        title: "Integrated Sound",
        price: 6_000,
        details: "",
      },
    ],
  },
  {
    id: 4,
    title: "Health + Wellness",
    icon: <FcCloseUpMode className="icon" />,
    features: [
      {
        title: "Ionic Air Purifier",
        price: 4_000,
        details: "",
      },
      {
        title: "Smart Toilet",
        price: 6_000,
        details: "",
      },
      {
        title: "Steam Shower",
        price: 10_000,
        details: "",
      },
    ],
  },
  {
    id: 5,
    title: "Everyday Luxuries",
    icon: <FcPodiumWithSpeaker className="icon" />,
    features: [
      {
        title: "Heated Bathroom Floors",
        price: 2_000,
        details: "",
      },
      {
        title: "Towel Warmer",
        price: 1_000,
        details: "",
      },
      {
        title: "Smart Window Shades",
        price: 7_000,
        details: "",
      },
      {
        title: "Closets Upgrade",
        price: 2_500,
        details: "",
      },
    ],
  },
];
