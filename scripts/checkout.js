import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import {loadProducts, loadProductsFetch} from "./../SOLUTIONS/data/products.js"
import {loadCart} from "../SOLUTIONS/data/cart.js"
//import '../SOLUTIONS/data/backend-practise.js'
//import '../SOLUTIONS/data/cart-class.js';

async function loadPage (){

        try {
           // throw 'error1'
            await  loadProductsFetch();

            const value = await new Promise ((resolve, reject)=>{
                // throw 'error2'
                loadCart(()=>{
                   //reject('error3')
                    resolve('value3');
                });
            }); 
             
        } catch (error) {
            console.log('unexpected error. Please try again later.');
        }


    renderOrderSummary();
    renderPaymentSummary()

}
loadPage()
/*
Promise.all([
    loadProductsFetch(),
    new Promise ((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })
]).then((values)=>{
    console.log(values)
    renderOrderSummary();
    renderPaymentSummary()
})
*/
/*
new Promise ((resolve)=>{
    loadProducts(()=>{
        resolve('value1');
    })

}).then((value)=>{
    console.log(value)

    return new Promise ((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });

}).then (()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
/*

/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary(); 
    })

});
*/