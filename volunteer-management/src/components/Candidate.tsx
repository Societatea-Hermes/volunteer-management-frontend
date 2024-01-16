import check from '../assets/icons/check.svg';
import rejected from '../assets/icons/rejected.svg';
import pending from '../assets/icons/pending.svg';
import email from '../assets/icons/email.svg'
import phone from '../assets/icons/phone.svg'
import address from '../assets/icons/address.svg'
import birthday from '../assets/icons/birthday.svg'
import gender from '../assets/icons/gender.svg'
import study_type from '../assets/icons/study_type.svg'
import specialization from '../assets/icons/specialization.svg'
import study_group from '../assets/icons/study_group.svg'
import study_language from '../assets/icons/study_language.svg'
import fb from '../assets/icons/fb.svg'
import ig from '../assets/icons/ig.svg'
import './styles/candidate.css'

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

    const key = props.index + " " + props.candidate.first_name + props.candidate.last_name;
    const birthdayString = props.candidate.birthday.getDate() + "/" + props.candidate.birthday.getMonth() + "/" + props.candidate.birthday.getFullYear()

    return (
        <li key={key} className="bg-zinc-200 collapse">
            <input type="checkbox"/>
            <div className="flex text-xl font-medium text-center collapse-title">
                <div className="grid w-20 grid-cols-2">
                    <a className="z-10" target={"_blank"} href={props.candidate.facebook_profile}>
                        <img src={fb} alt={"Facebook link"} />
                    </a>
                    <a className="z-10" href={props.candidate.instagram_profile} target={"_blank"}>
                        <img src={ig} alt={"Insta link"} />
                    </a>
                </div>
                <p className="flex-1 text-xl font-bold text-black ">{`${props.candidate.first_name} ${props.candidate.last_name}`}</p>
                <img className='w-10' src={statusIcon(props.candidate.recruitment_status)} alt="Status" />
            </div>
            <div className="grid grid-cols-2 collapse-content">
                <div className="grid grid-cols-1 col-span-1">
                    <div className="container-details">
                        <img src={email} alt={"Personal email: "} className="details-icon"/>
                        <p className="details-text">{props.candidate.personal_email}</p>
                    </div>
                    <div className="container-details">
                        <img src={phone} alt={"Phone number: "} className="details-icon"/>
                        <p className="details-text">{props.candidate.phone}</p>
                    </div>
                    <div className="container-details">
                        <img src={address} alt={"Address: "} className="details-icon"/>
                        <p className="details-text">{props.candidate.address}</p>
                    </div>
                    <div className="container-details">
                        <img src={birthday} alt={"Birtdhay: "} className="details-icon"/>
                        <p className="details-text">{birthdayString}</p>
                    </div>
                    <div className="container-details">
                        <img src={gender} alt={"Gender: "} className="details-icon"/>
                        <p className="details-text">{props.candidate.gender}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 col-span-1">
                    <div className="container-details">
                        <img src={study_type} alt={"Study type: "} className="details-icon"/>
                        <p className="details-text">{props.candidate.studies_type}</p>
                    </div>
                    <div className="container-details">
                        <img src={specialization} alt={"Specialization: "} className="details-icon"/>
                        <p className="details-text">{props.candidate.specialization}</p>
                    </div>
                    <div className="container-details">
                        <img src={study_group} alt={"Study group: "} className="details-icon"/>
                        <p className="details-text">{props.candidate.study_group}</p>
                    </div>
                    <div className="container-details">
                        <img src={study_language} alt={"Birtdhay: "} className="details-icon"/>
                        <p className="details-text">{props.candidate.study_language}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Candidate;
