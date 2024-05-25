import './navbar.scss'
import {motion} from 'framer-motion'

const NavBar = ():JSX.Element =>{
    return(
        <div className="navbar">
            <div className="logo">
                logo
            </div>
            <motion.ul className='navs'>
                <motion.li>Service</motion.li>
                <motion.li>Pricing</motion.li>
                <motion.li>Drones</motion.li>
                <motion.li>Contact us</motion.li>
                <motion.li>About us</motion.li>
            </motion.ul>
            <div className='login'>
                <motion.button className='active-button'>Login</motion.button>
                <motion.button>register</motion.button>
            </div>
        </div>
    )
}

export default NavBar