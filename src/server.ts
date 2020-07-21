import express, { response, request } from 'express'; 
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333); 

// npm install express
// npm install @types/express -D
// npm install ts-node -D
// npm install typescrip -D
// npx tsc --init gera o arquivo de configuração do Typescript
// npm install ts-node-dev -D