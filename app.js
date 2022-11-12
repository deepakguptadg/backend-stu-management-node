import express from 'express'
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
const app = express();
const port = 4000
const DATABASE_URL ="mongodb://localhost:27017"

connectDB(DATABASE_URL);
app.use(express.json())
app.use('/', web);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});