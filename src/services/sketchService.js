import fs from 'fs'
const path = process.cwd()

async function saveFile(filePath){
	return new Promise((resolve, reject)=>{
		fs.readFile(filePath.path, (err, data)=>{
			if (err) {
				console.log('Error');
				reject(err)
				return
			}
			const originalname = filePath.originalname
			const dir_file = path + '/resourceFiles/' + originalname
			
			fs.writeFile(dir_file, data, (err)=>{
				if(err){
					console.log(err)
					reject(err)
					return
				}
				const obj = {
					msg: 'upload success',
					filename: filePath.originalname
				}
				resolve(obj)
				return
			})
		})
	})
}

async function saveFiles(files){
	let ret = []
	for(let i=0; i<files.length; i++){
		try{
			let res = await saveFile(files[i].path)
			ret.push(res)
		} catch (err){
			throw err
		}
	}
	return ret
}

module.exports = {
	saveFile,
	saveFiles
}