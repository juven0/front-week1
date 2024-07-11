import { motion} from 'framer-motion'
import './textCard.scss'

const TextCard = ():JSX.Element =>{
    return(
        <motion.div 
        className="text_card">
            <label htmlFor="">Build Quality</label>
            <p>High-cality Drones Are Usually Made With Robust Material Such As Carbon Fiber, Magnesium Alloy,</p>
        </motion.div>
    )
}

export default TextCard