import NavBar from '../../components/navbar/navbar';
import './landing.scss'

import imgDrone from '../../assets/Phantom 4 pro.webp'

const Landing = ():JSX.Element =>{
    return(
        <div className="landing">
            <NavBar/>
            <div className="content">
                <div className="left_side">
                    <p className='main_text'>
                        The Bets View<br/>
                        In The World<br/>
                        From Your Site<br/>
                    </p>
                    <p className='slog'>Provides you with the last online learning system and material<br/>that help you knowledge growing</p>
                    <div className="media">
                        <button className='get_started'>Get Started</button>
                        <button className='play'></button>
                        <label htmlFor="">Watch Video</label>
                    </div>
                </div>
                <div className="right_side">
                    <img src={imgDrone} alt=""  />
                </div>
            </div>
        </div>
    )
}

export default Landing; 