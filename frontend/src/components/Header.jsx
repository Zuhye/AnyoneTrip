
import '../css/home.css';

export default function Header(props) {
    return (
        <div className="header">
            <div className="header-content">
                <div>
                    <h1 className="logo">로고</h1>
                </div>
                <nav className="menu-bar">
                    <div className="list">
                        <a>HOME</a>
                        <a>VIEW</a>
                        <a>LOGIN</a>
                        <a>JOIN</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}