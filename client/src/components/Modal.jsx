import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const CustomModal = ({ isOpen, onRequestClose, item, vol, adds }) => {
	const [modalClasses, setModalClasses] = useState('')
	const [overlayClasses, setOverlayClasses] = useState('')

	const [invert, setInvert] = useState(true)
	const [invertAdd, setInvertAdd] = useState(false)
	const [chooseIndex, setChooseIndex] = useState(0)

	const [count, setCount] = useState(1)
	const [startCost, setStartCost] = useState(null)
	const [selectedAdds, setSelectedAdds] = useState([])

	//анимации для открытия и закрытия модального окна
	useEffect(() => {
		if (isOpen) {
			setModalClasses('modal-content-inner modal-enter')
			setOverlayClasses('overlay overlay-enter')
			setTimeout(() => {
				setModalClasses('modal-content-inner modal-enter-active')
				setOverlayClasses('overlay overlay-enter-active')
			}, 10)
		} else {
			setModalClasses('modal-content-inner modal-exit')
			setOverlayClasses('overlay overlay-exit')
			setTimeout(() => {
				setModalClasses('modal-content-inner modal-exit-active')
				setOverlayClasses('overlay overlay-exit-active')
			}, 10)
		}
	}, [isOpen])

	//слушает кол-во и меняет "-"
	useEffect(() => {
		count === 1 ? setInvert(true) : setInvert(false)
	}, [count])

	const handleClose = () => {
		setModalClasses('modal-content-inner modal-exit')
		setOverlayClasses('overlay overlay-exit')
		setTimeout(() => {
			setModalClasses('modal-content-inner modal-exit-active')
			setOverlayClasses('overlay overlay-exit-active')
			setTimeout(() => {
				onRequestClose()
			}, 300)
		}, 10)
	}

	const productVolume = vol.filter(volume => volume.id_good === item.id)

	useEffect(() => {
		if (productVolume.length > 0) {
			setStartCost(productVolume[0].price)
		}
	}, [])

	const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		if (count > 1) {
			setCount(count - 1)
		} else {
			setCount(1)
		}
	}
	const getBeforePos = i => {
		const buttonWidth = 100 / productVolume.length
		const leftPos = i * buttonWidth + buttonWidth / 2
		return `${leftPos}%`
	}
	const calculateCost = () => {
		const addsPrices = []
		selectedAdds.map(e => addsPrices.push(e.price))
		const sumAdds = addsPrices
			? addsPrices.reduce((cur, acc) => cur + acc, 0)
			: 0
		const cost = (startCost + sumAdds) * count
		return `${cost}₽`
	}
	if (!item || !vol) {
		return null
	}
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleClose}
			contentLabel='Product Details'
			className={modalClasses}
			overlayClassName={overlayClasses}
		>
			<div className={modalClasses}>
				<button onClick={handleClose} className='modal-close-btn'></button>

				<div className='modal--info'>
					<div className='modal--info--main'>
						<div className='modal--item--img'>
							<img
								src={'http://' + item.photo}
								alt={item.name}
								className='modal-image'
								draggable='false'
							/>
						</div>
						<div className='modal--info--text'>
							<h3>{item.name}</h3>
							<p>{item.general_info}</p>
						</div>
					</div>
					<div className='modal--choose'>
						{productVolume.map((volume, i) => (
							<button
								key={volume.id}
								className={`choose--btn ${i === chooseIndex ? 'choose' : ''}`}
								onClick={() => {
									setChooseIndex(i)
									setStartCost(volume.price)
								}}
							>
								<div className='modal--priceVol'>
									<div className='modal--price'>
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
							</button>
						))}
						<div
							className='modal--choose__before'
							style={{ left: getBeforePos(chooseIndex) }}
						></div>
					</div>
				</div>
				<div className='modal--add'>
					<div className='modal--add__title'>
						<h4>Добавки</h4>
					</div>
					<div className='modal--add__overflow'>
						{adds.map(add => (
							<div key={add.id} className='modal--add__card'>
								<div className='modal--add__container'>
									<div className='modal--add__addTitle'>{add.name}</div>
									<div className='modal--add__addBtn'>
										<button
											onClick={() => {
												if (
													selectedAdds.some(
														selectedAdd => selectedAdd.id === add.id
													)
												) {
													setSelectedAdds(
														selectedAdds.filter(
															selectedAdd => selectedAdd.id !== add.id
														)
													)
												} else {
													setSelectedAdds([...selectedAdds, add])
												}
											}}
											className={
												selectedAdds.some(
													selectedAdd => selectedAdd.id === add.id
												)
													? 'selected'
													: ''
											}
										>
											{selectedAdds.some(
												selectedAdd => selectedAdd.id === add.id
											) ? (
												<div className='plus'>-</div>
											) : (
												<div className='plus'>+</div>
											)}
											<div className='cost'>{add.price} руб</div>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='modal--payer'>
					<div className='modal--counter'>
						<div className='counter--btns'>
							<button
								onClick={decrement}
								className={`counter--decrement ${invert ? 'invert' : ''}`}
							></button>
						</div>
						<div className='counter--count'>
							<span>{count}</span>
						</div>
						<div className='counter--btns'>
							<button
								onClick={increment}
								className='counter--increment'
							></button>
						</div>
					</div>
					<div className='modal--buy__btn'>
						<button>В корзину {calculateCost()}</button>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default CustomModal
