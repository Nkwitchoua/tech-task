import React, { useEffect } from 'react';
import $ from "jquery";
import useWindowDimensions from './getWindowDimension';



export const menuItems = 
    [
        {
            title: "Главное Меню",
            icon: "ant-design:home-filled",
            link: "/home"
        },
        {
            title: "Портал",
            icon: null,
            menu: [
                {
                    title: "Sample",
                    link: "/sample"
                },
                {
                    title: "Big sample",
                    link: "/sample"
                }
            ]
        },
        {
            title: "БРД",
            menu: [
                {
                    title: "Lorem Ipsum Dolor",
                    link: "/sample"
                },
                {
                    title: "sample",
                    link: "/sample"
                },
                {
                    title: "Sample",
                    link: "/sample"
                }
            ]
        },
        {
            title: "Контроль",
            menu: [
                {
                    title: "Sample",
                    link: "/sample"
                },
                {
                    title: "sample",
                    link: "/sample"
                }
            ]
        },
        {
            title: "Корреспонденция",
            menu: [
                {
                    title: "Sample",
                    link: "/sample"
                },
                {
                    title: "sample",
                    link: "/sample"
                }
            ]
        },
        {
            title: "Обращения",
            menu: [
                {
                    title: "Sample",
                    link: "/sample"
                },
                {
                    title: "sample",
                    link: "/sample"
                }
            ]
        },
        {
            title: "Отчеты",
            menu: [
                {
                    title: "Sample",
                    link: "/sample"
                },
                {
                    title: "sample",
                    link: "/sample"
                }
            ]
        }
    ]

// export default MenuItems