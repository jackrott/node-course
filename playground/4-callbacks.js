/*setTimeout(() => {
    console.log('2 segundos')
}, 2000);

 const names= ['Hernán', 'Karina', 'Maximiliano', 'Joe', 'Ana']
 const shortNames = names.filter((name) => {
     return name.length <= 4
 })

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
    
        callback(data)

    }, 2000);
}

const data = geocode('Talagante', (data) => {
    console.log(data)
})*/

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const sum = (num1 + num2)

        callback(sum)
    }, 2000);
}

add(1,4, (sum) => {
    console.log(sum)
})