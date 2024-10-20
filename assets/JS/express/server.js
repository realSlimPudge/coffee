import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import db from './db.js'
import { getQuery, getGoods, getadd_to_coffee, getvolume_price } from './db.js'
import cors from 'cors'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Путь к корню проекта
const projectRoot = path.resolve(__dirname, '../..')

app.use(express.static(path.join(projectRoot, 'public/css')))
app.use(express.static(path.join(projectRoot, 'public/img')))
app.use(express.static(path.join(projectRoot, 'JS')))
app.use(express.static(path.join(projectRoot, 'constants')))

app.set('view engine', 'html')

// app.get('/api', async (req,res) => {
//     let rawdata = fs.readFileSync('../../constants/bd.json');
//     let data = JSON.parse(rawdata);
//     res.send(data)
// })

app.use(
	cors({
		origin: 'http://localhost:3001',
	})
)

app.get('/', async (req, res) => {
	res.sendFile(path.join(projectRoot, 'views/main/index.html'))
})

app.get('/api/goods', async (req, res) => {
	const goods = await getGoods()
	const additives = await getadd_to_coffee()
	const volumes = await getvolume_price()
	res.json({ Goods: goods, Additives: additives, Volumes: volumes })
})

// app.get('/api/volume',async (req, res) => {
// const data = await getvolume_price();
// res.json({data});
//     });

// app.get('/api/addictives',async (req, res) => {
// const data = await getadd_to_coffee();
// res.json({data});
//     });

const PORT = 3000
const HOST = 'localhost'

app.listen(PORT, HOST, () => {
	console.log('Сервер запущен!')
})
//test
