import { useState } from "react";
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
    studies_type: "",
    specialization: "",
    study_group: "",
    study_language: "",
    facebook_profile: "",
    instagram_profile: "",
    recruitment_status: "",
    recruitment_campaign_id: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    console.log(event.target.name);
    console.log(event.target.value);
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
      <div className="mx-20 w-full rounded-lg bg-white p-4">
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

          <div className="col-span-2 mt-4 flex justify-center">
            <button
              type="button"
              className="btn btn-sm btn-outline mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-sm btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCandidate;
