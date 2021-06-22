//make folder
const fs = require ('fs')
const folderName = './Amelia'
try{
    if (!fs.existsSync(folderName)){
        fs.mkdirSync(folderName);
    }
} catch (err){
    console.error (err);
}
//write to the folder

const content = 'Days of the week'

fs.writeFile('/Users/backendclass1/Documents/ICT-YEP/Week4/Amelia/ogoro.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})