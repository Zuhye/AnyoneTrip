
import '../css/allList.css';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
            <label className="search">
                <input type="text" placeholder="가고싶은 곳을 찾아보세요 !" className="searchInput"/>
                <button type="button" className="searchBtn">
                    <SearchIcon/>
                </button>
            </label>
    )
}
