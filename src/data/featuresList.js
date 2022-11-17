import { MdSingleBed } from "react-icons/md"
import { FaCarSide } from "react-icons/fa"
import { TbBuildingWarehouse } from "react-icons/tb"
import {
  FcLandscape,
  FcEditImage,
  FcCloseUpMode,
  FcFilmReel,
  FcPodiumWithSpeaker,
} from "react-icons/fc"

export const homeList = [
  {
    title: "One Bedroom",
    price: 847_000,
    icon: [<MdSingleBed className="icon" />],
  },
  {
    title: "Two Bedroom",
    price: 1_000_000,
    icon: [<MdSingleBed className="icon" />],
  },
  {
    title: "Three Bedroom",
    price: 1_200_000,
    icon: [<MdSingleBed className="icon" />],
  },
]

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
]

export const designerList = [
  {
    title: "Nabr",
    type: "Standard",
    img: "",
    comingSoon: false,
  },
  {
    title: "bjarke ingels group",
    type: ["Premium", "Limited Edition"],
    img: "",
    comingsoon: true,
  },
  {
    title: "Katty Shiebeck Studio",
    type: ["Premium", "Limited Edition"],
    img: "https://images.nabr.com/display?path=ConfigOptions/SOFA1/designer/nabr/nabr_logo.svg&h=0&w=720&op=resize",
    comingsoon: true,
  },
]

export const featuresList = [
  {
    title: "Outdoor Living",
    icon: <FcLandscape className="icon" />,
    features: [
      {
        title: "Terrace Landscaping",
        price: 3_000,
        details:
          "Elevate your living room with this customizable, floor-to-ceiling feature wall. Adjust shelving to display your TV, art, or books; create a workspace; or add a cocktail bar for entertaining.",
      },
      {
        title: "Terrace Landscaping",
        price: 3_000,
        details:
          "Make the most of indoor-outdoor living with this moveable outdoor kitchen. A powder-coated aluminum finish makes it durable and sleek.",
      },
    ],
  },
  {
    title: "High Design",
    icon: <FcEditImage className="icon" />,
    features: [
      {
        title: "Feature Wall",
        price: 8_000,
        details:
          "Elevate your living room with this customizable, floor-to-ceiling feature wall. Adjust shelving to display your TV, art, or books; create a workspace; or add a cocktail bar for entertaining.",
      },
      {
        title: "Glass Sliding Doors",
        price: 6_000,
        details:
          "Replace the wall between the bedroom and living room with expansive glass sliding doors that transform your home into a light, loft-like space.",
      },
      {
        title: "Built-in Bedroom Desk",
        price: 6_000,
        details:
          "This versatile oak built-in matches your home’s material palette and dimensions perfectly. Plus, it seamlessly integrates electrical wiring — so no more unsightly cables.",
      },
      {
        title: "Built-in Bed Upgrades",
        price: 10_000,
        details: "",
      },
      {
        title: "Live-Work Collection",
        price: 50_000,
        details: "",
      },
    ],
  },
  {
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
    title: "Everyday Luxuries",
    icon: <FcPodiumWithSpeaker className="icon" />,
    features: [
      {
        title: "",
        price: 0,
        details: "",
      },
    ],
  },
]
