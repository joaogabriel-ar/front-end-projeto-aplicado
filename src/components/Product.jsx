import { useState } from "react"
import { createProduct } from "../helpers.js";

export default function Product({productList,setProductList, setSubmitted}) {

    const increment = (e) => {

        e.preventDefault();

        setProductList(prevList => {
            let incrementedList = [...prevList, {
                name: '',
                price: 0
            }]

            return incrementedList
        })
    }

    const decrement = (index) => {

        if(productList.length > 1){

            setProductList(prevList => {
                let decrementedList = [...prevList].filter((p, productIndex) => index !== productIndex)
                
                return decrementedList;
            })
        }
    
    }
    
        const handleName = (e) => {
    
            let index = e.target.id;
    
            setProductList(prevList => {
                let list = [...prevList];
    
                let newProduct = list[index];
    
                newProduct = {
                    ...newProduct,
                    name: e.target.value
                }
    
                list[index] = newProduct;
    
                return list;
    
            })
        }

        const handlePrice = (e) => {
    
            let index = e.target.id;
    
            setProductList(prevList => {
                let list = [...prevList];
    
                let newPrice = list[index];
    
                newPrice = {
                    ...newPrice,
                    price: e.target.value
                }
    
                list[index] = newPrice;
    
                return list;
    
            })
        }
        const handleAmount = (e) => {
    
            let index = e.target.id;
    
            setProductList(prevList => {
                let list = [...prevList];
    
                let newAmount = list[index];
    
                newAmount = {
                    ...newAmount,
                    amount: e.target.value
                }
    
                list[index] = newAmount;
    
                return list;
    
            })
        }

        const handleSubmit = (e) =>{

            e.preventDefault();

            let data = [
                ...productList
            ]

            createProduct(data);

            setSubmitted(prev =>{
                return prev = {
                    ...prev,
                    product:true
                }
            })
        }

        
    
    return (

        <form>
         <h1>CADASTRE OS PRODUTOS</h1>

            <div className="card">
                <div className="product-card">
                    {productList.map((product, index) => {
                        return (

                            <div className="product" key={index}>
                                <div className="content">
                                    <label >Nome do produto</label>
                                    <input type="text" id={index} value={product.name} onChange={handleName}/>
                                    <label >Preço Unitário</label>
                                    <input type="number" id={index} value={product.price} onChange={handlePrice}/> 
                                    <label >Quantidade</label>
                                    <input type="number" id={index} value={product.amount} onChange={handleAmount}/>
                                    <button onClick={(e) => (e.preventDefault(), decrement(index))} className="decrement">-</button>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
                <div className="product-buttons">
                    <button className="increment" onClick={increment}>+</button>
                    <button className="submit"  onClick={handleSubmit}>OK</button>
                </div>
        </form>
    )
} 
