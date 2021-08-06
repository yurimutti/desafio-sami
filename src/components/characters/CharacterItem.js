import React, {useState} from 'react'
import Modal from '../ui/Modal'

const CharacterItem = ( {item} ) => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            {openModal && <Modal closeModal={setOpenModal} item={item} />}
            <div className="card" onClick={() => setOpenModal(true)}>
                <div className="card-inner">
                    <img className="hero-image" src={item.image.url} alt={'Herói'}></img>
                    <span className="hero-name">{item.name}</span>
                </div>
            </div>
        </>
    )
}

export default CharacterItem
