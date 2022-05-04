import { useParams } from "react-router-dom";

const Report = () => {
    const { reportId } = useParams();
    return (
        <h1>{reportId}</h1>
    );
};

export default Report;