const fs = require('fs')

const content = 'Ogoro is a crazy guy, with five big big children. Na wa ooo'

fs.writeFile('/Users/backendclass1/Documents/ICT-YEP/Week4/ogoro.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})