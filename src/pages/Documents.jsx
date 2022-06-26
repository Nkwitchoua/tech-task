import React, { useContext, useEffect, useState } from 'react';
import "../styles/documents.scss";
import { Icon } from "@iconify/react"
import { documentsContext } from '../context/DocumentsContext';
import DocumentPreview from '../components/Documents/DocumentPreview';
import CurrentDocument from '../components/Documents/CurrentDocument';
import ModalCurrentDoc from '../components/Documents/ModalCurrentDoc';
import useWindowDimensions from '../components/getWindowDimension';

const Documents = () => {

    const { width } = useWindowDimensions();
    const { document, documents, getAllDocuments } = useContext(documentsContext);
    const [currentDoc, setCurrentDoc] = useState(null);
    const [ modal, setModal ] = useState(false);
    
    useEffect(() => {
        getAllDocuments();
    }, []);

    if(!documents) {
        return (
            <div className="loading-container">
                <Icon 
                    icon="eos-icons:bubble-loading"
                    className='loading-icon'/>
            </div>
        )
    }

    return (
        <div className="docs__main">
            <div className="all-docs__container">
                <div className="all-docs__title">
                    <h4>Входящие по номеру регистрации</h4>
                </div>
                <div className="all-docs__search_container">
                    <div className="all-docs__search_box">
                        <Icon style={{fontSize: "24px"}} icon="ci:search"/>
                        <input placeholder='Найти' type="text" className="all-docs__search" />
                    </div>

                    <div className="all-docs__filter-box">
                        <div className="all-docs__filter-radio">
                            <input 
                                type="radio" 
                                id="contactChoice1"
                                name="contact" 
                                value={null}/>
                            <label htmlFor="contactChoice1">Все</label>
                        </div>
                        <div className="all-docs__filter-radio">
                            <input 
                                type="radio" 
                                id="contactChoice2"
                                name="contact" 
                                value="not-controlled"/>
                            <label htmlFor="contactChoice2">Неконтрольные</label>
                        </div>
                        <div className="all-docs__filter-radio">
                            <input 
                                type="radio" 
                                id="contactChoice3"
                                name="contact" 
                                value="removed-from-control"/>
                            <label htmlFor="contactChoice3">Снятые с контроля</label>
                        </div>
                        <div className="all-docs__filter-radio">
                            <input 
                                type="radio" 
                                id="contactChoice3"
                                name="contact" 
                                value="on-control"/>
                            <label htmlFor="contactChoice3">На контроле</label>
                        </div>
                    </div>
                </div>
                <div className="all-docs__preview">
                    {
                        documents.map((docData) => {
                            return <DocumentPreview 
                                        setModal={setModal}
                                        docData={docData} 
                                        key={docData.id}
                                        setCurrentDoc={setCurrentDoc}
                                        currentDoc={currentDoc}/>
                        })
                    }
                </div>
            </div>
            {
                document && width > 768 ?
                    <CurrentDocument data={document}/> :
                <div className='document-preview' style={{width: "100%"}}>
                    <h3 style={{textAlign: "center"}}>Выберите документ</h3>
                </div>
            }
            <ModalCurrentDoc modal={modal} setModal={setModal}/>  
        </div>
    )
}

export default Documents