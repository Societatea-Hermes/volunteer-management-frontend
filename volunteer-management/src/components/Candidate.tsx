
interface CandidateProps {
    index: number,
    candidate: Candidate,
}

const Candidate = (props: CandidateProps) => {
    return (
        <li key={props.index} className="collapse bg-white">
            <input type="checkbox"/>
            <div className="collapse-title text-xl font-medium">
                <p className="text-lg font-bold">{`${props.candidate.first_name} ${props.candidate.last_name}`}</p>
            </div>
            <div className="collapse-content">
                <p>{`Recruitment Status: ${props.candidate.recruitment_status}`}</p>
            </div>
        </li>
    );
};

export default Candidate;