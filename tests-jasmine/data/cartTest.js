import { addToCart,cart,loadFromStorage } from "../../SOLUTIONS/data/cart.js";

describe('test suite: addToCart',()=>{
    it('adds an existing product in the cart',()=>{
        
    });
    it('adds a new product to the cart',()=>{

        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        loadFromStorage
        addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(cart.length).toEqual(1)
    });
});
