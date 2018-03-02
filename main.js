import fs from "fs";
import path from "path";

import config from "./config.json";

const importPages = () => {
	const files = getAllFiles(config.pagesDirectory);
	const bufferFromFiles = readFiles(config.pagesDirectory,files);
};

const getAllFiles = (dir) => {
	return fs.readdirSync(path.resolve(path.join(__dirname, dir)));
};

const readFiles = (dir, filesArr) => {
	const data = [];
	filesArr.forEach(file => {
		const fileBuffer = fs.readFileSync(path.join(__dirname, dir, file));
		data.push({
			file,
			buffer:fileBuffer
		})

	});
	return data;
};


function main(){
	importPages();
}



main();
