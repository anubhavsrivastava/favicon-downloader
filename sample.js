const { downloadIcons } = require('./dist/index');

console.log(downloadIcons('https://devtips.theanubhav.com/', { name: 'a.png', path: 'dist/devtips' }));
console.log(downloadIcons('https://about.theanubhav.com/'));
console.log(downloadIcons('https://theanubhav.com/', { path: 'dist/about' }));
