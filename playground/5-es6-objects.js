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

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)


/*const {label:productLabel, stock, rating = 5} = product

console.log(productLabel)
console.log(stock)
console.log(rating)*/