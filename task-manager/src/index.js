const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is UP in port ' + port)
})

const main = async () => {
    const user = await User.findById('5e9f29d3d8362d53f86d4acf')
    await user.populate('tasks').execPopulate()
}

main()