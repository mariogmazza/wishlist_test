"use strict";
const INIT_PRODUCTS = [
    {id:1, title: 'Apples', description: 'some red apples', price: 40.23, image:'https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467'},
    {id:2, title: 'Oranges', description: 'Peale\'em all', price: 25,image:'https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467'},
    {id:3, title: 'Bananas', description: 'Some potassium for you', price: 50,image:'https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467'},
    {id:4, title: 'Potatos', description: 'p for potato', price: 20,image:'https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467'},
    {id:5, title: 'Onions', description: 'Damm, you gotta brush', price:60,image:'https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467'},
    {id:6, title: 'Ginger', description: 'Its good for your liver', price: 10,image:'https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467'}
];
export default function productsReducer(state=INIT_PRODUCTS, action={}) {
    // PLEASE NOTE:
    // below actions are unused
    // kept for instance - Ajinkya
    switch(action.type) {
        case 'ADD_PRODUCT':
            return state.concat(action.payload);

        case 'DELETE_PRODUCT':
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];

        case 'UPDATE_PRODUCT':
            let indexToUpdate = findProductIndex(state, action.payload.id);
            const newProductExtend = {
                ...state[indexToUpdate], title: action.payload.title
            };
            return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate+1)];

    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}