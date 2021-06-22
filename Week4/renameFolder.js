const fs = require('fs')

fs.rename('./Averyyy', './Amelia', err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})