import { MdSingleBed } from "react-icons/md"
import { FaCarSide } from "react-icons/fa"
import { TbBuildingWarehouse } from "react-icons/tb"

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
