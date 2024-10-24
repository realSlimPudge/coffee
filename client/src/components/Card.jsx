import React, { useState } from 'react'
import CustomModal from './Modal'

export default function Card({ item, vol, adds }) {
	const [count, setCount] = useState(0)
	const [isVisible, setIsVisible] = useState(true)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleAddClick = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const productVolumes = vol.filter(volume => volume.id_good === item.id)

	return (
		<div className='card'>
			<div className='card--title'>
				<p>{item.name}</p>
			</div>
			<div className='card--img'>
				<img src={'http://' + item.photo} alt={item.name} draggable='false' />
			</div>
			<div className='card--position'>
				{productVolumes.map(volume => (
					<div key={volume.id} className='card--priceVol'>
						<div className='card--price'>
							<span>{volume.price} руб.</span>
						</div>
						{volume.volume ? (
							<div className='card--volume'>
								<span>{volume.volume} мл</span>
							</div>
						) : (
							<></>
						)}
					</div>
				))}
				<div className='card--counter'>
					<button onClick={handleAddClick} className='counter--addBtn'>
						Добавить
					</button>
				</div>
			</div>
			<CustomModal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				item={item}
				vol={vol}
				adds={adds}
			/>
		</div>
	)
}
