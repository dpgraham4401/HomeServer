console.log('Client-side code running');

const downButton = document.getElementById('volDownButton');
const upButton = document.getElementById('volUpButton');
const prevButton = document.getElementById('previousButton');
const playButton = document.getElementById('playPauseButton');
const nextButton = document.getElementById('nextButton');

downButton.addEventListener('click', function(e) {
  console.log('button was clicked');
  fetch('/volDown', {method: 'POST'})
    .then(function(res) {
      // console.log(res)
      if(res.ok) {
        console.log('click was Good');
        //console.log(res.text())
        return;
      }
      throw new Error('Request failed.')
    })
  .catch(function(error) {
    console.log(error)
  })
});

upButton.addEventListener('click', function(e) {
  console.log('button was clicked');
  fetch('/volUp', {method: 'POST'})
    .then(function(res) {
      if(res.ok) {
        console.log('click was Good');
        return;
      }
      throw new Error('Request failed.')
    })
  .catch(function(error) {
    console.log(error)
  })
});

prevButton.addEventListener('click', function(e) {
  console.log('previous button was clicked');
  fetch('/previous', {method: 'POST'})
    .then(function(res) {
      if(res.ok) {
        console.log('click was Good');
        return;
      }
      throw new Error('Request failed.')
    })
  .catch(function(error) {
    console.log(error)
  })
});

playButton.addEventListener('click', function(e) {
  console.log('play button was clicked');
  fetch('/playPause', {method: 'POST'})
    .then(function(res) {
      if(res.ok) {
        console.log('click was Good');
        return;
      }
      throw new Error('Request failed.')
    })
  .catch(function(error) {
    console.log(error)
  })
});

nextButton.addEventListener('click', function(e) {
  console.log('next button was clicked');
  fetch('/next', {method: 'POST'})
    .then(function(res) {
      if(res.ok) {
        console.log('click was Good');
        return;
      }
      throw new Error('Request failed.')
    })
  .catch(function(error) {
    console.log(error)
  })
});
