import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const searchResult = searchParams.get("search-result");
    return (
        <h1>{searchResult}</h1>
    );
};

export default SearchResults;