import './App.css';
import Bill from './components/Bill'
import Product from './components/Product';
import Guest from './components/Guest';
import Result from './components/Result';
import { useEffect, useState } from "react"

function App() {

  const [guestQuantity, setGuestQuantity] = useState('');
  const [guestList, setGuestList] = useState([]);
  const [establishmentName, setEstablishmentName] = useState('');
  const [productList, setProductList] = useState([{
    name: '',
    price: 0,
    amount: 0
  }])
  const [submitted, setSubmitted] = useState({
    guest: false,
    product: false,
    bill: false
  })
  const [chosenProduct, setChosenProduct] = useState([]);

  return (
    <div className='main'>
      <div className='cards'>
        <Bill
          establishmentName={establishmentName}
          setEstablishmentName={setEstablishmentName}
          guestQuantity={guestQuantity}
          setGuestQuantity={setGuestQuantity}
          setSubmitted={setSubmitted}
        />
        {submitted.bill &&
          <Product
            productList={productList}
            setProductList={setProductList}
            setSubmitted={setSubmitted}
          />}

        {submitted.product && 
        <Guest 
        guestQuantity={guestQuantity}
        setSubmitted = {setSubmitted}
        productList={productList}
        chosenProduct={chosenProduct}
        setChosenProduct={setChosenProduct}
        guestList={guestList}
        setGuestList={setGuestList}
        />}
      </div>
        <Result chosenProduct={chosenProduct}
        submitted={submitted}
        guestList={guestList}/>
      {/* <button type='submit'>Enviar</button> */}
    </div>
  );
}

export default App;
