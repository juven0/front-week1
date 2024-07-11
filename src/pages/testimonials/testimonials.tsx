import TestimonialsCard from '../../components/testimonialCard/testimonialCard'
import './testimonials.scss'

const Testimonials = ():JSX.Element=>{
    return(
        <div className="testimonials">
            <div className="header">
                <h2>Testimonials</h2>
                <p>What People Says</p>
            </div>
            <div className="content">
                <TestimonialsCard/>
                <TestimonialsCard/>
              
            </div>
            <div className="point">
                <div className="point_item"></div>
                <div className="point_item isActive"></div>
                <div className="point_item"></div>
            </div>
        </div>
    )
}

export default Testimonials