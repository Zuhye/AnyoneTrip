import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from '../components/Header.jsx';

function PlanPage() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  }

  const handleEndDateChange = (date) => {
    setEndDate(date);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected dates: ${startDate} - ${endDate}`);
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
              <label htmlFor="search">Search:</label>
              <input type="text" id="search" name="search" />
              <button type="submit">Search</button><br />
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
        <button type="submit" onClick={handleSubmit}>다음</button>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default PlanPage;

