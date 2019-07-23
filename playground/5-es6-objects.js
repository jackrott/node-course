const name = 'Hernán'
const userAge = 33

const user = {
    name,
    age: userAge,
    location: 'Talagante'
}

console.log(user)

//Object destructuring
const product = {
    label: 'Black notebook',
    price: 3,
    stock: 201,
    salesPrice: undefined
}

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order')