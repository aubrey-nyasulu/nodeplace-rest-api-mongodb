import PostModel from '../models/post.model.js'
import asyncHandler from '../middleware/asyncHandler.js'

const getPost = asyncHandler(async (req, res) => {
    const id = req.params?.id || ''

    const post = await PostModel.find().where({ id })

    res.json(post)
})

const getPosts = asyncHandler(async (req, res) => {
    let { limit, page, searchParams } = req.query


    page = page > 0 ? page : 1
    limit = limit || 10

    let posts = []
    searchParams = searchParams || ''
    const regex = new RegExp(searchParams)

    posts = await PostModel.find({
        $or: [
            { title: { $regex: regex, $options: 'i' } },
            { body: { $regex: regex, $options: 'i' } },
            { tags: { $regex: regex, $options: 'i' } }
        ]
    }).skip((page - 1) * limit).limit(limit)

    res.json(posts)
})

export {
    getPost,
    getPosts,
}