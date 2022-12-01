import {Router} from 'express';

const router = Router();

/**
 * Product
 */

router.get('/product', (req, res) => {
    res.json({message: res.shhh_secret})
})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
router.delete('/product/:id', () => {})
router.post('/product', () => {})


/**
 * Update
 */

router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.delete('/update/:id', () => {})
router.post('/update', () => {})

/**
 * Update Points
 */

router.get('/updatepoints', () => {})
router.get('/updatepoints/:id', () => {})
router.put('/updatepoints/:id', () => {})
router.delete('/updatepoints/:id', () => {})
router.post('/updatepoints', () => {})

export default router