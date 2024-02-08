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
    className: 'sidebar-text'
  },
  {
    title: "Account",
    path: "/account",
    icon: <VscAccount />,
    className: 'sidebar-text'
  },
  {
    title: "Obi",
    path: "/obi",
    icon: <PiDogFill />,
    className: 'sidebar-text'
  },
  {
    title: "Sunny",
    path: "/sunny",
    icon: <PiCat />,
    className: 'sidebar-text'
  },
  {
    title: "Moose",
    path: "/moose",
    icon: <PiDogFill />,
    className: 'sidebar-text'
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <FiLogOut />,
    className: 'sidebar-text'
  },
]