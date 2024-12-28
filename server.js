import dotEnv from 'dotenv'
dotEnv.config()
import cors from 'cors'
import nodeplace from 'nodeplace'

import connectDB from './config/connectDB.js'
import postsRoutes from './routes/posts.routes.js'
import middleware from './middleware/errorHandler.js'

// APP INIT
const app = nodeplace()

// MIDDLEWARE
app.use(cors())
app.use(nodeplace.json())
app.use(nodeplace.urlencoded())

// ROUTES
app.use('/api/v1/posts', postsRoutes)

// ERROR HANDLER MIDDLEWARE
app.use(middleware)

// SERVER INIT
connectDB().once('open', (err) => {
    if (err) throw new Error(err)
    console.log(`Server INIT  a success`)
    app.listen(process.env.PORT, (error) => {
        if (error) throw new Error(error)
        console.log(`App INIT a success, App is live on PORT ${process.env.PORT}`)
    })
})