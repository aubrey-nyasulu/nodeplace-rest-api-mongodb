import nodeplace from 'nodeplace'
import { getPost, getPosts } from '../controllers/posts.controllers.js'

const router = nodeplace.Router()

router.route('/all').get(getPosts)

router.route('/one/:id')
    .get(getPost)
    .post(null)
    .put(null)
    .delete(null)

export default router