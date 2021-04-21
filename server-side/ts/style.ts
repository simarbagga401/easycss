import fs from 'fs';

const writeCssFile = () => {
  const data = '.btn{background-color:pink}';
  fs.appendFile('../client-side/style.css', data, (err) => {
    if (err) console.log(err);
  });
};

export default { writeCssFile };
