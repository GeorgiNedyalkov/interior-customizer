import { MdSingleBed } from "react-icons/md"

export const featureList = [
  {
    title: "One Bedroom",
    price: 847_000,
    icon: [<MdSingleBed className="icon" />],
  },
  {
    title: "Two Bedroom",
    price: 1_000_000,
    icon: [<MdSingleBed className="icon" />, <MdSingleBed className="icon" />],
  },
  {
    title: "Three Bedroom",
    price: 1_200_000,
    icon: [
      <MdSingleBed className="icon" />,
      <MdSingleBed className="icon" />,
      <MdSingleBed className="icon" />,
    ],
  },
]
