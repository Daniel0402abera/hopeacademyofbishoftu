import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import curriculum from '../public/img/Curriculum1.json'
import innovation from '../public/img/innovation.json'
import action from '../public/img/action.json';
import benefitOneImg from "../public/img/children.json";
import benefitTwoImg from "../public/img/benefit-two.png";
import Lottie from "lottie-react";

const benefitOne = {
  title: "Holistic Learning",
  desc: " Using best practises of Early Childhood Education Programme that focuses to build all domains of development",
  image: benefitOneImg,
  bullets: [
    {
      title: " Award winning curriculum books designed by an in-house team of experts",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <Lottie animationData={curriculum}/>
    },
    {
      title: " Intellectual Development sessions with innovative learning kits",
      desc: "Here you can add the next benefit point.",
      icon: <Lottie animationData={innovation} />,
    },
    {
      title: "Promoting the concept of ‘Learning by Doing’ through all curricular and co-curricular activities",
      desc: "This will be your last bullet point in this section.",
      icon: <Lottie animationData={action}/>,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export {benefitOne, benefitTwo};
