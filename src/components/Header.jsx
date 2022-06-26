import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
import { menuItems } from './MenuItems';
import { Icon } from "@iconify/react";
import "../styles/header.scss";
import defAvatar from "../assets/default_avatar.jpg";
import useWindowDimensions from './getWindowDimension';
import { useNavigate } from "react-router-dom";
import ModalMenu from './ModalMenu';

const Header = () => {

    const navigate = useNavigate();
    const {width} = useWindowDimensions();
    const [dropdown, setDropdown] = useState(false);
    const [itemName, setItemName] = useState("");
    const [modalMenu, setModalMenu] = useState(false);
    let moreItems = [];

    return (
        <div className='header'>
            <div className='header__menu'>
                {
                    menuItems.map((item, i) => {
                        if(width < 768 && i >= 0) {
                            return <></>
                        }
                        if(width < 950 && i > 1) {
                            moreItems.push(item);
                            return <></>
                        }
                        if(width < 1440 && i >=4) {
                            moreItems.push(item);
                            return <></>
                        }
                        if("menu" in item) {
                            return (
                                <div style={{position: "relative"}}>
                                    <a 
                                        className={'header__menu-item'}
                                        onMouseOver={(e) => {
                                            setDropdown(true)
                                            setItemName(item.title)
                                        }}
                                        onMouseOut={() => setDropdown(false)}
                                        role="button">
                                            {item.title}
                                            <Icon className='dropdown-icon' icon="gridicons:dropdown"/>
                                    </a>
                                    <Dropdown 
                                        name={item.title}
                                        key={i}
                                        identify={itemName} 
                                        dropdown={dropdown}
                                        setDropdown={setDropdown}
                                        menuItems={item.menu}>
                                        <a role="button">
                                            {/* {item.icon ? <Icon icon={`${item.icon}`}/> : ""} */}
                                            {item.title}
                                        </a>
                                    </Dropdown>
                                </div>
                            )
                        }
                        return (
                            <Link 
                                style={{textDecoration: "none", color: 'black', height: "100%", display: "flex", alignItems: "center", fontWeight: "bold"}}
                                key={i} 
                                to={`${item.link}`}>
                                    {item.icon ? <Icon style={{marginRight: "5px", fontSize: "20px"}} icon={`${item.icon}`}/> : ""}
                                    {item.title}
                            </Link>)
                    })
                }
                {   
                    moreItems.length > 0 ? 
                        <div style={{position: "relative"}}>
                            <a 
                                className={'header__menu-item'}
                                onMouseOver={(e) => {
                                    setDropdown(true)
                                    setItemName("Еще")
                                }}
                                onMouseOut={() => setDropdown(false)}
                                role="button">
                                    Ещё
                                    <Icon className='dropdown-icon' icon="gridicons:dropdown"/>
                            </a>
                            <Dropdown 
                                name="Еще"
                                identify={itemName} 
                                dropdown={dropdown}
                                setDropdown={setDropdown}
                                menuItems={moreItems}>
                                <a role="button">
                                    {/* {item.icon ? <Icon icon={`${item.icon}`}/> : ""} */}
                                    {/* {item.title} */}
                                </a>
                            </Dropdown>
                        </div> :
                        <></>
                }
                {
                   width < 768 ?
                   <div 
                    onClick={() => setModalMenu(!modalMenu)}
                    className="icon-btn"
                    >
                       <Icon icon={ modalMenu ? 
                        "ant-design:close-outlined" :
                        "ant-design:menu-outlined" }/>
                   </div> :
                   <></>
                }
            </div>
            <div className="header__end_container">
                {/* <div className="header__search-box">
                    <Icon icon="ci:search" className='header__search-icon'/>
                    <input 
                        type="text" 
                        className="header__search" 
                        placeholder='Найти'/>
                </div> */}
                <button 
                onClick={() => navigate("/add-document")}
                className="btn-primary">Добавить документ</button>
                <div className='header__user-box'>
                    <img src={defAvatar} style={{width: "30px", height: "30px", borderRadius: "50%", border: "1px solid #dfdfdf"}}/>
                    <p>Имя Фамилия</p>
                </div>
            </div>
            <ModalMenu modalMenu={modalMenu}/>
        </div>
    )
}

export default Header