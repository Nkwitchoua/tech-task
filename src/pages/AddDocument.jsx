import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { documentsContext } from '../context/DocumentsContext';
import "../styles/addDocument.scss";

const AddDocument = () => {

  const { addDocument } = useContext(documentsContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    theme: "",
    correspondent: "",
    date_of_outgoing: "",
    date_of_registration: "",
    on_control: false,
    outgoing_number: "",
    registrar: "",
    registration_number: "",
    subdivision: "",
    type_of_delivery: "",
    verified: false
  })

  const inputHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = () => {
    addDocument(form);
    navigate("/documents");
  }
  
  return (
    <div className="container">
      <div className="add-doc__container">
        <div className="add-doc__checkbox">
          <div className="add-doc__check_main">
            <div className="all-docs__filter-radio">
              <input 
                    type="checkbox" 
                    id="srochnoe_pismo"
                    name="contact" 
                    value="not-controlled"
              />
                <label htmlFor="srochnoe_pismo">
                  Срочное письмо
                </label>
            </div>
            <div className="all-docs__filter-radio">
              <input 
                    type="checkbox" 
                    id="no-control"
                    name="contact" 
                    value="not-controlled"
              />
                <label htmlFor="no-control">
                  Снято с контроля
                </label>
            </div>
          </div>
          <div className="all-docs__filter-radio">
            <input 
                  type="checkbox" 
                  id="not-controlled"
                  name="contact" 
                  value="not-controlled"
            />
              <label htmlFor="not-controlled">
                Неконтрольный документ
              </label>
          </div>
          <div className="all-docs__filter-radio">
            <input 
                  type="checkbox" 
                  id="paper"
                  name="contact" 
                  value="not-controlled"
            />
              <label htmlFor="paper">
                Передан в бумажном виде
              </label>
          </div>
          <div className="all-docs__filter-radio">
            <input 
                  type="checkbox" 
                  id="for-service"
                  name="contact" 
                  value="not-controlled"
            />
              <label htmlFor="for-service">
                Для служебного пользования
              </label>
          </div>
          <div className="all-docs__filter-radio">
            <input 
                  type="checkbox" 
                  id="diord"
                  name="contact" 
                  value="not-controlled"
            />
              <label htmlFor="diord">
                ДиОРД
              </label>
          </div>
          <div className="all-docs__filter-radio">
            <input 
                  type="checkbox" 
                  id="inner-correspondency"
                  name="contact" 
                  value="not-controlled"
            />
              <label htmlFor="inner-correspondency">
                Внутренняя корреспонденция
              </label>
          </div>
          <div className="all-docs__filter-radio">
            <input 
                  type="checkbox" 
                  id="answer"
                  name="contact" 
                  value="not-controlled"
            />
              <label htmlFor="answer">
                Ответ на исходящий
              </label>
          </div>
        </div>
        <div className="document__container">
                <div className="document__title">
                    <div style={{textAlign: "center"}}>
                        <h3>Входящий документ</h3>
                    </div>
                </div>
                <div className="add-doc__theme">
                  <input 
                    onChange={(event) => inputHandler(event)}
                    name='theme'
                    type="text" 
                    className="add-doc__input" 
                    placeholder='Тема документа:'/>
                </div>
                <div className="document__body-container">
                    <div className="document__body-box">
                        <div className="add-doc__box">
                            <strong>Исходящий №:</strong>
                            <input 
                              onChange={(event) => inputHandler(event)}
                              name='outgoing_number'
                              type="text" 
                              className="add-doc__input"/>
                        </div>
                        <div className="add-doc__box">
                            <strong>Дата исходящего:</strong>
                            <input 
                              onChange={(event) => inputHandler(event)}
                              name='date_of_outgoing'
                              type="date" 
                              className="add-doc__input"/>
                        </div>
                        <div className="add-doc__box">
                            <strong>Корреспондент:</strong>
                            <input 
                              onChange={(event) => inputHandler(event)}
                              name='correspondent'
                              type="text" 
                              className="add-doc__input"/>
                        </div>
                        <div className="add-doc__box">
                            <strong>Регистратор:</strong>
                            <input 
                              onChange={(event) => inputHandler(event)}
                              name='registrar'
                              type="text" 
                              className="add-doc__input"/>
                        </div>
                    </div>
                    <div className="document__body-box">
                        <div className="add-doc__box">
                            <strong>Вид доставки:</strong>
                            <input 
                              onChange={(event) => inputHandler(event)}
                              name='type_of_delivery'
                              type="text" 
                              className="add-doc__input"/>
                        </div>
                        <div className="add-doc__box">
                            <strong>Регистрационный номер:</strong>
                            <input 
                              onChange={(event) => inputHandler(event)}
                              name='registration_number'
                              type="text" 
                              className="add-doc__input"/>
                        </div>
                        <div className="add-doc__box">
                            <strong>Дата регистрации:</strong>
                            <input 
                              onChange={(event) => inputHandler(event)}
                              name='date_of_registration'
                              type="date" 
                              className="add-doc__input"/>
                        </div>
                        <div className="add-doc__box">
                            <strong>Подразделение:</strong>
                            <input 
                              onChange={(event) => inputHandler(event)}
                              name='subdivision'
                              type="text" 
                              className="add-doc__input"/>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                  <button 
                    onClick={() => submitHandler()}
                    style={{padding: "10px 20px"}} 
                    className="btn-primary">
                      Готово
                    </button>
                </div>
        </div>
      </div>
    </div>
  )
}

export default AddDocument