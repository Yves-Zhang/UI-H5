import { RestMapping, RestController } from "dashaping";

@RestController
@RestMapping("/test")
class TestController {

  @RestMapping("/user")
  getUser(data, res) {
    console.log(data);
    res.send(data);
  }
}

export default TestController;
