import express, {Request, Response} from "express";
const app = express();

app.get('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send("hello world");
});

app.listen(5000);