require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('5ebd63e7b921686c9c72ad3d').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const removeTaskAndCount = async (id , completed) => {
    const remove = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed })
    return count
}

removeTaskAndCount('5ebd6457b921686c9c72ad41', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})