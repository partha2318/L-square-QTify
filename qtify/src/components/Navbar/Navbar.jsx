import React from "react";
import { link } from "react-router-dom";
import Logo from "../Logo/logo.jsx";
import Search from "../Search/Search.jsx";
import Button from "../Button/Button.jsx";
import styles from '../Navbar/Navbar.module.css';


function Navbar(){
    return (
    <nav className={styles.navbar}>
    <Logo/> 
     <Search />
     <Button/>
    
     </nav>

    );    
}
export default  Navbar;
