import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Select from 'react-select';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import '../css/planpage.css';

function PlanPage() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleStartDateChange = (date) => {
    setStartDate(date);
  }

  const handleEndDateChange = (date) => {
    setEndDate(date);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected dates: ${startDate} - ${endDate}`);
    console.log(`Selected location: ${selectedOption}`);
    axios.post('/api/submit', {
      location: selectedOption,
      startDate: startDate,
      endDate: endDate
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };


  const MyButton = () => {
    return (
      <div className="my-button">
        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
          다음
        </Button>
      </div>
    );
  };
  

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
      <form>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        장소 : <LocationSelector />
      </div>
      <br/>
      <div className="calendar-container">
            <div className="calendar-wrapper">
            
              <label htmlFor="startDate">시작일</label>
              <Calendar
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="calendar-wrapper">
              <label htmlFor="endDate">종료일</label>
              <Calendar
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </div>

        </form>
        <br />
        <MyButton/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

function LocationSelector() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const options = [
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
  ];

  return (
    <div className="location-selector">
      <Select
        value={selectedOption}
        options={options}
        onChange={handleChange}
        placeholder="시/도 선택"
      />
    </div>
  );
}

export default PlanPage; 