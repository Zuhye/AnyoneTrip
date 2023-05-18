import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';

import '../css/planLocation.css';

const {kakao} = window;

function PlanLocation() {

    useEffect(() => {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(35.8780669221, 128.6294594533), //지도의 중심좌표. y,x 순서로 적으면됨
            level: 7 //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
            // 클릭한 위치에 마커를 표시합니다 
            addMarker(mouseEvent.latLng);             
        });
        
        // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
        var markers = [];
        
        // 마커 하나를 지도위에 표시합니다 
        addMarker(new kakao.maps.LatLng(35.8780669221, 128.6294594533));
        
        // 마커를 생성하고 지도위에 표시하는 함수입니다
        function addMarker(position) {
            
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: position
            });

            // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
            var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
            });

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
              // 마커 위에 인포윈도우를 표시합니다
              infowindow.open(map, marker);  
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            // 생성된 마커를 배열에 추가합니다
            markers.push(marker);
        }

    }, []); // 빈 배열을 두번째 인자로 전달하여, 컴포넌트가 마운트될 때만 실행되도록 함.

    var mapobject = (
        <div id="map" className="map"></div>
    )

    var page = (
        <div className="container">
          <div id="item1">내용1</div>
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
