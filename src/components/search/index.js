import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar, Input, SearchButton } from "./styles";
import { SearchIcon } from "../Icons";

const Search = () => {
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (description !== "") {
            navigate(`/search?search-result=${description}`);
            setDescription("");
        };
    };

    return (
        <SearchBar>
            <SearchButton onClick={handleSearch}>
                <SearchIcon />
            </SearchButton>
            <Input type="text" placeholder="Search" value={description} onChange={e => setDescription(e.target.value)} />
        </SearchBar>
    );
};

export default Search;