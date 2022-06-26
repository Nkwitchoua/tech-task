import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import "../styles/header.scss";
import { menuItems } from './MenuItems';

const ModalMenu = ({modalMenu}) => {

    const [itemName, setItemName] = useState("");
  return (
    <div className="container-modal-menu">
        <div 
            className={modalMenu ? `dropdown__container-show scale-in-ver-top` : "dropdown__container"}>
            {
                menuItems.map( item => {
                    if(item.menu) {
                        return (
                            <div style={{position: "relative"}}>
                                <a 
                                    className={'header__menu-item'}
                                    role="button">
                                        {item.title}
                                        <Icon className='dropdown-icon' icon="gridicons:dropdown"/>
                                </a>
                                <Dropdown 
                                    name={item.title}
                                    identify={itemName}
                                    menuItems={item.menu}
                                    >
                                    <a role="button">
                                        {item.title}
                                    </a>
                                </Dropdown>
                            </div>
                        )
                    }
                    return (
                        <div className="header__submenu-item_box">
                            <Link className={`header__submenu-item`} to={item.link}>
                                {item.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ModalMenu