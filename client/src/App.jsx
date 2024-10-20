import './App.css'
import React, { useState, useEffect } from 'react'
import Card from './components/Card'

function App() {
	const [goods, setGoods] = useState([])
	const [vol, setVol] = useState([])
	const [add, setAdd] = useState([])

	async function getItems() {
		const url = 'http://localhost:3000/api/goods'
		try {
			const response = await fetch(url)
			const result = await response.json()
			console.log(result)
			setGoods(result.Goods)
			setVol(result.Volumes)
			setAdd(result.Additives)
		} catch (error) {
			console.error(error)
		}
	}
	useEffect(() => {
		getItems()
	}, [])
	useEffect(() => {
		console.log(goods)
		console.log(vol)
		console.log(add)
	}, [goods, vol, add])

	const groupedGoods = goods.reduce((acc, good) => {
		if (!acc[good.category]) {
			acc[good.category] = []
		}
		acc[good.category].push(good)
		return acc
	}, {})

	return (
		<div className='container'>
			<header>
				<div>
					<img src='/images/header.png' alt='header--img' />
				</div>
			</header>
			<main>
				<div>
					{Object.keys(groupedGoods).map(category => (
						<div key={category} className='category'>
							<h2 className='category--title'>
								{category === '1'
									? 'Кофе'
									: category === '2'
									? 'Холодные напитки'
									: category === '3'
									? 'Чай'
									: 'Сендвичи'}
							</h2>
							<div className='product-list'>
								{groupedGoods[category].map(good => (
									<Card key={good.id} item={good} vol={vol} adds={add} />
								))}
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	)
}

export default App
