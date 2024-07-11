import ProductsCard from '../../components/productsCard/productsCard'
import './products.scss'
import imgCard1 from '../../assets/drone-s-eye-view-capturing-world-from-ai-generated_201606-7055.avif'
import imgCard2 from '../../assets/images-13.jpg' 
import imgCard3 from '../../assets/167.jpg'
import imgCard4 from '../../assets/capadrone.webp'

const Products = ():JSX.Element =>{
    return(
        <div className="products"> 
            <div className="header">
                <h2>Our Products</h2>
                <p>Elevate Your Creativite Where Imagiantion<br/>Takes Flight!</p>
            </div>
            <div className="cards">
                <ProductsCard img={imgCard1}/>
                <ProductsCard img={imgCard3} />
                <ProductsCard img={imgCard2}/>
                <ProductsCard img={imgCard4}/>
            </div>
        </div>
    )
}

export default Products