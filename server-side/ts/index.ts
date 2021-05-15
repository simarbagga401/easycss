import cors from 'cors';
import express from 'express';
import { StyleRequest } from './interfaces/index.interfaces';
import { changeStyle } from './writeStyle';

// App configurations
const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`app listening at ${port}`));

// Testing route
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Read Documentation for something at https://something.dev');
});

app.post('/styleRequest', (req: express.Request, res: express.Response) => {
  const { element, property, value }: StyleRequest = req.body.styleRequestData;
  console.log(req.body);
  res.send('thank you');
  changeStyle({ element, property, value });
});
