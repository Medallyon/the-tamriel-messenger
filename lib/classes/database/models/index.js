const join = require("path").join
	, fs = require("fs");

let models = {}
	, files = fs.readdirSync(__dirname);

for (const file of files.filter(f => f.endsWith(".model.js")))
{
	if (file === "index.js")
		continue;

	const filePath = join(__dirname, file);
	models[file.replace(".model.js", "")] = require(filePath);
}

module.exports = models;
