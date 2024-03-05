import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (candidate: Candidate) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
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
      <div className="w-full max-w-sm rounded-lg bg-white p-4">
        <h2 className="mb-4 text-xl font-bold">Add Candidate</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="firstName"
              className="mb-1 block text-sm font-medium"
            >
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="firstName"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={candidate.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="lastName"
              className="mb-1 block text-sm font-medium"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="lastName"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={candidate.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="personal_email"
              id="email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={candidate.personal_email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Add similar input fields for remaining candidate properties */}
          <div className="mt-4 flex justify-end">
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

export default Modal;
