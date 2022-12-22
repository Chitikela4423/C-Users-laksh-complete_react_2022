// import React from 'react';
// const Restaurant= ()=>{
//     return (
//         <>
//         <h1> Hello Restaurant </h1>
//         </>
//     );
// };
// export default Restaurant;

// import React from 'react'
import React,{useState} from 'react';
import "./style.css"; // This is used to import style.css inro this restauarant.js here we are just writing ""./style.css" because both the restauarant.js and style.js are in same folder basics
import Menu from "./menuAPI.js";
// const myStyle= {color:'red'};
import Navbar from './Navbar.js'
import MenuCard from './menucard.js';


const UniqueList= [
  ...new Set(
  Menu.map((curele)=>{
  return curele.category;
})),
"All"
]

const Restaurant = () => {

    const[menuData, setMenuData]= useState(Menu);
    const[menuList, setMenuList]= useState(UniqueList);
    console.log(setMenuList);
    const filterItem= (category) =>{

    if(category=== "All"){
      setMenuData(Menu);
      return;
    }

      const updatedList= Menu.filter((curele)=>{
        return curele.category === category;
      });
      setMenuData(updatedList);
    };

  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant