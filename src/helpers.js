import axios from 'axios';

async function createBill(bill){
    const url = 'http://localhost:3000/bill';
    try{
        await axios.post(url,bill);
    } catch(err){
        throw err;
    }
}

async function createProduct(products){

    const url = 'http://localhost:3000/product';

    try{
        await axios.post(url,products);
    } catch(err){
        throw err;
    }
}

async function createGuest(guest){
    const url = 'http://localhost:3000/guest';
    try{
        await axios.post(url,guest);
    } catch(err){
        throw err;
    }
}

export {
    createBill,
    createProduct,
    createGuest
}