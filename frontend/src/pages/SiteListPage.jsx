import {useEffect, useState} from 'react';

import '../css/allList.css';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/SearchBar.jsx';
import Select from 'react-select';

import HeartImg from '../image/like.png';
import EmptyHeart from '../image/heart.png';
import * as API from "../API/userApi.jsx";

import '../css/allList.css';



function SiteListPage(){

    const [search, setSearch] = useState("");
    const [site, setSite] = useState([]);

    useEffect(()=> {
        const siteData = async()=> {
            try{
                await API.get('/data/areabased.json').then((res)=> {
                    if(res.data) {
                        setSite(res.data.site);
                        console.log("1", res.data.site);
                    }
                })
            } catch(e) {
                console.error(e);
            }
        }
        siteData();
    }, []);

    const onSearch = async (e) => {
        console.log(search);
        e.preventDefault();
        const filterData = site.filter((s)=> {
            return s.title.includes(search);
        });
        setSite(filterData);
    }

    const onChangeSearch = (e)=> {
        e.preventDefault();
        const inputValue = e.target.value;
        setSearch(inputValue);
        if(inputValue.trim()=== '') {
            try {
                API.get('/data/areabased.json').then((res) => {
                  if (res.data) {
                    setSite(res.data.site);
                  }
                })
              } catch (e) {
                console.error(e);
              }
        }
    };

    return (
        <div>
            <Header/>
            <SearchBar search={search} onSearch = {onSearch} onChangeSearch = {onChangeSearch}/>
            <div>
                <SelectBox/>
                <Filtering/>
                <CardSection site = {site}/>
            </div>
            <Footer/>
        </div>
    )
}

function SelectBox(){
    const sido = [
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
    {value: "Jejudo", label: "제주도"}
]

    const [selectSido, setSelectSido] = useState(sido[0]);

	return (
        <Select options={sido}
        onChange={(e)=> setSelectSido(e.value)}
        placeholder="시/도 선택"
        className='selectBox'
        value={sido.filter(function (option) {
            return option.value === selectSido;
        })}
        />
	);
}


function CardSection({site}) {
    return (
        <div className='site_container'>
            {site.map((s)=> (
            <div key={s.contentid} className='site'>
                <div className='site_image_div'><img className='site_image' src={s.firstimage} alt='site_image'></img></div>
                <h5>{s.title}</h5>
                <p>{s.addr1}</p>
            </div>
            ))}

        </div>
    )
}

function Filtering() {
    return (
        <div className='filtering_container'>
            <button>전체보기</button>
            <button>관광지</button>
            <button>맛집</button>
            <button>숙소</button>
            <button>문화시설</button>
        </div>
    )
}

export default SiteListPage;