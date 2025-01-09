import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

app.get('/',(req,res)=>{
  res.send("server is running");
})

app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
      id:1,
      title: 'Tiger and Lion',
      content: 'hi my name is harsh and i am a frond end developer'
    },
    {
      id:2,
      title: 'praveen HR futer',
      content: 'hi my name is harsh and i am a frond end developer'
    },
    {
      id:3,
      title: 'Rahul Sector-18',
      content: 'hi my name is harsh and i am a frond end developer'
    },
    {
      id:4,
      title: 'Sanket raj and alind fight',
      content: 'hi my name is harsh and i am a frond end developer'
    }
  ]
  res.send(jokes)
})
const port = process.env.PORT;

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
})