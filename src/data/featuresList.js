import {
  FcLandscape,
  FcEditImage,
  FcFilmReel,
  FcPodiumWithSpeaker,
  FcCloseUpMode,
} from "react-icons/fc";

import terraceBasic from "../assets/terrace_basic.png";
import terraceLush from "../assets/terrace_lush.png";
import terraceCulinary from "../assets/terrace_culinary.png";
import terraceCalifornia from "../assets/terrace_california.png";
import terracePlanters from "../assets/terrace_planters.png";
import terraceWateringSystem from "../assets/terrace_watering.png";
import terraceKitchen from "../assets/terrace_kitchen.png";
import hdBasic from "../assets/hd_basic.png";
import hdWall from "../assets/hd_wall.png";
import hdWall2 from "../assets/hd_wall_2.png";
import hdWallDesk from "../assets/hd_wall_desk.png";
import hdWallBar from "../assets/hd_wall_bar.png";
import hdBed from "../assets/hd_bed.png";
import hdBedDesk from "../assets/hd_bed_desk.png";
import hdGlassDoors from "../assets/hd_glass_doors.png";
import hdBedroomDesk from "../assets/hd_bedroom_desk.png";
import hdLiveWork from "../assets/hd_live_work.png";
import hdLiveWork2 from "../assets/hd_live_work_2.png";
import hdLiveWork3 from "../assets/hd_live_work_3.png";
import eeSound from "../assets/ee_sound.png";
import eeWine from "../assets/ee_wine.png";
import eeKitchen from "../assets/ee_kitchen_1.png";
import healthAir from "../assets/health_air.png";
import healthToilet from "../assets/health_toilet.png";
import healthShower from "../assets/health_shower.png";
import luxFloors from "../assets/lux_floors.png";
import luxTowel from "../assets/lux_towel.png";
import luxShades from "../assets/lux_shades.png";
import luxCloset1 from "../assets/lux_closet_1.png";
import luxCloset2 from "../assets/lux_closet_2.png";

