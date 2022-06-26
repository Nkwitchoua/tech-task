import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Dropdown = ({ menuItems, dropdown, setDropdown, name, identify }) => {

    return (
        <div 
            onMouseOver={() => setDropdown(true)}
            onMouseOut={() => setDropdown(false)}
            className={`dropdown__container scale-in-ver-top ${name === identify && dropdown ? "dropdown__container-show" : ""}`}>
            {
                menuItems.map( item => {
                    if(item.menu) {
                        return (
                            <div style={{position: "relative"}}>
                            <a 
                                className={'header__menu-item'}
                                onMouseOver={(e) => {
                                    setDropdown(true)
                                    // setItemName("Еще")
                                }}
                                onMouseOut={() => setDropdown(false)}
                                role="button">
                                    {item.title}
                                    <Icon className='dropdown-icon' icon="gridicons:dropdown"/>
                            </a>
                            <Dropdown 
                                name={item.title}
                                // identify={itemName} 
                                dropdown={dropdown}
                                setDropdown={setDropdown}
                                menuItems={item.menu}>
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
    )
}

export default Dropdown