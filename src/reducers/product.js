
let initialState = [
    {
        id: 1,
        name: 'iphone xs',
        image: '',
        description: 'do apple sản xuất',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'samsung s10',
        image: '',
        description: 'do samsung sản xuất',
        price: 400,
        inventory: 4
    },
    {
        id: 3,
        name: 'xiaomi s1',
        image: '',
        description: 'do chine sản xuất',
        price: 200,
        inventory: 7
    },
]

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default productReducer;