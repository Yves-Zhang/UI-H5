import {
    Application,
    Run,
    CombinControllers,
    MiddleWares
} from 'dashaping'

import Controllers from '@controllers'
import LogMiddleWare from '@middleWares'

@Run
@MiddleWares([LogMiddleWare])
@CombinControllers(Controllers)
class App extends Application{
    
    
}