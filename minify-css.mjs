import fs from 'fs';
import path from 'path';

const minifyCSS = (file) => {
    const content = fs.readFileSync(file, 'utf8');
    const minified = content
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ')           // Collapse whitespace
        .replace(/\s*([{};:,])\s*/g, '$1') // Remove spaces around delimiters
        .replace(/;}/g, '}')             // Remove trailing semicolons
        .trim();
    fs.writeFileSync(file, minified);
};

const cssDir = path.join(process.cwd(), 'public', 'css');
minifyCSS(path.join(cssDir, 'style.css'));
minifyCSS(path.join(cssDir, 'custom.css'));
console.log('CSS Minification Complete');
