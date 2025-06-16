import express from "express"
import "dotenv/config";

const requestHandler = express();
const port = process.env.PORT || 3005;

requestHandler.use(express.json());


requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });