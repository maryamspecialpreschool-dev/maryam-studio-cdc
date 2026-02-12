const fs = require('fs');
const path = require('path');

const cssPath = path.join('public', 'css', 'style.css');
let content = fs.readFileSync(cssPath, 'utf8');

// Replace ../img/ with ../images/
content = content.replace(/\.\.\/img\//g, '../images/');

fs.writeFileSync(cssPath, content);
console.log('Fixed style.css');
