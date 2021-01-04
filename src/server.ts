import express from 'express';

const app = express();

app.get('/', (request, response) => {
   return response.json({ heelo: 'ois' });
})

app.listen(3333);