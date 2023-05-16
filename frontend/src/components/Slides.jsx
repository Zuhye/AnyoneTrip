
import '../css/home.css';

export default function Slides(props) {
    return (
    <div className="background">
        <div className="box">
            <div className="slide">
                <div className="slide_img">
                    <img src='img/main_image.jpg' alt="slide" />
                </div>
            </div>
            <div className="slide_prev_button slide_button">◀</div>
            <div className="slide_next_button slide_button">▶</div>
        </div>
        <div className="bottom">
            <button className="schedule_btn">일정 생성하기</button>
        </div>
    </div>
    )
}