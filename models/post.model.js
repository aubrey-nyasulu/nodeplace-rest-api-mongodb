import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    id: Number,
    title: String,
    body: String,
    tags: [String],
    reactions: {
        likes: Number,
        dislikes: Number
    },
    views: Number,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'creator id is required']
    }
}, { timestamps: true })

const PostModel = mongoose.model('posts', PostSchema)

export default PostModel
