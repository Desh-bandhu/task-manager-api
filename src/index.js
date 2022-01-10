const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user.js')
const Task = require('./models/task.js')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')

const app = express()
const port = process.env.PORT


// app.use((req, res, next) => {
//     if(req.method == 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//         res.status(503).send('Site under maintenance')
// })




app.use(express.json())
const router = new express.Router
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})


const jwt = require('jsonwebtoken')

// const myFunction = async () => {

    // const token = jwt.sign({ __id: 'abc123'}, 'thisiscourse', { expiresIn: '7 days'})

    // console.log(token)

    // const data = jwt.verify(token, 'thisiscourse')
    // console.log(data)
//---------------
    // const password = 'dbgupta123'
    // const hashedPassword = await bcrypt.hash(password, 8)

    // console.log(password)
    // console.log(hashedPassword)


    // const isMatch = await bcrypt.compare('dbgupta123', hashedPassword)
    // console.log(isMatch)
// }
//------------------------------------------
// myFunction()    

// const pet = {
//     name: 'dog'
// }
// pet.toJSON = function () {
//     // console.log(this)
//     // return this
//     return {}
// }

// console.log(JSON.stringify(pet))
//---------------------------------------
// const main = async () => {
//    // task se owner ka pata lagana
//     const task = await Task.findById('61d581043223fe1c142d9f44')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)

//     //owner se task ka pata lagana
//     const user = await User.findById('61d58065171c1319700fc5ef')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()
//----------------------------------------


// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined, true)
//     }
// })


// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message})
    
// })

