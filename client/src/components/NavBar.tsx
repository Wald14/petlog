import {useState} from 'react'
import { Link } from "react-router-dom"
import { SidebarData } from "../Data/SidebarData"
// React Icons
import { FaBars } from 'react-icons/fa6'
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from 'react-icons';
// CSS
import "../assets/css/NavBar.css"

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)


  return (
    <IconContext.Provider value={{color: "#fff"}}>
      <div className="navbar">
        <div className="navbar-left">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar}/>
        </Link>
        <Link to="/" className="title">PetLog</Link>
        </div>
        <div className="navbar-right">
        <Link to="logout" className="login">Login</Link>
        </div>
      </div>
      <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
        <ul className="sidebar-menu-items"  onClick={showSidebar}>
          <li className="sidebar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </ IconContext.Provider>
  )
}