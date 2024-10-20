import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const CustomModal = ({ isOpen, onRequestClose, item, vol, adds }) => {
	if (!item || !vol) {
		return null
	}

	const productVolume = vol.filter(volume => volume.id_good === item.id)

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='Product Details'
			className='modal'
			overlayClassName='overlay'
		>
			<div className='modal-content'>
				<button onClick={onRequestClose} className='modal-close-btn'></button>

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
