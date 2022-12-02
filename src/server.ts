import express from 'express';
import router from './router';
import morgan from 'morgan';
import {protect} from './modules/auth'
import { createNewUser, signIn } from './handlers/user';
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    req.shhh_secret = 'doggy'
    next();
});

app.get('/', (req, res) => {
    console.log('hello express')
    res.status(200);
    res.json({message: 'hello'})
});

app.use('/api', protect, router);
app.post('/user', createNewUser);
app.post('/signIn', signIn);

app.use((err, req, res, next) => {
    if( err.type === 'auth') {
        res.status(401).json({message: 'unauthed'})
    } else if (err.type === 'input') {
        res.status(400).json({message: 'invalid input'})
    } else {
        res.status(500).json({message: 'ooops'})
    }
})

export default app;