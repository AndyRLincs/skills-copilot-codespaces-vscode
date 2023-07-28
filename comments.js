// Create web server
// 1. Create web server
// 2. Create router
// 3. Create route
// 4. Create controller
// 5. Create view
// 6. Create model
// 7. Create database
// 8. Create table
// 9. Create data

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create router
const router = express.Router();

// 3. Create route
router.get('/list', (req, res) => {
    // 4. Create controller
    const comments = require('../controllers/commentsController');
    comments.list(req, res);
});

router.get('/create', (req, res) => {
    // 4. Create controller
    const comments = require('../controllers/commentsController');
    comments.create(req, res);
});

router.post('/save', (req, res) => {
    // 4. Create controller
    const comments = require('../controllers/commentsController');
    comments.save(req, res);
});

router.get('/edit/:id', (req, res) => {
    // 4. Create controller
    const comments = require('../controllers/commentsController');
    comments.edit(req, res);
});

router.post('/update', (req, res) => {
    // 4. Create controller
    const comments = require('../controllers/commentsController');
    comments.update(req, res);
});

router.get('/remove/:id', (req, res) => {
    // 4. Create controller
    const comments = require('../controllers/commentsController');
    comments.remove(req, res);
});

// 5. Create view
// 6. Create model
// 7. Create database
// 8. Create table
// 9. Create data

// 10. Use router
app.use('/comments', router);

// 11. Create web server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});