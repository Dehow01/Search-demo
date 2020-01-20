import React from "react";
import "./ResultSearch.css"

function ResultSearch(props) {
    const emitent = props.emitent;
    return (
        <div className="resultSearch">
            {emitent["Наименование эмитента"] &&
            <div>
                <p>Наименование эмитента: {props.emitent["Наименование эмитента"]}</p>
                <p>Дата раскрытия: {props.emitent["Дата раскрытия"]}</p>
                <p>Дата заключения договора: {props.emitent["Дата заключения договора"]}</p>
                <p>ИНН: {props.emitent["ИНН"]}</p>
                <p>ОГРН: {props.emitent["ОГРН"]}</p>
            </div>
            }
        </div>

    )
}

export default ResultSearch;
