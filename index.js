import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './router/index.js'


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use('/v1/api/', routes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
