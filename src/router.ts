import { Router } from 'express';
import { body, validationResult, oneOf } from 'express-validator'
import { handleInputErrors } from './modules/mw';

const router = Router();

/**
 * Product
 */

router.get('/product', (req, res) => {
    res.json({message: res.shhh_secret})
});
router.get('/product/:id', () => {});
router.put('/product/:id', body('name').isString(), handleInputErrors);
router.delete('/product/:id', handleInputErrors);
router.post('/product', (req, res) => {

})


/**
 * Update
 */

router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', 
    //to do
    body('title').optional(), 
    body('body').optional(), 
    body('status').optional(), 
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    body('version').optional(), 
    () => {}
);
router.delete('/update/:id', () => {});
router.post('/update',
    //to do
    body('title').exists().isString(), 
    body('body').exists().isString(), 
    () => {}
);

/**
 * Update Points
 */

router.get('/updatepoints', () => {});
router.get('/updatepoints/:id', () => {});
router.put('/updatepoints/:id',
    body('name').optional().isString(), 
    body('description').optional().isString(), 
    () => {}
);
router.delete('/updatepoints/:id', () => {});
router.post('/updatepoints',
    body('name').isString(), 
    body('description').isString(), 
    body('updateId').exists().isString(), 
    () => {}
);

export default router;