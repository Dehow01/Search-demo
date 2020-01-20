import React, {useState} from "react";
import "./SearchLine.css"
import HintsSearch from "./HintsSearch";
import ResultSearch from "./ResultSearch";

function SearchLine() {
    const [val, setVal] = useState([]);
    const [selectVal, setSelectIndexVal] = useState(0);
    const [inputValue, changeInputValue] = useState("");
    const [resultSearchEmitentValue, changeResultSearchEmitentValue] = useState({});
    let timeStop = null;


    function changeInputSearch(e) {
        const value = e.target.value;
        changeInputValue(value);
        clearTimeout(timeStop);
        timeStop = setTimeout(getSearch, 300);
    }

    function selectLink() {
        changeInputValue(val[selectVal]['Наименование эмитента']);
        changeResultSearchEmitentValue(val[selectVal]);
        setSelectIndexVal(0);
        setVal([]);
    }

    function getSearch() {
        fetch(`/api/?link=${inputValue}`)
            .then(res => res.json())
            .then(json => {
                setVal(json);
                setSelectIndexVal(0)
            });
    }

    function selectKey(e) {
        switch (e.keyCode) {
            case 40:
                if (selectVal < val.length - 1) {
                    setSelectIndexVal(selectVal + 1)
                }
                break;
            case 38:
                if (selectVal > 0) {
                    setSelectIndexVal(selectVal - 1)
                }
                break;
            case 13:
                selectLink();
                break;
            default:
                break;
        }
    }

    return (
        <div className="search">
            <i id="filtersubmit" className="fa fa-search searchIcon">

            </i>
            <input type="text"
                   className={val.length > 0 ? "serchLineAcrive" : "serchLine"}
                   onChange={changeInputSearch}
                   onKeyDown={selectKey}
                   value={inputValue}
            >
            </input>
            <HintsSearch result={val} selectIndex={selectVal}/>
            <ResultSearch emitent={resultSearchEmitentValue}/>
        </div>
    )
}

export default SearchLine
