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

app.post('/volDown', () => {
  const click = {VolumeDown: new Date()};
  console.log(click);
  child_process.exec('pactl set-sink-volume @DEFAULT_SINK@ -5%')
})

app.post('/volUp', () => {
  const click = {VolumeUp: new Date()};
  console.log(click);
  child_process.exec('pactl set-sink-volume @DEFAULT_SINK@ +5%')
})

app.post('/volMute', () => {
  const click = {VolumeMute: new Date()};
  console.log(click);
  child_process.exec('pactl set-sink-mute @DEFAULT_SINK@ toggle')
})

app.post('/playPause', () => {
  child_process.exec('playerctl play-pause')
})

app.post('/next', () => {
  child_process.exec('playerctl next')
})

app.post('/previous', () => {
  child_process.exec('playerctl previous')
})
