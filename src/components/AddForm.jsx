
// function AddForm(props){
//     const {createProduct} = props
//     function handletKeyUp(event){
//         if (event.key === 'Enter'){
//             createProduct(event.target.value, event.target.value)
//         }
//     }
// return(
//     <div className='input_elem'>
//         <input onKeyUp={handletKeyUp}/>
//         {/* <input onKeyUp={handletKeyUp}/> */}
//     </div>)
// }

// export default AddForm



//костыль переписать 
import React, { useState } from 'react';

function AddForm(props) {
    const { createProduct } = props;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    function handleKeyUp(event) {
        if (event.key === 'Enter') {
            createProduct(name, price);
            setName(''); // Сброс значения имени
            setPrice(''); // Сброс значения цены
        }
    }

    return (
        <div className='input_elem'>
            <input 
                type="text" 
                placeholder="Введите имя продукта" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                onKeyUp={handleKeyUp}
            />
            <input 
                type="text" 
                placeholder="Введите цену продукта" 
                value={price}
                onChange={(e) => setPrice(e.target.value)} 
                onKeyUp={handleKeyUp}
            />
        </div>
    );
}

export default AddForm;
