import {useEffect, useState} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/SearchBar.jsx';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import * as API from "../API/userApi.jsx";

import '../css/allList.css';
import axios from 'axios';



function SiteListPage() {

    const [search, setSearch] = useState("");
    const [site, setSite] = useState([]);
    const [selectedSido, setSelectedSido] = useState('');
    const [filteredSite, setFilteredSite] = useState([]);

    useEffect(()=> {
        const siteData = async()=> {
            const api = `/api/sites`

            try{
                await axios.get(api).then((res)=> {
                    const data = res.data.response.body.items
                    if(data) {
                        setSite(data.item);
                        setFilteredSite(data.item);
                    }
                })
            } catch(e) {
                console.error(e);
            }
        }
        siteData();
    }, []);


    const filterSite = (searchText, selectedSido, contenttypeid) => {
        let filteredData = site;

        if(searchText) {
            filteredData = filteredSite.filter((s)=> s.title.includes(searchText));
        }

        if(selectedSido) {
            filteredData = filteredData.filter((s)=> s.addr1.includes(selectedSido));
        }

        if(contenttypeid != "") {
            filteredData = filteredData.filter((s)=> s.contenttypeid === contenttypeid);
        }

        return filteredData;
    };



    const onSearch = async (e) => {
        e.preventDefault();
        setFilteredSite(filterSite(search, selectedSido, ""));
    };



    const onChangeSearch = (e)=> {
        const inputValue = e.target.value;
        setSearch(inputValue);

        if(inputValue.trim()=== '') {
           setFilteredSite(filterSite("", selectedSido, ""));
        }
    };


    const onSidoChange = (option)=> {
        setSelectedSido(option.value);

        if(option.value === '') {
            setFilteredSite(filterSite(search, "", ""));
        } else {
           setFilteredSite(filterSite(search, option.label, ""));
        }
    };

    const handleFilterChange = (contenttypeid)=> {
        setFilteredSite(filterSite(search, selectedSido, contenttypeid));
    }

    return (
        <div>
            <Header/>
            <SearchBar search={search} onSearch = {onSearch} onChangeSearch = {onChangeSearch}/>
            <div>
                <SelectBox onSidoChange = {onSidoChange} />
                <Filtering onFilterChange={handleFilterChange}/>
                <CardSection site = {filteredSite} />
            </div>
            <Footer/>
        </div>
    )
}

function SelectBox({onSidoChange}){
    const sido = [
    {value: '', label: '전체'},
    {value: "Seoul", label: "서울특별시"},
    {value: "Incheon", label: "인천광역시"},
    {value: "Daejeon", label: "대전광역시"},
    {value: "Kwangju", label: "광주광역시"},
    {value: "Daegu", label: "대구광역시"},
    {value: "Ulsan", label: "울산광역시"},
    {value: "Busan", label: "부산광역시"},
    {value: "Daejeon", label: "대전광역시"},
    {value: "Gyeonggi", label: "경기도"},
    {value: "Gangwon", label: "강원도"},
    {value: "Chungbuk", label: "충청북도"},
    {value: "Chungnam", label: "충청남도"},
    {value: "Jeonbuk", label: "전라북도"},
    {value: "Jeonnam", label: "전라남도"},
    {value: "Gyeongbuk", label: "경상북도"},
    {value: "Gyeongnam", label: "경상남도"},
    {value: "Jeju", label: "제주"}
]

    const [selectSido, setSelectSido] = useState(sido[0]);

    const handleSidoChange = (option)=> {
        setSelectSido(option);
        onSidoChange(option);
    }

	return (
        <Select options={sido}
        onChange={handleSidoChange}
        placeholder="시/도 선택"
        className='selectBox'
        value= {selectSido.value}
        />
	);
}


function CardSection({site}) {
    return (
        <div className='site_container'>
            {site.map((s)=> (
            <div key={s.contentid} className='site'>
                <Link to={`/detail/${s.contentid}`}>
                    {s.firstimage ? (
                        <div className='site_image_div'><img className='site_image' src={s.firstimage} alt='site_image'></img></div>
                        ): (
                        <div className='site_image_div'><img className='site_image' src='img/Temporary_photo.png' alt='site_image'></img></div>
                    )}
                 </Link>
                    <h5>{s.title}</h5>
                    <p>{s.addr1}</p>
            </div>
            ))}
        </div>
    )
}

function Filtering({site, onFilterChange}) {
    //12:관광지, 14:문화시설, 15:축제공연행사, 25:여행코스, 28:레포츠, 32:숙박, 38:쇼핑, 39:음식점
    const contenttype = {
        "12": "관광지",
        "14": "문화시설",
        "15": "축제공연행사",
        "25": "여행코스",
        "28": "레포츠",
        "32": "숙박",
        "38": "쇼핑",
        "39": "음식점",
      };
    
    const handleFilterChange = (contenttypeid)=> {
        onFilterChange(contenttypeid);
    }

    return (
        <div className='filtering_container'>
            <button onClick={()=> handleFilterChange("")}>전체보기</button>
            {Object.keys(contenttype).map((id)=> (
            <button key = {id} onClick={()=> handleFilterChange(id)}>
                {contenttype[id]}
            </button>
            ))}

        </div>
    )
}

export default SiteListPage;