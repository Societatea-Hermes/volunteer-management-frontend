import check from '../assets/icons/check.svg';
import rejected from '../assets/icons/rejected.svg';
import pending from '../assets/icons/pending.svg';

interface CandidateProps {
    index: number,
    candidate: Candidate,
}

const Candidate = (props: CandidateProps) => {
    const statusIcon = (status: string) => {
        switch (status) {
            case 'Accepted':
                return check;
            case 'Rejected':
                return rejected;
            case 'Pending':
                return pending;
            default:
                return pending;
        }
    };

    return (
        <li key={props.index} className="bg-zinc-200 collapse">
            <input type="checkbox"/>
            <div className="flex text-xl font-medium text-center collapse-title">
                <p className="flex-1 text-xl font-bold text-black ">{`${props.candidate.first_name} ${props.candidate.last_name}`}</p>
                <div className='w-10'>
                    <img src={statusIcon(props.candidate.recruitment_status)} alt="Status" />
                </div>
            </div>
            <div className="collapse-content">
                <p>{`Recruitment Status: ${props.candidate.recruitment_status}`}</p>
            </div>
        </li>
    );
};

export default Candidate;