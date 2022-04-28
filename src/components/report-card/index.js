const ReportCard = ({ report }) => {
    return (
        <section>
            <div>
                <img src={report.user.profileImage} alt="profile" />
                <span>
                    <p>{report.user.name}</p>
                    <p>{report.user.username}</p>
                </span>
            </div>
        </section>
    );
};

export default ReportCard;