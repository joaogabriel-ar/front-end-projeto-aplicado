import { useState } from "react"
import { createBill } from "../helpers.js"

export default function Bill({ establishmentName, setEstablishmentName, guestQuantity, setGuestQuantity, setSubmitted }) {

    const handleNameChange = (e) => {
        setEstablishmentName(e.target.value);
    }

    const handleGuestQuantityChange = (e) => {
        setGuestQuantity(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();


        const data = {
            establishmentName
        }

        try {

            createBill(data);

            setSubmitted(sub => {
                return sub = {
                    ...sub,
                    bill: true
                }
            })
        } catch (err) {
            throw err;
        }


    }

    return (
        <form>
            <h1>CADASTRE O ESTABELECIMENTO</h1>
            <div className="card">
                <div className="bill">
                    <label htmlFor="establishmentName">Nome do estabelecimento</label>
                    <input type="text" name="establishmentName" onChange={handleNameChange} value={establishmentName} />

                    <label htmlFor="guestQuantity">Quantidade de pessoas</label>
                    <input type="text" name="guestQuantity" onChange={handleGuestQuantityChange} value={guestQuantity} />

                    <button className="submit" type="submit" onClick={handleSubmit}>OK</button>

                </div>
            </div>
        </form>
    )
}