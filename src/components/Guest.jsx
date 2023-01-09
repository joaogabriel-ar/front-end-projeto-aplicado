import { useEffect } from "react";
import { useState } from "react"
import { createGuest } from "../helpers.js"

export default function Guest({ guestQuantity, productList, setSubmitted,setChosenProduct,guestList,setGuestList }) {

    const generateGuests = (qnt) => {

        let list = [];

        for (let index = 0; index < qnt; index++) {

            list.push({
                guestName: ''
            })

        }

        setGuestList(list);

    }

    const handleChosenProduct = (e) => {

        let checked = e.target.checked;
        let guestId = e.target.parentNode.parentNode.id;
        let productId = e.target.value;
        let price = productList[e.target.value].price;
        let amount = productList[e.target.value].amount;
        let name = guestList[guestId].guestName;
        let productName = e.target.id;

        if (checked) {

            setChosenProduct(prev =>{
                return prev = [...prev,{
                    productName,
                    guestId,
                    productId,
                    price: price*amount,
                    name,
                    amount
                }]
            })

        } else {
            
            setChosenProduct(prev =>{
                return prev.filter(item => (item.guestId === guestId && item.productId !== productId) || (item.guestId !== guestId));
            })
        }

    }

    const generateProducts = (productList) => {
        let list = productList.map((p, index) => {
            return (
                <div key={index}>
                    <input type="checkbox" onChange={handleChosenProduct} id={p.name} value={index} />
                    <label htmlFor="product">{p.name}</label>
                </div>
            )
        })

        return list;
    }

    const handleName = (e) => {
        let index = e.target.id;
        let guestName = e.target.value;

        setGuestList(prevList => {
            let list = [...prevList];

            list[index] = {
                guestName
            }

            return list;
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        let data = [
            ...guestList
        ]

        createGuest(data);

        setSubmitted(prev => {
            return prev = {
                ...prev,
                guest: true
            }
        })

    }

    useEffect(() => {
        generateGuests(guestQuantity)
    }, [guestQuantity])

    return (
        <form>
            <h1>CADASTRE OS CONVIDADOS</h1>
            <div className="card">
                {guestList.map((guest, index) => {
                    return (
                        <div className="guests" id={index} key={index}>
                            <label htmlFor="guestName">Nome do convidado</label>
                            <input type="text" id={index} onChange={handleName} value={guest.name} />
                            {
                                generateProducts(productList)
                            }
                        </div>
                    )
                })}
            </div>
            <button className="submit" type="submit" onClick={handleSubmit}>OK</button>
        </form>
    )
}