
let initialState = [
    {
        id: 1,
        name: 'iphone xs',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'do apple sản xuất',
        price: 500,
        rating: 5,
        inventory: 10
    },
    {
        id: 2,
        name: 'samsung s10',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'do samsung sản xuất',
        price: 400,
        rating: 3,
        inventory: 4
    },
    {
        id: 3,
        name: 'xiaomi s1',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'do chine sản xuất',
        price: 200,
        rating: 2,
        inventory: 7
    },
]

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default productReducer;