import DroneWork from '../../components/droneWork/dronWork'
import './about.scss'
import imgDrone from '../../assets/Phantom 4 pro.webp'
import MediaCard from '../../components/mediaCard/mediaCard'
import girlWithDrone from '../../assets/0218232_header_900.png'
import girlWithDrone2 from '../../assets/examen-theorique-telepilote.jpg'
import TextCard from '../../components/textcard/textCard'
import { motion } from 'framer-motion'

const abouts: string[]= [
    `Generate thrust to lift the drone off theground and control its movement in different direction.`,
    `GPS allow the drone to follow pre-proggramed flight pathor waypoints autonomously.`,
    `the giroscopse measures the drone's anglar rate or ratational mouvement around its axes.`
]
// const textCardData:Object[] = [
//     {
//         "tilte":"Build Quality",
//         "content":"High-cality Drones Are Usually Made With Robust Material Such As Carbon Fiber, Magnesium Alloy,",
//     }
// ]

const About = ():JSX.Element=>{
    return(
        <div className="about">
            <div className="header">
                <h2>How It Work</h2>
                <p>Our Drone Capture Moments With a<br/>bird's eye view </p>
            </div>
            <div className="drone_works">
                <DroneWork img = {imgDrone} textdata = {abouts[0]}/>
                <DroneWork img = {imgDrone} textdata = {abouts[1]}/>
                <DroneWork img = {imgDrone} textdata = {abouts[2]}/>
            </div>
            <div className="empowering">
                <div className="empowering_left">
                    <h2>Empowering inovation, one<br/>drone at a time</h2>
                    <p>
                        "Empowering inovation, one drone at a time" meanes that through
                        our drone, we strive to drive progress and creativity in various industries an application.
                    </p>
                    <a href="#">learn more</a>
                </div>
                <div className="empowering_right">
                    <MediaCard img={girlWithDrone}/>
                </div>
            </div>
            <div className="often">
                <div className="often_left">
                    <div className="texts">
                        <h2>
                            These Are Often Considered<br/>
                            For Drone Product Quality
                        </h2>
                        <p>
                            As Of My Last Update In September 2021, I Can Provide You<br/>
                            With Theer Key Factors That Are Often Considered For<br/>
                            Drone Product Quality
                        </p>
                        <div className="media">
                            <MediaCard img={girlWithDrone2}/>
                        </div>
                    </div>
                </div>
                <motion.div 
                 whileInView={"open"}
                className="often_right">
                    <TextCard/>
                    <TextCard/>
                    <TextCard/>
                    <TextCard/>
                </motion.div>
            </div>
        </div>
    )
}

export default About