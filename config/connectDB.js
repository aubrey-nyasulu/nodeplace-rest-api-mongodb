import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const connectDB = () => {
    mongoose.connect(process.env.DB_CONN_STR)
    return mongoose.connection
}

export default connectDB