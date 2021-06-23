const fs = require('fs');

fs.readFile('/Users/backendclass1/Documents/ICT-YEP/Week4/ogoro.txt','utf-8', (err, data)=>{
  if (err) {
    console.error(err)
    return;
  }

  fs.writeFileSync ('Obi.txt',data)
  console.log(data);
  //file written successfully
})