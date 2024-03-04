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
import {useState} from "react";
import axios from "axios";
import {API_CANDIDATES_EP} from "../assets/constants.ts";
// import { useDebounce } from 'react-use'; // Import useDebounce

interface CandidateProps {
    index: number,
    candidate: Candidate,
    onCandidateDeleted: () => void;
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
    const [candidateData, setCandidateData] = useState(props.candidate);
    const [isUpdating, setIsUpdating] = useState(false);
    const [hasChanged, setHasChanged] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCandidateData({ ...candidateData, [name]: value });
        setHasChanged(true);
    };

    const transformDateToFormatedString = (date: Date) => {
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    const handleUpdateCandidate = () => {
        setIsUpdating(true);
        // Assuming you have an API endpoint for updating candidate information
        axios.put(API_CANDIDATES_EP, candidateData)
            .then(response => {
                console.log('Candidate updated successfully:', response.data);
                setIsUpdating(false);
                setHasChanged(false); // Reset hasChanged state after successful update
            })
            .catch(error => {
                console.error('Error updating candidate:', error);
                setIsUpdating(false);
            });
    };

    const handleDeleteCandidate = () => {
        axios.delete(`${API_CANDIDATES_EP}/${candidateData.personal_email}`)
            .then(() => {
                props.onCandidateDeleted();
            })
            .catch(error => {
                console.error('Error deleting candidate:', error);
                setIsUpdating(false);
            });
    }

    const key = props.index + " " + candidateData.first_name + candidateData.last_name;

    return (
        <li key={key} className="bg-zinc-200 collapse">
            <input type="checkbox"/>
            <div className="flex text-xl font-medium text-center collapse-title">
                <div className="grid w-20 grid-cols-2">
                    <a className="z-10" target={"_blank"} href={candidateData.facebook_profile}>
                        <img src={fb} alt={"Facebook link"}/>
                    </a>
                    <a className="z-10" href={candidateData.instagram_profile} target={"_blank"}>
                        <img src={ig} alt={"Insta link"}/>
                    </a>
                </div>
                <p className="flex-1 text-xl font-bold text-black ">{`${candidateData.first_name} ${candidateData.last_name}`}</p>
                <img className='w-10' src={statusIcon(candidateData.recruitment_status)} alt="Status"/>
            </div>
            <div className="grid grid-cols-2 collapse-content">
                <div className="grid grid-cols-1 col-span-1">
                    <div className="container-details">
                        <img src={email} alt={"Personal email: "} className="details-icon"/>
                        <input
                            type="text"
                            name="personal_email"
                            className="candidate-details-input"
                            value={candidateData.personal_email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="container-details">
                        <img src={phone} alt={"Phone number: "} className="details-icon"/>
                        <input
                            type="text"
                            name="phone"
                            className="candidate-details-input"
                            value={candidateData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="container-details">
                        <img src={address} alt={"Address: "} className="details-icon"/>
                        <input
                            type="text"
                            name="address"
                            className="candidate-details-input"
                            value={candidateData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="container-details">
                        <img src={birthday} alt={"Birtdhay: "} className="details-icon"/>
                        <input
                            type="text"
                            name="birthday"
                            className="candidate-details-input"
                            value={transformDateToFormatedString(candidateData.birthday)}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="container-details">
                        <img src={gender} alt={"Gender: "} className="details-icon"/>
                        <input
                            type="text"
                            name="gender"
                            className="candidate-details-input"
                            value={candidateData.gender}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 col-span-1">
                    <div className="container-details">
                        <img src={study_type} alt={"Study type: "} className="details-icon"/>
                        <input
                            type="text"
                            name="studies_type"
                            className="candidate-details-input"
                            value={candidateData.studies_type}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="container-details">
                        <img src={specialization} alt={"Specialization: "} className="details-icon"/>
                        <input
                            type="text"
                            name="specialization"
                            className="candidate-details-input"
                            value={candidateData.specialization}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="container-details">
                        <img src={study_group} alt={"Study group: "} className="details-icon"/>
                        <input
                            type="text"
                            name="study_group"
                            className="candidate-details-input"
                            value={candidateData.study_group}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="container-details">
                        <img src={study_language} alt={"Language: "} className="details-icon"/>
                        <input
                            type="text"
                            name="study_language"
                            className="candidate-details-input"
                            value={candidateData.study_language}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10 col-span-2">
                    <button
                        className="update-button col-span-1 self-center text-black font-bold border-2 border-black mt-5 hover:bg-red-800 hover:text-white"
                        onClick={handleDeleteCandidate}
                    >
                        Delete
                    </button>
                    {hasChanged && (
                        <button
                            className="update-button col-span-1 self-center text-black font-bold border-2 border-black mt-5 hover:bg-blue-400"
                            disabled={isUpdating}
                            onClick={handleUpdateCandidate}
                        >
                            {isUpdating ? 'Updating...' : 'Update'}
                        </button>
                    )}
                </div>
            </div>
        </li>
    );
};

export default Candidate;
