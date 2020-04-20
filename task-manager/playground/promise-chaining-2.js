require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5e988d54a6f2fe35c4258f52')
.then((task) => {
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})