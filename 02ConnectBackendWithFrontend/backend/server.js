import express from 'express'
const app = express();

app.get('/',(req, res) => {
  res.send('Server is ready!');
})

app.get('/api/jocks',(req, res) => {
  const jocks = [
    {
      id: 1,
      title: "jocks1",
      content: "Content of jocks 1"
    },
    {
      id: 2,
      title: "jocks2",
      content: "Content of jocks 2"
    },
    {
      id: 3,
      title: "jocks3",
      content: "Content of jocks 3"
    },
    {
      id: 4,
      title: "jocks4",
      content: "Content of jocks 4"
    },
    {
      id: 5,
      title: "jocks5",
      content: "Content of jocks 5"
    }
  ]

  res.send(jocks)
})

const port  = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
})