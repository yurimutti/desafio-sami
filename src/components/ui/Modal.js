import React from 'react';
import { MdClose } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Modal = ({ closeModal, item }) => {
    return (
        <div className="modal">
            <div className="modal-container">
                <button
                    className="close"
                    style={{ color: '#e2454c' }}
                    onClick={() => closeModal(false)}
                >
                    <MdClose />
                </button>

                <div className="modal-header">
                    <img
                        className="hero-image"
                        src={item.image.url}
                        alt={'Herói'}
                    ></img>
                </div>

                <div className="modal-body">
                    <h1 className="hero-name">{item.name}</h1>
                    <div className="modal-body-content">
                        <Swiper
                            navigation
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                    width: 640,
                                    slidesPerView: 1
                                },
                                // when window width is >= 768px
                                768: {
                                    width: 768,
                                    slidesPerView: 3
                                }
                            }}
                        >
                            <SwiperSlide>
                                <div className="hero-info appearance">
                                    <h2 className="hero-info-title">
                                        Aparência
                                    </h2>
                                    <ul className="hero-info-list">
                                        <li className="hero-info-item">
                                            <strong>Cor dos olhos: </strong>
                                            <span>
                                                {item.appearance['eye-color']}
                                            </span>
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Raça: </strong>
                                            {item.appearance.race}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Gênero: </strong>
                                            {item.appearance.gender}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Cor do cabelo: </strong>
                                            {item.appearance['hair-color']}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Altura: </strong>
                                            {item.appearance.height}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Peso: </strong>
                                            {item.appearance.weight}
                                        </li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hero-info biography">
                                    <h2 className="hero-info-title">
                                        Biografia
                                    </h2>
                                    <ul className="hero-info-list">
                                        <li className="hero-info-item">
                                            <strong>Apelido: </strong>
                                            {item.biography.aliases}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Alinhamento: </strong>
                                            {item.biography.alignment}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Alter egos: </strong>
                                            {item.biography['alter-egos']}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Primeira aparição: </strong>
                                            {item.biography['first-appearance']}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Nome completo: </strong>
                                            {item.biography['full-name']}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Naturalidade: </strong>
                                            {item.biography['place-of-birth']}
                                        </li>
                                        <li className="hero-info-item">
                                            {item.biography.publisher}
                                        </li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hero-info connections">
                                    <h2 className="hero-info-title">
                                        Conexões
                                    </h2>
                                    <ul className="hero-info-list">
                                        <li className="hero-info-item">
                                            <strong>Afiliações: </strong>
                                            {
                                                item.connections[
                                                    'group-affiliation'
                                                ]
                                            }
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Relativos: </strong>
                                            {item.connections.relatives}
                                        </li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hero-info powerstats">
                                    <h2 className="hero-info-title">
                                        Estatísticas de Potência
                                    </h2>
                                    <ul className="hero-info-list">
                                        <li className="hero-info-item">
                                            <strong>Combate: </strong>
                                            {item.powerstats.combat}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Durabilidade: </strong>
                                            {item.powerstats.durability}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Inteligência: </strong>
                                            {item.powerstats.intelligence}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Energia: </strong>
                                            {item.powerstats.power}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Velocidade: </strong>
                                            {item.powerstats.speed}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Força: </strong>
                                            {item.powerstats.strength}
                                        </li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hero-info work">
                                    <h2 className="hero-info-title">
                                        Trabalho
                                    </h2>
                                    <ul className="hero-info-list">
                                        <li className="hero-info-item">
                                            <strong>Base: </strong>
                                            {item.work.base}
                                        </li>
                                        <li className="hero-info-item">
                                            <strong>Ocupação: </strong>
                                            {item.work.ocupation}
                                        </li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
