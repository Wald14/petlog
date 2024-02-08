import {ReactElement} from 'react';
// React Icons
import { AiOutlineHome } from "react-icons/ai"; // Home Icon
import { VscAccount } from "react-icons/vsc"; // Account Icon
import { PiDogFill, PiCat  } from "react-icons/pi"; // Dog Icon, Cat Icon
import { FiLogOut } from "react-icons/fi"; // Logout Icon

export const SidebarData: {title: string, path: string, icon: ReactElement, className: string}[] = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
    className: 'nav-text'
  },
  {
    title: "Account",
    path: "/account",
    icon: <VscAccount />,
    className: 'nav-text'
  },
  {
    title: "Obi",
    path: "/obi",
    icon: <PiDogFill />,
    className: 'nav-text'
  },
  {
    title: "Sunny",
    path: "/sunny",
    icon: <PiCat />,
    className: 'nav-text'
  },
  {
    title: "Moose",
    path: "/moose",
    icon: <PiDogFill />,
    className: 'nav-text'
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <FiLogOut />,
    className: 'nav-text'
  },
]