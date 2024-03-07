import {useState} from "react";
import ModalInputCandidate from "./ModalInputCandidate";
import {
    RECRUITMENT_STATUS,
    SPECIALIZATIONS,
    STUDIES_TYPES,
    STUDY_LANGUAGE,
} from "../../assets/constants";

interface ModalCandidateProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (candidate: Candidate) => void;
}

const ModalCandidate: React.FC<ModalCandidateProps> = ({
                                                           isOpen,
                                                           onClose,
                                                           onSubmit,
                                                       }) => {
    const [candidate, setCandidate] = useState<Candidate>({
        ID: 0,
        first_name: "",
        last_name: "",
        personal_email: "",
        phone: "",
        address: "",
        birthday: new Date(),
        gender: "",
        studies_type: STUDIES_TYPES[0],
        specialization: SPECIALIZATIONS[0],
        study_group: "",
        study_language: STUDY_LANGUAGE[0],
        facebook_profile: "",
        instagram_profile: "",
        recruitment_status: RECRUITMENT_STATUS[0],
        recruitment_campaign_id: 1,
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setCandidate({
            ...candidate,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(candidate);
        onClose();
    };

    return (
        <div
            className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ${!isOpen && "hidden"}`}
        >
            <div className="mx-20 w-full rounded-lg bg-slate-300 p-4">
                <h2 className="mb-4 text-center text-xl font-bold text-black">
                    Add Candidate
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 gap-x-5 gap-y-2"
                >
                    <div className="add-candidate-cell">
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="firstName"
                            input_name="first_name"
                            label_text="First Name"
                            input_value={candidate.first_name}
                        />

                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="lastName"
                            input_name="last_name"
                            label_text="Last Name"
                            input_value={candidate.last_name}
                        />
                    </div>
                    <div className="add-candidate-cell">
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="email"
                            input_name="personal_email"
                            label_text="Email"
                            input_value={candidate.personal_email}
                        />
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="phone"
                            input_name="phone"
                            label_text="Phone"
                            input_value={candidate.phone}
                        />
                    </div>
                    <div className="add-candidate-cell">
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="date"
                            input_id="birthday"
                            input_name="birth_day"
                            label_text="Birthday"
                            input_value={candidate.birthday}
                        />
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="address"
                            input_name="address"
                            label_text="Address"
                            input_value={candidate.address}
                        />
                    </div>
                    <div className="add-candidate-cell">
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="gender"
                            input_name="gender"
                            label_text="Gender"
                            input_value={candidate.gender}
                        />
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="studiesType"
                            input_name="studies_type"
                            label_text="Studies type"
                            input_value={candidate.studies_type}
                            options={STUDIES_TYPES}
                        />
                    </div>
                    <div className="add-candidate-cell">
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="specialization"
                            input_name="specialization"
                            label_text="Specialization"
                            input_value={candidate.specialization}
                            options={SPECIALIZATIONS}
                        />
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="studyGroup"
                            input_name="study_group"
                            label_text="Study group"
                            input_value={candidate.study_group}
                        />
                    </div>
                    <div className="add-candidate-cell">
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="studyLanguage"
                            input_name="study_language"
                            label_text="Study Language"
                            input_value={candidate.study_language}
                            options={STUDY_LANGUAGE}
                        />
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="facebookProfile"
                            input_name="facebook_profile"
                            label_text="Facebook Profile"
                            input_value={candidate.facebook_profile}
                        />
                    </div>
                    <div className="add-candidate-cell">
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="instagramProfile"
                            input_name="instagram_profile"
                            label_text="Instagram Profile"
                            input_value={candidate.instagram_profile}
                        />
                        <ModalInputCandidate
                            handleChange={handleChange}
                            input_type="text"
                            input_id="recruitmentStatus"
                            input_name="recruitment_status"
                            label_text="Recruitment Status"
                            input_value={candidate.recruitment_status}
                            options={RECRUITMENT_STATUS}
                        />
                    </div>

                    <div className="col-span-2 mt-4 flex space-x-10 justify-center">
                        <button
                            type="button"
                            className="btn btn-lg btn-accent text-black"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-lg btn-primary">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalCandidate;
