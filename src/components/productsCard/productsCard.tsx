import './productsCard.scss'

const ProductsCard = (props):JSX.Element =>{
    return(
        <div className="products_card">
            <div className="image">
                <img src={props.img} alt=""  />
            </div>
            <div className="text">
                <h3>DJI Mavic 2 Pro</h3>
                <p>Known for its excellent camera quality</p>
                <button></button>
            </div>
        </div>
    )
}

export default ProductsCard