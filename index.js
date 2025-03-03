import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './router/index.js'
import connectDB from './db/index.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use('/v1/api/', routes)


// Connect to MongoDB
connectDB()
  .then(() => {
    console.log("Database connection established");

    // Start the server after successful DB connection
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error.message);
    process.exit(1);
  });
