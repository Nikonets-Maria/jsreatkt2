
function AddForm(props){
    const {createProduct} = props
    function handletKeyUp(event){
        if (event.key === 'Enter'){
            createProduct(event.target.value)
            
        }
    }
return(
    <div className='input_elem'>
        <input onKeyUp={handletKeyUp}/>
        
    </div>)
}

export default AddForm