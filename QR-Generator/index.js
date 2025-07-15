import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {'message': 'Type in the URL you want to encode as a QR code:', 
        'name': 'URL', 'type': 'input'
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('QR_Code/qr_image.png'));
    fs.writeFile('QR_Code/qr_text.txt', url , (err) => {
      if (err){
        console.error("Error writing to file:", err);
        return;
      }
      else {
        console.log("QR code generated successfully!");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });