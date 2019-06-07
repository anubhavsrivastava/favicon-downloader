const fs = require('fs');
const path = require('path');
const axios = require('axios');
const makeDir = require('make-dir');
export default async function downloadImage(url, downloadFilePath, downloadFileName) {
	let fileName = downloadFileName || path.basename(url);
	let filePath = downloadFilePath || process.cwd();

	if (path.isAbsolute(filePath)) {
		filePath = path.resolve(process.cwd(), filePath);
	}

	const downloadPath = path.resolve(filePath, fileName);

	makeDir.sync(filePath);

	if (fs.existsSync(downloadPath)) {
		throw new Error('File already exist on specified path :', fileName);
	}

	const writer = fs.createWriteStream(downloadPath);

	const response = await axios({
		url,
		method: 'GET',
		responseType: 'stream'
	});
	response.data.pipe(writer);

	return new Promise((resolve, reject) => {
		writer.on('finish', () => resolve({ downloadPath }));
		writer.on('error', reject);
	});
}

// downloadImage('https://unsplash.com/photos/AaEQmoufHLk/download?force=true');
