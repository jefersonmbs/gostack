import express from 'express';
import createUser from './services/createUser'


const app = express();
app.use(express.json())

app.get('/', (require, response) => {
  const user = createUser({
    email:"teste#teste.gg",
    password:"123456"
  })

  console.log(user)

  return response.json({message: "Ola Mundo"})
});
app.listen(33333 ,() =>{
  console.log("ONNNNNNNNNNN")
})