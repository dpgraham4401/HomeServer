console.log('Server-side code running');

const express = require('express');
const child_process = require('child_process')

const app = express();

// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/volDown', (req, res) => {
  // const click = {VolumeDown: new Date()};
  // console.log(click);
  child_process.exec('pactl set-sink-volume @DEFAULT_SINK@ -5%')
  return res.json({data: "algood"})
})

app.post('/volUp', (req, res) => {
  // const click = {VolumeUp: new Date()};
  // console.log(click);
  child_process.exec('pactl set-sink-volume @DEFAULT_SINK@ +5%')
  return res.json({data: "algood"})
})

app.post('/volMute', (req, res) => {
  // const click = {VolumeMute: new Date()};
  // console.log(click);
  child_process.exec('pactl set-sink-mute @DEFAULT_SINK@ toggle')
  return res.json({data: "algood"})
})

app.post('/playPause', (req, res) => {
  child_process.exec('playerctl play-pause')
  return res.json({data: "algood"})
})

app.post('/next', (req, res) => {
  child_process.exec('playerctl next')
  return res.json({data: "algood"})
})

app.post('/previous', (req, res) => {
  child_process.exec('playerctl previous')
  return res.json({data: "algood"})
})
