import React from 'react'

const SidebarLink = ({name, Icon, active, onMenuItemClick}) => {
  const isActive = active === name;
  return (
    <li className='group' onClick={() => onMenuItemClick(name)}>
      <a href={name.toLowerCase()} className='block cursor-pointer text-xl mb-2 pointer-events-none'>
    <div className='inline-block group'>
        <div className={`flex items-center group-hover:bg-primary-light rounded-full group-hover:text-primary-base pl-2 pr-8 py-3
        ${isActive ? "text-primary-base" : ""}
        `}>
            <Icon />
            <span className='ml-4 font-bold '> {name} </span>
        </div>
    </div>
      </a>
    </li>
  )
}

export default SidebarLink;