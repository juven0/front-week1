import About from '../about/about'
import Blog from '../blog/blog'
import Landing from '../landing/landing'
import Products from '../products/products'
import Testimonials from '../testimonials/testimonials'
import './main.scss'
const Main = ():JSX.Element =>{
    return(
        <div className="main">
            <Landing/>
            <About/>
            <Products/>
            <Testimonials/>
            <Blog/>
        </div>
    )
}

export default Main