import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div style={{display: "flex", justifyContent: "center", margin: "30px", gap: "30px"}}>
            <button 
                className="btn-primary"
                onClick={() => navigate("/documents")}>
                    Все документы
                </button>
            <button 
                className="btn-primary"
                onClick={() => navigate("/add-document")}>
                    Добавить документ
                </button>
        </div>
    )
}

export default HomePage