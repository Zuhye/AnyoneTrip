
import '../css/allList.css';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({search,onSearch, onChangeSearch}) {
    return (
            <form onSubmit={e => onSearch(e)} className="search">
                <input type="text" placeholder="가고싶은 곳을 찾아보세요 !"
                 className="searchInput" value = {search} onChange={onChangeSearch}/>
                <button type="submit" className="searchBtn">
                    <SearchIcon/>
                </button>
            </form>
    )
}
