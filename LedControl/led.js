const { Control } = require('magic-home') 
async function daytime () {
  try {
    const hour = (new Date()).getHours()
    const ledip = "192.168.1.4"
    let control = new Control(ledip, {ack: Control.ackMask(1) })
    if (hour > 22 || hour < 6) {
      await control.setColorWithBrightness(255, 150, 50, 0.75)
      console.log('Status: off')
      process.exit(0)
    } else {
      switch(hour) {
        case 6:
          await control.setColorWithBrightness(255, 150, 50, 20)
          logLeds()
          break
        case 7:
          await control.setColorWithBrightness(255, 150, 50, 20)
          logLeds()
          break
        case 8:
          await control.setColorWithBrightness(255, 150, 50, 50)
          logLeds()
          break
        case 18:
          await control.setColorWithBrightness(255, 150, 50, 75)
          logLeds()
          break
        case 19:                                                 
          await control.setColorWithBrightness(255, 150, 50, 50)
          logLeds()
          break
        case 20:                                                 
          await control.setColorWithBrightness(255, 150, 50, 15)
          logLeds()
          break
        case 21:                                                 
          await control.setColorWithBrightness(255, 150, 50, 1)
          logLeds()
          break
        case 22:                                                 
          await control.setColorWithBrightness(255, 150, 50, 0.75)
          logLeds()
          break
        default:                                                 
          return await control.setColorWithBrightness(255, 255, 255, 100)
      }
    }
  } catch(e) {
    console.log('Error: ', e)
  }
}
async function logLeds() {
  const hour = (new Date()).getHours()
  const day = (new Date()).getDay()
  const month = (new Date()).getMonth()
  const year = (new Date()).getFullYear()
  console.log('Status: Good, ' + ' case: ' + hour)
  console.log( 'last run: ' + month + '.' + day + '.' + year + ' ' + hour + ':00')
}
daytime()
