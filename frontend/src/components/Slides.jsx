
import { Link } from 'react-router-dom';
import '../css/home.css';

export default function Slides(props) {
    return (
    <div className="background">
        <div className="box">
            <div className="slide">
                <div className="slide_img">
                    <img className='slide_img' src='img/main_image2.jpg' alt="slide" />
                </div>
            </div>
        </div>
        <h1 className="title">무장애 여행 일정</h1>
        <h2 className="content">휠체어를 타는 장애인이나 
유모차를 가지고 나온 부부, 어린이, 노약자 등도
불편 없이 이용할 수 있는 관광지들만 모았다 ! </h2>
        <h2 className="go">이제 일정을 짜 보자!</h2>
        <div className="bottom">
            <Link to='/plan'>
                <button className="schedule_btn">일정 생성하기</button>
            </Link>
        </div>
    </div>
    )
}