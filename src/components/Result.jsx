import { useEffect } from "react";
import { useState } from "react";

export default function Result({ chosenProduct, submitted, guestList }) {

    const [finalResult, setFinalResult] = useState([]);

    const paymentResult = (chosenProduct) => {

        let final = {}

        let payment = {};

        chosenProduct.forEach(e => {

            if (payment[e.productName]) {

                payment[e.productName].productCount++;
                payment[e.productName].consumedBy.push(e.name);
                payment[e.productName].division = e.price / payment[e.productName].consumedBy.length;


            } else {
                let productCount = 1
                let consumedBy = [e.name];
                payment = {
                    ...payment,
                    [e.productName]: {
                        productCount,
                        consumedBy,
                        price: parseFloat(e.price),
                        division: parseFloat(e.price)
                    }
                }
            }

        });

        console.log(payment);

        guestList && guestList.forEach(guest => {

            for (const p in payment) {

                if (final[guest.guestName] && payment[p].consumedBy.includes(guest.guestName)) {

                    final[guest.guestName].total += payment[p].division;

                } else if (payment[p].consumedBy.includes(guest.guestName)) {

                    final = {
                        ...final,
                        [guest.guestName]: {
                            total: payment[p].division
                        }
                    }

                }

            }
        })

        return final

    }

    const handleClick = () => {

        setFinalResult(paymentResult(chosenProduct));

    }

    const printValues = () => {

        let keys = Object.keys(finalResult);

        return keys.map((item, index) => {
            return (
                <div key={index} className="guest-pay">
                    <label htmlFor="guestPayment">{item}</label>
                    <label htmlFor="guestPayment">{finalResult[item].total.toFixed(2)} R$</label>
                </div>
            )
        })

    }


    return (
        submitted.guest &&
        <>
            <h1>GERE OS VALORES</h1>
            <button className="final-button" onClick={handleClick}>GERAR VALORES</button>
            <div className="card">
                {
                    finalResult && printValues()
                }


            </div>
        </>
    )
}