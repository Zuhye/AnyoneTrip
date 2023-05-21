import {useState} from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/SearchBar.jsx';
import Select from 'react-select';

import HeartImg from '../image/like.png';
import EmptyHeart from '../image/heart.png';

import '../css/allList.css';



function SiteListPage(){
    return (
        <div>
            <Header/>
            <SearchBar/>
            <div>
                <SelectBox/>
                <Filtering/>
                <CardSection/>
            </div>
            <Footer/>
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
        onChange={setSelectSido}
        defaultValue = {sido[0]} className='selectBox'/>
	);
};

function CardSection() {
    return (
        <div className='site_container'>
            <div className='site'>
                <div className='site_image_div'><img className='site_image' src='img/main_image.jpg' alt='site_image'></img></div>
                <h5>장소 이름</h5>
                <p>위치 정보</p>
            </div>
            <div className='site'>
                <div className='site_image_div'><img className='site_image' src='img/main_image.jpg' alt='site_image'></img></div>
                <h5>장소 이름</h5>
                <p>위치 정보</p>
            </div>
            <div className='site'>
                <div className='site_image_div'><img className='site_image' src='img/main_image.jpg' alt='site_image'></img></div>
                <h5>장소 이름</h5>
                <p>위치 정보</p>
            </div>
            <div className='site'>
                <div className='site_image_div'><img className='site_image' src='img/main_image.jpg' alt='site_image'></img></div>
                <h5>장소 이름</h5>
                <p>위치 정보</p>
            </div>
            <div className='site'>
                <div className='site_image_div'><img className='site_image' src='img/main_image.jpg' alt='site_image'></img></div>
                <h5>장소 이름</h5>
                <p>위치 정보</p>
            </div>
            <div className='site'>
                <div className='site_image_div'><img className='site_image' src='img/main_image.jpg' alt='site_image'></img></div>
                <h5>장소 이름</h5>
                <p>위치 정보</p>
            </div>

        </div>
    )
}

const HeartBtn = ({like, onClick}) => {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img className='heart_img' src={like?HeartImg:EmptyHeart} onClick={onClick}/>
    );
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