import {motion} from 'framer-motion'

import './mediaCard.scss'
import playImg from '../../assets/play_arrow_24dp_FILL1_wght600_GRAD200_opsz24 (1).svg'


const MediaCard = (props):JSX.Element =>{
    return(
        <motion.div
        initial={{ scale: 0 ,rotate: 180}}
        whileInView={{ rotate: 0, scale: 1 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
        }}
         className="media_card">
            <div className="point"></div>
            <div className="image">
                <motion.div 
                 whileHover={{ scale: 1.2, rotate: 360 }}
                 whileTap={{
                   scale: 0.8,
                   rotate: 360,
                   borderRadius: "100%"
                 }}
                className="start">
                    <img src={playImg} alt="" />
                </motion.div>
                <img src={props.img} alt="" />
            </div>
        </motion.div>
    )
}

export default MediaCard