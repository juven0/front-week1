import './droneWork.scss'

const DroneWork = (props):JSX.Element=>{

    return(
        <div className="drone_work">    
            <div className="img">
                <img src={props.img} alt="" />
            </div>
            <div className="about">
                <h3>Propellers</h3>
                <p>{props.textdata}</p>
            </div>
        </div>
    )
}

export default DroneWork