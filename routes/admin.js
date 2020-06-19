const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/post-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>')
});
  
router.post('/post-product', (req, res, next) => {
    res.redirect('/');
})

module.exports = router;