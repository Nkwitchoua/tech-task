import React, { useContext } from 'react';
import "../../styles/docPreview.scss";
import { Icon } from "@iconify/react";
import { documentsContext } from '../../context/DocumentsContext';
import useWindowDimensions from '../getWindowDimension';

const DocumentPreview = (data) => {

    const { width } = useWindowDimensions();
    const { correspondent, date_of_registration, registrar, id, registration_number, verified } = data.docData
    const { getDocument } = useContext(documentsContext);
    
    return (
        <div 
            className={`preview__container ${data.currentDoc === id ?  'preview__current' : ""}`}
            onClick={() => {
                if(width < 768) {
                    data.setModal(true);
                }
                data.setCurrentDoc(id);
                getDocument(id);
            }}>
            <div className="preview__icon-box">
                <Icon 
                icon={verified ? "bi:clipboard-check" : "material-symbols:pending-actions"} 
                className={verified ? "preview__icon-checked" : "preview__icon-pending"}/>
            </div>
            <div className="preview__data">
                <span ><strong>{correspondent}</strong></span>
                <span>{registrar}</span>
                <span>Рег. номер: {registration_number}</span>
                <span>Дата: {date_of_registration}</span>
            </div>
        </div>
    )
}

export default DocumentPreview