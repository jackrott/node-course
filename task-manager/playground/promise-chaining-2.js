require('../src/db/mongoose')
const Task = require('../src/models/task')

/*Task.findByIdAndDelete('5e988d54a6f2fe35c4258f52')
.then((task) => {
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5e988d704f6f711e0c8c0deb').then((count) => {
    console.log(count)
}).catch((e) =>  {
    console.log(e)
})