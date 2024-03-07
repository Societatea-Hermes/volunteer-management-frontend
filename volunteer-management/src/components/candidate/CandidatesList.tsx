import {SetStateAction, useEffect, useState} from "react";

import {mockCandidates} from "../../assets/mocks.ts";
import Candidate from "./Candidate.tsx";
import Paginate from "../Paginate.tsx";
import {API_CANDIDATES_EP, TOTAL_PER_PAGE} from "../../assets/constants.ts";
import axios from "axios";
import ModalCandidate from "./ModalCandidate.tsx";

function CandidatesList() {
    const [searchCandidate, setSearchCandidate] = useState("");
    const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);
    const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
    const [changedList, setChangedList] = useState<boolean>(false);

    // Fetch candidates
    useEffect(() => {
        axios.get(API_CANDIDATES_EP).then((res) => {
            const cl: Candidate[] = res.data.map((candidateData: any) => {
                return {
                    ID: candidateData.ID,
                    first_name: candidateData.first_name,
                    last_name: candidateData.last_name,
                    personal_email: candidateData.personal_email,
                    phone: candidateData.phone,
                    address: candidateData.address,
                    birthday: new Date(candidateData.birth_date),
                    gender: candidateData.gender,
                    studies_type: candidateData.studies_type,
                    specialization: candidateData.specialization,
                    study_group: candidateData.study_group,
                    study_language: candidateData.study_language,
                    facebook_profile: candidateData.facebook_profile,
                    instagram_profile: candidateData.instagram_profile,
                    recruitment_status: candidateData.recruitment_status,
                    recruitment_campaign_id: candidateData.recruitment_campaign_id,
                };
            });
            setCandidates(cl);
            setFilteredCandidates(cl);
        });
        setChangedList(false);
    }, [changedList]);

    // Filter existing candidates
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            // Filter candidates based on searchCandidate value
            const filtered: Candidate[] = candidates.filter((candidate) => {
                const fullName =
                    `${candidate.first_name} ${candidate.last_name}`.toLowerCase();
                return fullName.includes(searchCandidate.toLowerCase());
            });
            setFilteredCandidates(filtered);
        }, 1000);
        return () => clearTimeout(delayDebounceFn);
    }, [searchCandidate, candidates]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPerPage] = useState(TOTAL_PER_PAGE);

    const indexOfLastCandidate = currentPage * totalPerPage;
    const indexOfFirstCandidate = indexOfLastCandidate - totalPerPage;
    const currentCandidates = filteredCandidates.slice(
        indexOfFirstCandidate,
        indexOfLastCandidate,
    );

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setSearchCandidate(event.target.value);
    };

    const handleCandidateDelete = () => {
        setChangedList(true);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleSubmitAddCandidate = async (candidate: Candidate) => {
        try {
            const response = await axios.post(API_CANDIDATES_EP, candidate);
            console.log("Candidate created:", response.data);
        } catch (error) {
            console.error("Error creating candidate:", error);
        }
    };

    return (
        <>
            <div className="col-span-2 space-y-8 p-4">
                {currentCandidates.length ? (
                    <>
                        <ul className="space-y-5">
                            {currentCandidates.map((candidate, index) => (
                                <Candidate
                                    key={candidate.first_name + candidate.phone}
                                    index={index}
                                    candidate={candidate}
                                    onCandidateDeleted={handleCandidateDelete}
                                />
                            ))}
                        </ul>

                        <div className="flex justify-center">
                            <Paginate
                                totalPerPage={totalPerPage}
                                totalEntities={candidates.length}
                                currentActive={currentPage}
                                paginate={paginate}
                            />
                        </div>
                    </>
                ) : (
                    <span className="loading loading-spinner loading-lg"></span>
                )}
            </div>

            <div className="col-span-1 flex flex-col space-y-10 p-4">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search candidate"
                        value={searchCandidate}
                        className="grow bg-transparent"
                        onChange={handleChange}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>

                <button onClick={handleOpenModal} className="btn btn-lg btn-warning">
                    Add candidate
                </button>
                {isOpen && (
                    <ModalCandidate
                        onClose={handleCloseModal}
                        onSubmit={handleSubmitAddCandidate}
                        isOpen={isOpen}
                    ></ModalCandidate>
                )}
            </div>
        </>
    );
}

export default CandidatesList;
