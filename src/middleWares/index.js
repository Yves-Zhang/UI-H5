import 'colors'
import moment from 'moment'

const LogMiddleWare = (req, res, next) => {
		console.log('\n')
		console.log(moment().format().blue)
    console.log("router: ", `${req.url}`.green)
    console.log("method: ", `${req.method}`.green)
    console.log(`query:`, `${JSON.stringify(req.query)}`.green)
    console.log(`body:`, `${JSON.stringify(req.body)}`.green)
    console.log('\n')
    next()
}

export default LogMiddleWare