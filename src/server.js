import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const app = polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)

console.log('SERVER_PORT:', PORT)

app.listen(PORT, err => {
	if (err) console.log('POLKA_SERVER_ERROR:', err)
})

export default app.handler