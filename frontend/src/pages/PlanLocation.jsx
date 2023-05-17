import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';

import '../css/planLocation.css';

const {kakao} = window;

function PlanLocation() {

    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(35.8780669221, 128.6294594533), //지도의 중심좌표. y,x 순서로 적으면됨
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
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
