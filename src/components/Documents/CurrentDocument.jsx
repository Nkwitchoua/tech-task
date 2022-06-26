import React, { useContext, useState } from 'react';
import "../../styles/currentDoc.scss";
import { Icon } from "@iconify/react";
import { documentsContext } from '../../context/DocumentsContext';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../getWindowDimension';

const CurrentDocument = ({setModal}) => {

    const { document, documentLoading, deleteDocument, setNullDoc, getAllDocuments } = useContext(documentsContext);

    const { width } = useWindowDimensions();

    const [moreBtns, setMoreBtns] = useState(false);

    const navigate = useNavigate();

    if(documentLoading) {
        return (
            <div className="loading-container">
                <Icon 
                    icon="eos-icons:bubble-loading"
                    className='loading-icon'/>
            </div>
        )
    }

    return (
        <div className="document__container">
            <div className="document__btns-container">
                <div className={moreBtns ? "document__main-btns-hide" : "document__main-btns slide-in-left"}>
                    <button className="btn-primary">
                        <Icon icon="akar-icons:check"
                        style={{fontSize: "16px", color: "green"}}/>
                        Ознакомиться
                    </button>
                    <button className="btn-primary">
                        <Icon icon="bi:person-fill"
                        style={{fontSize: "16px"}}/>
                        Отправить получателю
                    </button>
                </div>
                <div className={moreBtns ? "document__more-show slide-in-right" : "document__more-hide"}>
                    <button className="btn-primary">
                        <Icon icon="ic:baseline-call-missed-outgoing"
                        style={{fontSize: "16px"}}/>
                        Исходящий
                    </button>
                    <button className="btn-primary">
                        <Icon icon="fa-regular:comment-dots"
                        style={{fontSize: "16px"}}/>
                        Комментарий
                    </button>
                    <button 
                        className="btn-primary"
                        onClick={() => navigate(`/edit-document/${document.id}`)}>
                        <Icon icon="bxs:edit"
                        style={{fontSize: "16px"}}/>
                        Редактировать
                    </button>
                    <button 
                        className="btn-primary"
                        onClick={() => {
                            deleteDocument(document.id);
                            setNullDoc();
                            getAllDocuments();
                        }}>
                        <Icon icon="fluent:delete-20-filled"
                        style={{fontSize: "16px", color: "red"}}/>
                        Удалить
                    </button>
                </div>
                <div 
                    className="icon-btn rotate-center"
                    onClick={() => setMoreBtns(!moreBtns)}>
                    {
                    moreBtns ?
                    <Icon 
                    icon="akar-icons:cross"
                    style={{fontSize: "18px"}}
                    className="rotate-center"/> :
                    <Icon icon="akar-icons:more-vertical" style={{fontSize: "18px"}}/>
                    }
                </div>
            </div>
            <div className="document__title">
                <div style={{textAlign: "center"}}>
                    <h3>Входящий документ №{document.registration_number}</h3>
                    <p>{document.theme}</p>
                </div>
                <div className="document__show-check">
                    <div className="all-docs__filter-radio">
                        <input 
                            type="checkbox" 
                            id="contactChoice1"
                            name="contact" 
                            value="srochno"/>
                        <label htmlFor="contactChoice1">Срочное письмо</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="contactChoice1"
                            name="contact" 
                            value="on_control"/>
                        <label htmlFor="contactChoice1">Снято с контроля</label>
                    </div>
                </div>
            </div>
            <div className="document__date">
                <strong>Срок исполнения:</strong>
                {document.date_of_registration}
            </div>
            <div className="document__body-container">
                <div className="document__body-box">
                    <div className="document__body-item">
                        <strong>Исходящий №:</strong>
                        <p>{document.outgoing_number}</p>
                    </div>
                    <div className="document__body-item">
                        <strong>Дата исходящего:</strong>
                        <p>{document.date_of_outgoing}</p>
                    </div>
                    <div className="document__body-item">
                        <strong>Корреспондент:</strong>
                        <p>{document.correspondent}</p>
                    </div>
                    <div className="document__body-item">
                        <strong>Регистратор:</strong>
                        <p>{document.registrar}</p>
                    </div>
                </div>
                <div className="document__body-box">
                    <div className="document__body-item">
                        <strong>Вид доставки:</strong>
                        <p>{document.type_of_delivery}</p>
                    </div>
                    <div className="document__body-item">
                        <strong>Регистрационный номер:</strong>
                        <p>{document.registration_number}</p>
                    </div>
                    <div className="document__body-item">
                        <strong>Дата регистрации:</strong>
                        <p>{document.date_of_registration}</p>
                    </div>
                    <div className="document__body-item">
                        <strong>Подразделение:</strong>
                        <p>{document.subdivision}</p>
                    </div>
                </div>
            </div>
            { width <= 768 ?
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button 
                        onClick={() => setModal(false)}
                        className="btn-primary">
                        Закрыть
                    </button> 
                </div>:
                <></>
            }
        </div>
    )
}

export default CurrentDocument