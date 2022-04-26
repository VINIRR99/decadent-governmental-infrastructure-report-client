import { Wrap, SearchBar, Input, SearchButton } from "./styles";
import { SearchIcon } from "../Icons";

const Search = () => {
    return (
        <SearchBar>
            <SearchButton type="submit">
                <SearchIcon />
            </SearchButton>
            <Input type="text" placeholder="Search" />
        </SearchBar>
    );
};

export default Search;