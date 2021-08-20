import {
    Application,
    Run,
    CombinControllers,
    MiddleWares
} from 'dashaping'

import Controllers from '@controllers'
import LogMiddleWare from '@middleWares'
import muterMiddleWare from '@middleWares/muterMiddleWare'

@Run
@MiddleWares([LogMiddleWare, muterMiddleWare])
@CombinControllers(Controllers)
class App extends Application{
    
    
}