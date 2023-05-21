import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';

import '../css/planLocation.css';

const { kakao } = window;

function PlanLocation() {
  const [barrierfreeInfo, setBarrierfreeInfo] = useState([
    {
      "addr1": "대구광역시 동구 효동로2길 10",
      "addr2": "(효목동)",
      "areacode": "4",
      "booktour": "0",
      "cat1": "A02",
      "cat2": "A0206",
      "cat3": "A02060300",
      "contentid": "2488233",
      "contenttypeid": "14",
      "createdtime": "20170331002959",
      "firstimage": "http://tong.visitkorea.or.kr/cms/resource/26/2488226_image2_1.JPG",
      "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/26/2488226_image2_1.JPG",
      "cpyrhtDivCd": "Type3",
      "mapx": "128.6507908775",
      "mapy": "35.8791505263",
      "mlevel": "6",
      "modifiedtime": "20221014143732",
      "sigungucode": "4",
      "tel": "",
      "title": "국립대구기상과학관",
      "zipcode": "41179"
    },
    {
      "addr1": "대구광역시 동구 동부로 149",
      "addr2": "",
      "areacode": "4",
      "booktour": "0",
      "cat1": "A01",
      "cat2": "A0101",
      "cat3": "A01010500",
      "contentid": "2553566",
      "contenttypeid": "14",
      "createdtime": "20180712224509",
      "firstimage": "http://tong.visitkorea.or.kr/cms/resource/04/2482404_image2_1.jpg",
      "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/04/2482404_image3_1.jpg",
      "cpyrhtDivCd": "Type3",
      "mapx": "128.6294594533",
      "mapy": "35.8780669221",
      "mlevel": "6",
      "modifiedtime": "20220927112657",
      "sigungucode": "4",
      "tel": "",
      "title": "대구 아쿠아리움",
      "zipcode": "41229"
    },
    {
      "addr1": "대구광역시 동구 파계로112길 17",
      "addr2": "",
      "areacode": "4",
      "booktour": "0",
      "cat1": "A02",
      "cat2": "A0206",
      "cat3": "A02060100",
      "contentid": "1248810",
      "contenttypeid": "14",
      "createdtime": "20110402004322",
      "firstimage": "http://tong.visitkorea.or.kr/cms/resource/25/1240825_image2_1.jpg",
      "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/25/1240825_image3_1.jpg",
      "cpyrhtDivCd": "Type3",
      "mapx": "128.6364782252",
      "mapy": "35.9793444686",
      "mlevel": "6",
      "modifiedtime": "20220923152218",
      "sigungucode": "4",
      "tel": "",
      "title": "자연염색박물관",
      "zipcode": "41001"
    },
    {
      "addr1": "대구광역시 동구 효동로2길 24",
      "addr2": "(효목동)",
      "areacode": "4",
      "booktour": "0",
      "cat1": "A02",
      "cat2": "A0206",
      "cat3": "A02060600",
      "contentid": "1756202",
      "contenttypeid": "14",
      "createdtime": "20121123001448",
      "firstimage": "",
      "firstimage2": "",
      "cpyrhtDivCd": "",
      "mapx": "128.6516463528",
      "mapy": "35.8793255226",
      "mlevel": "6",
      "modifiedtime": "20220831172245",
      "sigungucode": "4",
      "tel": "",
      "title": "아양아트센터(구, 동구문화체육회관)",
      "zipcode": "41179"
    }
  ]);

  const [selectedMarker, setSelectedMarker] = useState(null);

  var map;
  // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
  var markers = [];

  // 별도의 객체를 활용하여 마커와 관련 정보를 저장합니다
  const [markerInfoMap, setMarkerInfoMap] = useState({});

  
  useEffect(() => {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(35.8780669221, 128.6294594533), //지도의 중심좌표. y,x 순서로 적으면됨
      level: 7 //지도의 레벨(확대, 축소 정도)
    };

    map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    barrierfreeInfo.forEach((info) => {
      const { mapx, mapy, title, contentid } = info;
      const position = new kakao.maps.LatLng(parseFloat(mapy), parseFloat(mapx)); //카카오맵 LatLng는 y,x 식으로 넣어야함
      addMarker(position, title, contentid);
    })

  }, []); // 빈 배열을 두번째 인자로 전달하여, 컴포넌트가 마운트될 때만 실행되도록 함.

  // 마커를 생성하고 지도위에 표시하는 함수입니다
  function addMarker(position, title, contentid) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: position
    });

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다a
    var iwContent = `<div style="padding:5px;">${title}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);

    // 생성된 마커와 관련 정보를 저장합니다
    markerInfoMap[contentid] = {
      marker: marker,
      infowindow: infowindow,
      title: title,
      contentid: contentid
    };

    console.log(marker);

  }

  // 리스트가 클릭되었을 때 작동할 함수
  const handleListClick = (info) => {
    console.log("list clicked");
    const { mapx, mapy, title, contentid } = info;
    const position = new kakao.maps.LatLng(
      parseFloat(mapy),
      parseFloat(mapx)
    );

    console.log(map);
    if (map) {
      console.log(map);
      map.setCenter(position); // map 객체가 유효한 경우에만 setCenter 함수 호출
    }

    if (selectedMarker) {
      const marker = selectedMarker;
      marker.infowindow.close(); // 기존 마커의 인포윈도우를 닫습니다.
    }

    const markerInfo = markerInfoMap[contentid];
    if (markerInfo) {
      console.log("list clicked2");
      const { marker, infowindow } = markerInfo;
      infowindow.open(map, marker); // 새로운 마커의 인포윈도우를 엽니다.
      setSelectedMarker(markerInfo); // 선택된 마커를 상태로 업데이트합니다.
    }
    
  };

  var mapobject = (
    <div id="map" className="map"></div>
  );

  var listobject = (
    barrierfreeInfo.map((info) => (
      <li
        key={info.contentid}
        onClick={() => handleListClick(info)}
        className={selectedMarker && selectedMarker.title === info.title ? 'selected' : ''}
      >
        {info.title}
      </li>
    ))

  );

  var page = (
    <div className="container">
      <div id="item1">
        <ul>
          {listobject}
        </ul>
      </div>
      <div className="row">
        <div id="item2">
          {mapobject}
        </div>
        <div id="item3">내용2-2</div>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      {page}
    </div>
  );
}

export default PlanLocation;
