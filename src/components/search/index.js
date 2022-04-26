import { useState } from "react";
import { SearchBar, Input, SearchButton } from "./styles";
import { SearchIcon } from "../Icons";

const Search = () => {
    const [description, setDescription] = useState("");

    return (
        <SearchBar>
            <SearchButton>
                <SearchIcon />
            </SearchButton>
            <Input type="text" placeholder="Search" value={description} onChange={e => setDescription(e.target.value)} />
        </SearchBar>
    );
};

export default Search;