const router = require('express').Router();
const boardController = require('./board.controller')
const commentController = require('./comment.controller')




router.get('/list', boardController.showList);
router.post('/write', boardController.createArticle);
router.get('/:id', boardController.showArticle);
router.patch('/:id', boardController.updateArticle);
router.delete('/:id', boardController.deleteArticle);

router.get('/comment/:master_id/:comment_id', commentController.showRyple)
router.post('/comment/:board_id', commentController.createComment);
router.patch('/comment/:comment_id', commentController.updateComment);
router.delete('/comment/:comment_id', commentController.deleteComment);




module.exports = router;