import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../css/detail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailPage(){
    return (
        <div>
            <Header/>
            <ContentBox/>
            <Footer/>
        </div>
    )
}

function ContentBox(){

    const [siteData, setSiteData] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        const fetchData = async()=> {
            try{
                const api = `https://apis.data.go.kr/B551011/KorWithService1/detailCommon1?MobileOS=WIN&MobileApp=Barrier_Free&contentId=${id}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&overviewYN=Y&_type=json&serviceKey=${process.env.REACT_APP_API_KEY}`
                await axios.get(api).then((res)=> {
                    const data = res.data.response.body.items.item[0]
                    setSiteData(data);
                })
            }catch(e){
                console.log(e)
            }
        }
        fetchData();
    }, []);

    return (
        <div className='contentBox'>
            {siteData && (
               <div key={siteData.contentid} className='site_detail'>
               {siteData.firstimage ? (
                    <div className='detail_image_div'><img className='detail_image' src={siteData.firstimage} alt='site_image'></img></div>
                    ): (
                    <div className='detail_image_div'><img className='detail_image' src='img/Temporary_photo.png' alt='site_image'></img></div>
                )}
               <div className='site_info'>
                <h3>{siteData.title}</h3>
                <h4>{siteData.addr1}</h4>
                <p>{siteData.overview}</p>
                <br/>
                <p>{siteData.homepage}</p>
               </div>
             </div>
            )}
        </div>
    )
}

export default DetailPage;