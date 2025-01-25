import express, { Request, Response } from "express";
import cors from 'cors';
const app = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(cors());


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


export default app