const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
  'aegon': {
    'name': 'Aegon the Conqueror',
    'house': 'House Targaryen',
    'sonOf': 'Aerion Targaryen',
    'image': 'https://awoiaf.westeros.org/images/7/73/AEGON_I.jpg'
  },
  'tywin': {
    'name': 'Tywin Lannister',
    'house': 'House Lannister',
    'sonOf': 'Tytos Lannister',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_nsTvrCRkzbA9PCTdrD_PXxQNzfZ5cyYN_w&usqp=CAU'
  },
  'jamime': {
    'name': 'Jamime Lannister',
    'house': 'House Lannister',
    'sonOf': 'Tywin Lannister',
    'image': 'https://imgix.bustle.com/uploads/image/2020/4/10/54bfef8a-28a8-40c3-b175-133500e67f90-screen-shot-2020-04-10-at-52939-pm.png?w=2000&h=1090&fit=crop&crop=faces&auto=format%2Ccompress'
  },
  'tyrion': {
    'name': 'Tyrion Lannister',
    'house': 'House Lannister',
    'sonOf': 'Tywin Lannister',
    'image': 'https://i.ytimg.com/vi/z7n3SKwRaPA/maxresdefault.jpg'
  },
  'eddard': {
    'name': 'Eddard Stark',
    'house': 'House Stark',
    'sonOf': 'Rickard Stark',
    'image': 'https://awoiaf.westeros.org/images/thumb/1/1c/Sean_Bean_as_Eddard_Stark.png/300px-Sean_Bean_as_Eddard_Stark.png'
  },
  'Brandon': {
    'name': 'Brandon Stark',
    'house': 'House Stark',
    'sonOf': 'Eddard Stark',
    'image': 'https://www.denofgeek.com/wp-content/uploads/2022/06/Game-of-Thrones-Bran-Stark.jpg?fit=1920%2C1080'
  },
  'robb': {
    'name': 'Robb Stark',
    'house': 'House Stark',
    'sonOf': 'Eddard Stark',
    'image': 'https://static.wikia.nocookie.net/stories-by-jayson/images/5/50/Robb-stark.jpg/revision/latest?cb=20200302133858'
  },
  'jon snow': {
    'name': 'Jon Snow',
    'house': 'House Stark',
    'sonOf': 'Eddard Stark',
    'image': 'https://static.wikia.nocookie.net/ultimatepopculture/images/f/f0/Jon_Snow-Kit_Harington.jpg/revision/latest/scale-to-width-down/250?cb=20160830074945'
  },
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName', (req, res) => {
  const charactersName = req.params.characterName.toLowerCase()

  if(characters[charactersName]) {
    res.json(characters[charactersName])
  } else {
     res.json(characters['aegon'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is runing`)
})