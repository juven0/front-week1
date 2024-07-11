import './testimonialCard.scss'
import image from '../../assets/167.jpg'
const TestimonialsCard = ():JSX.Element=>{
    return(
        <div className="testimonial_card">
            <div className="left">
                <img src={image} alt="" />
            </div>
            <div className="right">
                <p>I recently bought te DJI Mini 2, I'm
                    amazed by its performance. This little drone is incredibly ligtweight and 
                    portable. making it perfect for traveling and outdoor adventures.
                </p>
                <label htmlFor=""className='name' >
                    BOCQUELIN EDDY JUVENO
                </label>
                <label htmlFor="" className='info'>FULLSTACK Developper</label>
            </div>
        </div>
    )
}
export default TestimonialsCard