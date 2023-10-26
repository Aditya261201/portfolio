import React,{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import './Navbar.css';


const Navbar = () => {

    const [menuopen, setmenuopen] = useState(false);


    return<nav className='navbar'>
        <a href='/' className='title'>Portfolio</a>
        <div className='menu'>
            {menuopen ? <AiOutlineClose className='menubtn' onClick={() => { setmenuopen(!menuopen) }} /> : <GiHamburgerMenu className='menubtn' onClick={() => { setmenuopen(!menuopen) }} />}
            
            <ul className={`menuitems ${menuopen? "openedmenu": ""}`} onClick={()=>{setmenuopen(false)}}>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
                
            </ul>
        </div>
    </nav>
}

export default Navbar