export const outdoorLivingFeatures = [
  {
    id: 1,
    name: "Terrace Landscaping",
    price: 3_000,
    slides: [
      {
        id: 1,
        img: terraceBasic,
        details: `Designed to match your terrace’s dimensions and material palette, 
          these self-watering planters come planted with one of three packages.
           Choose Lush for a verdant, private terrace experience.`,
        options: [
          {
            id: 10,
            name: "Lush",
            img: terraceLush,
            caption: `Designed to match your terrace’s dimensions and material palette, 
            these self-watering planters come planted with one of three packages. 
            Choose Lush for a verdant, private terrace experience.`,
          },
          {
            id: 20,
            name: "California Native",
            img: terraceCalifornia,
            caption: `The California native package offers easy-maintenance, drought-tolerant plants.`,
          },
          {
            id: 30,
            name: "Culinary",
            img: terraceCulinary,
            caption: `Turn your terrace into an expansive home garden with the herbal planting package.`,
          },
        ],
      },
      {
        id: 2,
        img: terracePlanters,
        details: `The planters are custom-designed to match your terrace’s dimensions and material palette.`,
      },
      {
        id: 3,
        img: terraceWateringSystem,
        popups: [
          {
            title: "Self-Watering System",
            topPosition: "38vh",
            leftPosition: "24vw",
            ancor: "bottom-right",
            desc: `The self-watering irrigation system makes plant maintenance a breeze. 
            The concealed hose autoand efficiently dispenses just enough water each day. 
            You can monitor water use via your Nabr app, too.`,
          },
          {
            title: "Deep Growth Medium",
            topPosition: "60vh",
            leftPosition: "36vw",
            ancor: "top-right",
            desc: `Nabr’s planters are uniquely deep - in many cases, over three feet - 
            which allows you to grow plants that a run-of-the-mill pot simply can’t support.`,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Outdoor Kitchen",
    price: 10_000,
    slides: [
      {
        id: 1,
        img: terraceKitchen,
        details: `Make the most of indoor-outdoor living with this moveable outdoor kitchen.
        A powder-coated aluminum finish makes it durable and sleek.`,
        popups: [
          {
            title: "State-Of-The-Art Grill",
            topPosition: "38vh",
            leftPosition: "26vw",
            ancor: "bottom-right",
            desc: `The electric grill isn’t just more sustainable than a gas alternative; 
            it’s also flare-up and smoke free with a lid that’s never hot to the touch.`,
          },
          {
            title: "Concealed wheels",
            topPosition: "70vh",
            leftPosition: "26vw",
            ancor: "top-right",
            desc: `The unit fits the dimensions of your terrace neatly — 
            and has concealed wheels for easy movement and cleaning.`,
          },
          {
            title: "Refrigerator + Storage",
            topPosition: "58vh",
            leftPosition: "38vw",
            ancor: "bottom-right",
            desc: `A fridge, pull-out trash, utensil drawer, and cabinets come in thick-gauge, 
            marine-grade aluminum with a durable powder-coated finish.`,
          },
          {
            title: "Solar-Powered Lighting",
            topPosition: "44vh",
            leftPosition: "49vw",
            ancor: "top-right",
            desc: `Dekton quartz countertops and solar-powered lighting makes food prep easy — day or night.`,
          },
        ],
      },
    ],
  },
];

export const highDesignFeatures = [
  {
    name: "Feature Wall",
    price: 8_000,
    slides: [
      {
        id: 1,
        img: hdBasic,
        details: `Elevate your living room with this customizable, floor-to-ceiling feature wall. Adjust shelving to display your TV, art, or books; 
        create a workspace; or add a cocktail bar for entertaining.`,
        options: [
          {
            id: 10,
            name: "Feature Wall",
            img: hdWall,
            caption: `Elevate your living room with this customizable, floor-to-ceiling feature wall. Adjust shelving to display your TV, art, or books; 
        create a workspace; or add a cocktail bar for entertaining.`,
          },
          {
            id: 20,
            name: "Feature Wall + Desk",
            img: hdWallDesk,
            caption: `The home office component includes a desk-height countertop, 
        desk drawer, and cable management.It creates a workspace that seamlessly
        disappears behind closed doors.`,
          },
          {
            id: 30,
            name: "Feature Wall + Bar",
            img: hdWallBar,
            caption: `The cocktail/coffee bar component, which includes a stone countertop and drawers for storage, 
        transforms your living room into an informal entertainment or dining space.`,
          },
        ],
      },
      {
        id: 2,
        img: hdWall2,
        details: `The feature wall has been custom designed to match your home’s material palette and fit its dimensions. 
        It comes pre-installed, ready for you on move-in.`,
      },
      {
        id: 3,
        img: "",
      },
    ],
  },
  {
    name: "Glass Sliding Doors",
    price: 6_000,
    slides: [
      {
        id: 1,
        img: hdGlassDoors,
        details: `Replace the wall between the bedroom and living room with expansive glass sliding doors 
    that transform your home into a light, loft-like space.`,
      },
    ],
  },
  {
    name: "Built-in Bedroom Desk",
    price: 6_000,
    slides: [
      {
        id: 1,
        img: hdBedroomDesk,
        details: `This versatile oak built-in matches your home’s material palette and dimensions perfectly. 
    Plus, it seamlessly integrates electrical wiring — so no more unsightly cables.`,
      },
    ],
  },
  {
    name: "Built-in Bed Upgrades",
    price: 10_000,
    slides: [
      {
        id: 1,
        img: hdBed,
        details: `Custom designed for your home, Nabr’s built-in headboard spans the length of your bedroom wall. 
    Wall sconces, nightstands with outlets, and a floating shelf are included.`,
      },
      {
        id: 2,
        img: hdBedDesk,
        details: `This built-in upgrade — which comes with desk space and cabinets — instantly transforms your bedroom 
    into a home office. Personalize this piece with your belongings to make it truly your own.`,
      },
    ],
  },
  {
    name: "Live-Work Collection",
    price: 50_000,
    slides: [
      {
        id: 1,
        img: hdLiveWork,
        details: `Transform your bedroom into an oversized live-work suite, 
    replete with a spacious work alcove, walk-through closet, and glass sliding doors.`,
      },
      {
        id: 2,
        img: hdLiveWork2,
        details: `The translucent glass sliding doors create an open, light-filled, loft-like space.`,
      },
      {
        id: 3,
        img: hdLiveWork3,
        details: `The front of the walk-through closet includes an integrated bedframe and 
    headboard with wall sconces and nightstands. The back is full-height shelving and storage 
    with integrated lighting, drawers, shoe trays, mirror, and vanity area.`,
      },
    ],
  },
];

export const enterntainmentFeatures = [
  {
    name: "Wine Fridge",
    price: 2_000,
    slides: [
      {
        id: 1,
        img: eeWine,
        details: `A wine fridge that integrates seamlessly into your kitchen island, 
    features dual-temperature zones, and can accommodate up to 46 bottles.`,
      },
    ],
  },
  {
    name: "Pro-Grade Appliance Package",
    price: 10_000,
    slides: [
      {
        id: 1,
        img: eeKitchen,
        details: `Level up your kitchen with this package of professional-grade, 
    stainless steel appliances from Miele.`,
        popups: [
          {
            title: "Spacious Refrigerator",
            topPosition: "29vh",
            leftPosition: "15vw",
            ancor: "bottom-right",
            desc: `Stainless steel fridge and freezer includes more shelves and bigger capacity.`,
          },
          {
            title: "Instant Hot Water",
            topPosition: "48vh",
            leftPosition: "30vw",
            ancor: "top-right",
            desc: `This mini-faucet dispenses purified hot water in an instant.`,
          },
          {
            title: "Eco-Friendly Dishwasher",
            topPosition: "62vh",
            leftPosition: "30vw",
            ancor: "bottom-right",
            desc: `This dishwasher comes with many additional eco-friendly features, 
            including an economy program that reduces water use by 25%.`,
          },
          {
            title: "Smart Oven",
            topPosition: "62vh",
            leftPosition: "53vw",
            ancor: "top-right",
            desc: `This oven’s camera is a game-changer. 
            Check your roast from your phone, without ever opening the oven door.`,
          },
        ],
      },
    ],
  },
  {
    name: "Integrated Sound",
    price: 6_000,
    slides: [
      {
        id: 1,
        img: eeSound,
        details: `This state-of-the-art, app-controlled sound system seamlessly integrates into your home design, 
    eliminating the need for cables or bulky equipment. 
    Our walls are pre-wired to accept new technologies as they emerge.`,
      },
    ],
  },
];

export const healthFeatures = [
  {
    name: "Ionic Air Purifier",
    price: 4_000,
    details: "",
    slides: [
      {
        id: 1,
        img: healthAir,
        details: `Supplement the MERV 13 filtration in your Nabr home with an added layer of air purification. 
            Ionic air filtration eliminates the smallest of pathogens and particles using ionization technology. 
            Plus, ionization neutralizes odors — even smoke from wildfires.`,
      },
    ],
  },
  {
    name: "Smart Toilet",
    price: 6_000,
    details: "",
    slides: [
      {
        id: 1,
        img: healthToilet,
        details: `An upgrade you won’t regret. Features include rear and front water washing with temperature 
            and intermittent pressure controls; a temperature-controlled seat; air drying and deodorization; 
            automatic lid opening and close; and a night light.`,
      },
    ],
  },
  {
    name: "Steam Shower",
    price: 10_000,
    details: "",
    slides: [
      {
        id: 1,
        img: healthShower,
        details: `Enjoy a spa-quality wet sauna with this luxury-brand's touch-controlled steam shower. 
            Full-height glass creates a true, enclosed at-home steam room experience.`,
      },
    ],
  },
];

export const luxuryFeatures = [
  {
    name: "Heated Bathroom Floors",
    price: 2_000,
    details: "",
    slides: [
      {
        id: 1,
        img: luxFloors,
        details: `Never come out of the shower to cold tiles again. 
            Before you move in, we install heating coils under the bathroom floor 
            so that all you have to do is swipe in the Nabr app to heat the floor in a matter of minutes.`,
      },
    ],
  },
  {
    name: "Towel Warmer",
    price: 1_000,
    details: "",
    slides: [
      {
        id: 1,
        img: luxTowel,
        details: `Treat yourself to the luxury of a warm towel straight out of the shower. 
            Using about the same energy as a light bulb, this warmer heats up in minutes.`,
      },
    ],
  },
  {
    name: "Smart Window Shades",
    price: 7_000,
    details: "",
    slides: [
      {
        id: 1,
        img: luxShades,
        details: `Optimize your life with these automatic shades that come pre-installed in every room — 
            ready on move-in.`,
        popups: [
          {
            title: "Fabrics",
            topPosition: "37vh",
            leftPosition: "33vw",
            ancor: "bottom-right",
            desc: `Put fabrics where you want them, like blackouts in the bedroom 
            or solar shades in the living room.`,
          },
          {
            title: "Energy Savings",
            topPosition: "63vh",
            leftPosition: "30vw",
            ancor: "top-right",
            desc: `Automatic timed settings prevent unnecessary solar heat gains and save you energy.`,
          },
        ],
      },
    ],
  },
  {
    name: "Closets Upgrade",
    price: 2_500,
    details: "",
    slides: [
      {
        id: 1,
        img: luxCloset1,
        details: `Wooden drawers, shoe trays, hanging rods, and integrated lighting ensure 
            that your closet offers a place for everything.`,
      },
      {
        id: 2,
        img: luxCloset2,
        details: `Upgrade your utility closet with extra shelving so every item — 
            from the hamper to mops and the vacuum cleaner — has a home. 
            Plus, a pull-down rod offers extra hanging space for those delicate clothes.`,
      },
    ],
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
    name: "High Design",
    category: "design",
    icon: <FcEditImage className="icon" />,
    subfeatures: highDesignFeatures,
  },
  {
    id: 3,
    name: "Effortless Entertaining",
    icon: <FcFilmReel className="icon" />,
    subfeatures: enterntainmentFeatures,
  },
  {
    id: 4,
    name: "Health + Wellness",
    icon: <FcCloseUpMode className="icon" />,
    subfeatures: healthFeatures,
  },
  {
    id: 5,
    name: "Everyday Luxuries",
    icon: <FcPodiumWithSpeaker className="icon" />,
    subfeatures: luxuryFeatures,
  },
];
