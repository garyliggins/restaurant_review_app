import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import restaurantsDAO from './dao/restaurantsDAO.js'
import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config();
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 5000

// app.use(express.static(path.join(__dirname, "/frontend/build")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
// });


MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        // useNewUrlParse: true
        useUnifiedTopology: true
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await restaurantsDAO.injectDB(client)
    await ReviewsDAO.injectDB(client)
    app.listen(port || 5000, () => {
        console.log(`listening on port ${port}`)
    })
})