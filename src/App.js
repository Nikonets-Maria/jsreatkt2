import { useState } from "react"
import AddForm from "./components/AddForm"
import FormList from "./components/FormList"
function App(){
    const data_products = [ 
        {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
        {id: 2, name: 'Самокат', price: 700, count: 3}, 
        {id: 3, name: 'Ролики', price: 1300, count: 2}, 
        {id: 4, name: 'Сноуборд', price: 19000, count: 4}
        ]
        const [products, setProducts ] = useState(data_products)
        function deleteProduct(id){
            let filteredProducts = products.filter(elem => elem.id !== id)
            setProducts(filteredProducts)
         }
         function MinusButton(id)
         { 
            let newProducts = products.map(products => { 
                if(products.id === id){
                    products.count = products.count - 1
                }
                    return products 
                })
                setProducts(newProducts)
            }

            function PlusButton(id){
                let newProducts = products.map(products => 
                    { if(products.id === id)
                        if (products.count < 25) {
                            {products.count = products.count+1}
                        }
                        else{alert("Достигнуто маскимальное колличество")}
                        return products })
                    setProducts(newProducts)
            }
        

         function createProduct(name, price){
            let newProduct ={
            id: Date.now(),
            name,
            price,
            count: 1
        }
            setProducts([...products, newProduct])}
        
    return(
        <div>
            <AddForm createProduct={createProduct}/>
            <FormList products ={products} deleteProduct ={deleteProduct}  PlusButton ={PlusButton} MinusButton={MinusButton}/>
        </div>
    )
}
export default App
