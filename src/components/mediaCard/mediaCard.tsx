import './mediaCard.scss'


const MediaCard = (props):JSX.Element =>{
    return(
        <div className="media_card">
            <div className="point"></div>
            <div className="image">
                <div className="start"></div>
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default MediaCard