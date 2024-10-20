import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const CustomModal = ({ isOpen, onRequestClose, item, vol, adds }) => {
	const [modalClasses, setModalClasses] = useState('')
	const [overlayClasses, setOverlayClasses] = useState('')
	const [modalShow, setModalShow] = useState(true)

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

	if (!item || !vol) {
		return null
	}

	const productVolume = vol.filter(volume => volume.id_good === item.id)

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='Product Details'
			className={overlayClasses}
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
					{productVolume.map(volume => (
						<div key={volume.id} className='modal--priceVol'>
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
					))}
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
										<button>+ {add.price} руб</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default CustomModal
