
import '../css/home.css';

export default function Header(props) {
    return (
        <div className="header">
            <div className="header-content">
                <div>
                    <h1 className="logo"><a href='/'>로고</a></h1>
                </div>
                <nav className="menu-bar">
                    <div className="list">
                        <a href='/'>HOME</a>
                        <a href='/allList'>VIEW</a>
                        <a>LOGIN</a>
                        <a>JOIN</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}