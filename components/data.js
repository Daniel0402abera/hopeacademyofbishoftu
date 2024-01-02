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
import mission from '../public/img/mission.jpg'
import vision from '../public/img/vision.jpg'
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
      title: "Promo ting the concept of ‘Learning by Doing’ through all curricular and co-curricular activities",
      desc: "This will be your last bullet point in this section.",
      icon: <Lottie animationData={action}/>,
    },
  ],
};
const benefitTwo = {
  title: "Confidence Building",
  desc: "Developing self-expression and confidence through fashion shows, fancy dress, role plays etc.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Quarterly Stage presentations of the class to showcase the talent of child as an individual and in groups",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <Lottie animationData={curriculum}/>
    },
    {
      title: "Regular acknowledgement through specially designed certificates on Appreciation Day",
      desc: "Here you can add the next benefit point.",
      icon: <Lottie animationData={innovation} />,
    },
    {
      title: "Participation in events & celebrations ensures socio-emotional development",
      desc: "This will be your last bullet point in this section.",
      icon: <Lottie animationData={action}/>,
    },
  ],
};

const Mission = {
  title: "Our Mission Statement",
  desc: "Developing self-expression and confidence through fashion shows, fancy dress, role plays etc.",
  isImg: true,
  image: mission,
  
  bullets: [
    {
      title: "Quarterly Stage presentations of the class to showcase the talent of child as an individual and in groups",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <Lottie animationData={curriculum}/>
    },
    {
      title: "Regular acknowledgement through specially designed certificates on Appreciation Day",
      desc: "Here you can add the next benefit point.",
      icon: <Lottie animationData={innovation} />,
    },
    {
      title: "Participation in events & celebrations ensures socio-emotional development",
      desc: "This will be your last bullet point in this section.",
      icon: <Lottie animationData={action}/>,
    },
  ],
};


const Vision = {
  title: "Our Vision Statement",
  desc: "Developing self-expression and confidence through fashion shows, fancy dress, role plays etc.",
  isImg: true,
  image: vision,
  bullets: [
    {
      title: "Quarterly Stage presentations of the class to showcase the talent of child as an individual and in groups",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <Lottie animationData={curriculum}/>
    },
    {
      title: "Regular acknowledgement through specially designed certificates on Appreciation Day",
      desc: "Here you can add the next benefit point.",
      icon: <Lottie animationData={innovation} />,
    },
    {
      title: "Participation in events & celebrations ensures socio-emotional development",
      desc: "This will be your last bullet point in this section.",
      icon: <Lottie animationData={action}/>,
    },
  ],
};

export {benefitOne, benefitTwo, Mission, Vision};
