require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5e988a38b73f1f27c40d3b9b', {
    age: 1
}).then((user) => {
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})