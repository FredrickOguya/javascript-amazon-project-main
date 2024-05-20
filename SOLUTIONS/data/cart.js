export const cart = [];


export function addToCart(productId){
    let matchingItem;
    const quantities = document.querySelector(`.js-quantity-selector-${productId}`)
    

    const quantitystring = quantities.value
    let quatityNumber = Number(quantitystring)
    

    cart.forEach((cartItem)=> {
        if (productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quatityNumber;
    }else{
        cart.push({
        productId : productId,
        quantity : quatityNumber
    });
    }
}