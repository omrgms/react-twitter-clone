import React, {useState} from 'react';
import twitterLogo from "../images/twitter.svg";
import { ExploreIcon, HomeIcon, NotificationIcon, MessageIcon, BookmarksIcon, ListIcon, ProfileIcon,MoreIcon } from '../icons/Icon';
import SidebarLink from '../components/SidebarLink';
import UserBox from '../components/UserBox';


const SidebarLinks = [ 
  {
    name: "Home",
    icon: HomeIcon
  },{
    name: "Explore",
    icon: ExploreIcon
  },{
    name: "Notification",
    icon: NotificationIcon
  },{
    name: "Messages",
    icon: MessageIcon
  },{
    name: "Bookmarks",
    icon: BookmarksIcon
  },{
    name: "Lists",
    icon: ListIcon
  },{
    name: "Profile",
    icon: ProfileIcon
  },{
    name: "More",
    icon: MoreIcon
  },
]

const Sidebar = () => {
  const [active, setActive] = useState("Home")

  const handleMenuItemClick = (name) => {
    setActive(name)
  }

  return (
    <div className="flex flex-col justify-between px-2 w-72">
      <div>
        <div className='mt-1 mb-4 ml-1 flex items-center justify-center w-9 h-9 rounded-full  hover:bg-primary-base transform transition-colors duration-500'>
        <img src={twitterLogo} alt="twitter logo" className='w-9 h-9'/>
        </div>
      <nav className='mb-4'>
        <ul>
         {SidebarLinks.map(({name, icon}) => (
          <SidebarLink name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />
         )) }
        </ul>
      </nav>
      <button className='bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 transform transition-colors duration-700 shadow-lg'> Tweet </button>  
      </div>
      
      <div>
         <UserBox />
      </div>
    </div>
  )
}

export default Sidebar