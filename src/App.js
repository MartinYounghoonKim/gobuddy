/* eslint-disable */
import React, {Component} from 'react';
import './App.css';
import {str} from "./test";
import Header from "./components/Header";

class App extends Component {
  componentDidMount () {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
      };

    var map = new daum.maps.Map(mapContainer, mapOption);

    var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
      imageSize = new daum.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = {offset: new daum.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
      markerPosition = new daum.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

// 마커를 생성합니다
    var marker = new daum.maps.Marker({
      position: markerPosition,
      image: markerImage // 마커이미지 설정
    });

// 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    var positions = [
      {
        title: '카카오',
        latlng: new daum.maps.LatLng(33.450705, 126.570677),
        content: '<div class="overlaybox">' +
          '    <div class="boxtitle">카카오</div>' +
          '    <div class="first">' +
          '        <div class="triangle text">1</div>' +
          '        <div class="movietitle text">드래곤 길들이기2</div>' +
          '    </div>' +
          '    <ul>' +
          '        <li class="up">' +
          '            <span class="number">2</span>' +
          '            <span class="title">명량</span>' +
          '            <span class="arrow up"></span>' +
          '            <span class="count">2</span>' +
          '        </li>' +
          '        <li>' +
          '            <span class="number">3</span>' +
          '            <span class="title">해적(바다로 간 산적)</span>' +
          '            <span class="arrow up"></span>' +
          '            <span class="count">6</span>' +
          '        </li>' +
          '        <li>' +
          '            <span class="number">4</span>' +
          '            <span class="title">해무</span>' +
          '            <span class="arrow up"></span>' +
          '            <span class="count">3</span>' +
          '        </li>' +
          '        <li>' +
          '            <span class="number">5</span>' +
          '            <span class="title">안녕, 헤이즐</span>' +
          '            <span class="arrow down"></span>' +
          '            <span class="count">1</span>' +
          '        </li>' +
          '    </ul>' +
          '</div>'
      },
      {
        title: '생태연못',
        latlng: new daum.maps.LatLng(33.450936, 126.569477),
        content: '<div class="customoverlay">' +
          '  <a href="http://map.daum.net/link/map/11394059" target="_blank">' +
          '    <span class="title">생태연못</span>' +
          '  </a>' +
          '</div>'
      },
      {
        title: '텃밭',
        latlng: new daum.maps.LatLng(33.450879, 126.569940),
        content: '<div class="customoverlay">' +
          '  <a href="http://map.daum.net/link/map/11394059" target="_blank">' +
          '    <span class="title">텃밭</span>' +
          '  </a>' +
          '</div>'
      },
      {
        title: '근린공원',
        latlng: new daum.maps.LatLng(33.451393, 126.570738),
        content: '<div class="customoverlay">' +
          '  <a href="http://map.daum.net/link/map/11394059" target="_blank">' +
          '    <span class="title">근린공원</span>' +
          '  </a>' +
          '</div>'
      }
    ];
    for (var i = 0; i < positions.length; i ++) {
      var customOverlay = new daum.maps.CustomOverlay({
        map: map,
        position: positions[i].latlng,
        content: positions[i].content,
        yAnchor: 1
      });
    }
  }
  render() {

    return (
      <>
      <Header/>
        테스트{str}
      <div id="map" style={{ width: "100%", height: "90vh" }}>
        테스트
      </div>
      </>
    );
  }
}

export default App;
