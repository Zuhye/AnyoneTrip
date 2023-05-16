import {useState, useEffect} from 'react';

import Header from '../components/Header.jsx';
import SearchBar from '../components/SearchBar.jsx';
import Select from 'react-select';
import '../css/allList.css';

function SiteListPage(){
    return (
        <div>
            <Header/>
            <SearchBar/>
            <div>
                <SelectBox/>
            </div>
        </div>
    )
}

function SelectBox(){
    const sido = [
    {value: "select", label: "시/도 선택"},
    {value: "Seoul", label: "서울특별시"},
    {value: "Incheon", label: "인천광역시"},
    {value: "Daejeon", label: "대전광역시"},
    {value: "Kwangju", label: "광주광역시"},
    {value: "Daegu", label: "대구광역시"},
    {value: "Ulsan", label: "울산광역시"},
    {value: "Busan", label: "부산광역시"},
    {value: "Daejeon", label: "대전광역시"},
    {value: "Daejeon", label: "대전광역시"} ]

    const [selectSido, setSelectSido] = useState(sido[0]);

	return (
        <Select options={sido}
        onChange={setSelectSido}
        defaultValue = {sido[0]} />
	);
};

export default SiteListPage;