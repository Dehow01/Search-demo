import React, {useState} from "react";
import "./HintsSearch.css"

function HintsSearch(props) {
    const resView = props.result.map((item, index) => <li key = {index} className={(props.selectIndex === index) ? "SelectLink": ""}>{item['Наименование эмитента']}</li>);
    return (
        <div className = {(resView.length > 0) ? "searchResult resultUl": "searchResultHide resultUl"} >
            <ul>
                    {resView}
            </ul>
        </div>
    )
}

export default HintsSearch
