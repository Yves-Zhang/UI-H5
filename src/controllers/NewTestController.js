import {
	RestMapping,
	RestController
} from 'dashaping';

@RestController
class NewTestController {

	@RestMapping('/user')
	getUser(data, res) {
		console.log(data)
		res.send(data);
	}
}

export default NewTestController;