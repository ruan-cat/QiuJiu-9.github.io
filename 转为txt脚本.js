function mainRun() {
	let fs = require("fs");
	let text = checkFile(fs,"./","");
	fs.writeFileSync("./file.txt",text,"utf8");
}
function checkFile(fs,url,text) {
	let files = fs.readdirSync(url);
	let name;
	let fileList = [];
	let foldList = [];
	files.forEach((file)=>{
        if (fs.statSync(url+"/"+file).isFile()) {
            fileList.push(file);
        } else {
            foldList.push(file);
        }
	});
	fileList.forEach((file)=>{
        if (file.substr(file.indexOf('.'))===".md") {
		text += 
`
===========================================================================================================
${file}
===========================================================================================================
`;
        	text += fs.readFileSync(url+"/"+file,"utf8");
        	text += "\n\n\n";
        }
	});
	foldList.forEach((file)=>{
		text += 
`
===========================================================================================================
${file}
===========================================================================================================
`;
        text = checkFile(fs,url+"/"+file,text);
        text += "\n\n\n";
	});
	return text;
}
mainRun();