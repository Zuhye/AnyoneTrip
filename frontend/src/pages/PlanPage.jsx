import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from '../components/Header.jsx';
import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
//import '@mui/lab/DatePicker/DatePicker.css';


function PlanPage() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');

  const handleStartDateChange = (date) => {
    setStartDate(date);
  }

  const handleEndDateChange = (date) => {
    setEndDate(date);
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected dates: ${startDate} - ${endDate}`);
    console.log(`Search query: ${searchQuery}`);
    //선택된 날짜를 서버로 보내는 로직 추가
  };

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
      <form>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <div style={{ width: '50%' }}>
            <TextField
                id="search"
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <br />
              <label htmlFor="startDate">Start Date:</label>
              <Calendar
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div style={{ width: '50%' }}>
              <label htmlFor="endDate">End Date:</label>
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
        <Button variant="outlined" type="submit" onClick={handleSubmit}>다음</Button>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default PlanPage;