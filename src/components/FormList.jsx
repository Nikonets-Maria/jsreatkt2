import { useState } from "react"
import Form from "./Form"
function FormList(props){
    const {products, deleteProduct, createProduct, MinusButton, PlusButton} = props
    return(
        <div>
            <div>FormList</div>
            {products.map(elem => <Form
                                key={elem.id}
                                id={elem.id}
                                name={elem.name}
                                price={elem.price}
                                count={elem.count}
                                deleteProduct={deleteProduct}
                                createProduct={createProduct}
                                MinusButton={MinusButton}
                                PlusButton={PlusButton}
                                />
            )}
        </div>
    )

}
export default FormList