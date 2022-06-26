import React, { useContext } from 'react';
import { documentsContext } from '../../context/DocumentsContext';
import useWindowDimensions from '../getWindowDimension';
import CurrentDocument from "./CurrentDocument";

const ModalCurrentDoc = ({modal, setModal}) => {

    const { document } = useContext(documentsContext);
    const { width } = useWindowDimensions();

    return (
        <div className={modal && width < 768 ? "container-modal" : "container-modal-hide"}>
            {
                document ?
                <CurrentDocument setModal={setModal}/> :
                <></>
            }
        </div>
    )
}

export default ModalCurrentDoc