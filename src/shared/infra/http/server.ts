import { app } from './app';
const PORT = Number(process.env.PORT);
const HOST = String(process.env.HOST);
app.listen(PORT, HOST, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
