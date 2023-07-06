import React from "react";
import '../css/modal.css';

function Modal({dateArray, handleDateClick, handleCloseClick}) {

    return (
        <div className="modal" onClick={handleCloseClick}> 
            <div className="modalBody" onClick={(e)=> e.stopPropagation()}>
                <button className="closeBtn" onClick={handleCloseClick}>X</button>
                <h3>일자 선택</h3>
                <div className="listdate">
                {dateArray.map((date, index)=> (
                    <button key={index} onClick={()=> handleDateClick(date)}>
                        {date}
                    </button>
                ))}
                </div>
            </div>
        </div>
    )
}


export default Modal;