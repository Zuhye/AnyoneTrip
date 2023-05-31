import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';

import '../css/planLocation.css';

const { kakao } = window;
window.map = null;

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

  // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
  var markers = []; 

  // 별도의 객체를 활용하여 마커와 관련 정보를 저장합니다
  const [markerInfoMap, setMarkerInfoMap] = useState({});

  const [overlayOpen, setOverlayOpen] = useState({});
  
  const [selectedItems, setSelectedItems] = useState([]); //선택한 관광지 요소

  useEffect(() => {
    // map 객체를 전역 변수로 설정
    if(window.map == null)
    {
      var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(35.8780669221, 128.6294594533), //지도의 중심좌표. y,x 순서로 적으면됨
        level: 7 //지도의 레벨(확대, 축소 정도)
      };
  
      const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  
      barrierfreeInfo.forEach((info) => {
        const { mapx, mapy, title, contentid, firstimage, addr1 } = info;
        const position = new kakao.maps.LatLng(parseFloat(mapy), parseFloat(mapx)); //카카오맵 LatLng는 y,x 식으로 넣어야함
        addMarker(map, position, title, contentid, firstimage, addr1 );
      })
      window.map = map;
    }
    
    // 마커 오버레이 내부의 "+" 버튼에 대한 클릭 이벤트 리스너
    document.addEventListener('click', handleAddButtonClick);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거하는 클린업 함수
    return () => {
      document.removeEventListener('click', handleAddButtonClick);
    };

  }, [selectedItems]); // 빈 배열을 두번째 인자로 전달하여, 컴포넌트가 마운트될 때만 실행되도록 함.

  // 마커를 생성하고 지도위에 표시하는 함수입니다
  function addMarker(map, position, title, contentid, firstimage, addr1 ) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: position
    });

    // 마커를 클릭했을 때 마커 위에 표시할 오버레이를 생성합니다a
    var iwContent = `<div class="wrap">
      <div class="info">
          <div class="title">
              ${title}
          </div>
          <div class="body">
              <div class="img">
                  <img src="${firstimage}" width="73" height="70">
              </div>
              <div class="desc">
                  <div class="ellipsis">${addr1}</div>
                  <button class="add-button" data-contentid="${contentid}">+</button>
              </div>
          </div>
      </div>
    </div>`; // 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

    // 오버레이를 생성합니다
    var overlay = new kakao.maps.CustomOverlay({
      content: iwContent,
      map: map,
      position: marker.getPosition() 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function () {
      const markerInfo = markerInfoMap[contentid];
      if (markerInfo) {
        const { overlay } = markerInfo;
        const isOpen = overlay.getMap() !== null;

        // 현재 오버레이 상태에 따라 열고 닫음
        if (isOpen) {
          overlay.setMap(null);
        } else {
          overlay.setMap(map);
        }

        // 선택된 마커를 업데이트
        setSelectedMarker(markerInfo);
      }
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);

    // 생성된 마커와 관련 정보를 저장합니다
    markerInfoMap[contentid] = {
      marker: marker,
      overlay: overlay,
      title: title,
      contentid: contentid
    };

    console.log(marker);
    overlay.setMap(null);
  }

  // 리스트가 클릭되었을 때 작동할 함수
  const handleListClick = (info) => {
    console.log("list clicked");
    const { mapx, mapy, title, contentid } = info;
    const position = new kakao.maps.LatLng(
      parseFloat(mapy),
      parseFloat(mapx)
    );

    console.log(window.map);
    if (window.map) {
      console.log(window.map);
      window.map.setCenter(position); // map 객체가 유효한 경우에만 setCenter 함수 호출
    }

    if (selectedMarker) {
      const marker = selectedMarker;
      marker.overlay.setMap(null); // 기존 마커의 오버레이를 닫습니다.
    }
    
    const markerInfo = markerInfoMap[contentid];
    if (markerInfo) {
      const { marker } = markerInfo;
      // 마커의 클릭 이벤트를 강제로 호출
      kakao.maps.event.trigger(marker, 'click');
    }

  };

  // 오버레이의 + 버튼 클릭 이벤트 처리 함수
  function handleAddButtonClick(event) {
    event.stopPropagation(); // 이벤트 전파 중단
  
    const contentid = event.target.dataset.contentid;
  
    // 이미 선택된 항목 중에 동일한 contentid가 있는지 확인
    const isDuplicate = selectedItems.some((item) => item.contentid === contentid);
  
    console.log(isDuplicate);
    console.log(selectedItems);
    if (isDuplicate) {
      // 이미 선택된 항목 중에 동일한 contentid가 있다면 아무 작업을 수행하지 않음
      return;
    }
  
    // 선택된 마커 정보 가져오기
    const markerInfo = markerInfoMap[contentid];
    if (markerInfo) {
      const { contentid, title, overlay } = markerInfo;
      setSelectedItems((prevItems) => [...prevItems, { title, contentid, overlay }]); // 수정된 부분: overlay도 추가
    }
  }

  const handleCancelClick = (contentid) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.contentid !== contentid)
    );
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
      <div id="listcontainer">
        <ul>
          {listobject}
        </ul>
      </div>
      <div className="row">
        <div id="mapcontainer">
          {mapobject}
        </div>
        <div id="item3">
          {selectedItems.map((item) => (
            <div key={item.contentid} className="item-container">
              <div className="item-title">{item.title}</div>
              <button
                className="cancel-button"
                onClick={() => handleCancelClick(item.contentid)}
              >
                -
              </button>
            </div>
          ))}
          <button>확정하기</button>
        </div>
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
