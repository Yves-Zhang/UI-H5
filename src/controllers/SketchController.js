import { RestMapping, RestController } from "dashaping";

import { saveFile, saveFiles } from "@services/sketchService"

const path = process.cwd()

@RestController
@RestMapping("/sketch")
class SketchController {

  @RestMapping("/tojson")
  async tojson(data, res, { req }) {
		if( req.files.length === 1){
			const ret = await saveFile(req.files[0])
			res.send(ret)
			return
		}

		const ret = await saveFiles(req.files)
		res.send(ret)
  }
}

export default SketchController;
