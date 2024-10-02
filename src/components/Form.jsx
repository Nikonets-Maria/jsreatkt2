
function Form(props){
    const {id, name, price, count, deleteProduct, MinusButton, PlusButton } = props
    return(
        <div 
        className="product_card"
        >
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h3>{count}</h3> 
            {count === 0 ? deleteProduct(id) : ""}
        <button className="buttonP" onClick={()=>PlusButton(id, count)}>+</button>
        <button className="buttonM" onClick={()=>MinusButton(id, count)}>-</button>
        </div>
    )
}
                                
export default Form
