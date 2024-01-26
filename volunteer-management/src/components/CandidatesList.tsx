import {useEffect, useState} from "react";

import {mockCandidates} from "../assets/mocks.ts";
import Candidate from "./Candidate.tsx";
import Paginate from "./Paginate.tsx";
import {API_CANDIDATES_EP, TOTAL_PER_PAGE} from "../assets/constants.ts";
import axios from "axios";

function CandidatesList() {

  const [candidates, setCandidates] = useState(mockCandidates)

  useEffect(() => {
    axios.get(API_CANDIDATES_EP).then(
        res => {
          const cl = res.data.map(candidateData => {
            console.log()
            return {
              first_name: candidateData.first_name,
              last_name: candidateData.last_name,
              personal_email: candidateData.personal_email,
              phone: candidateData.phone,
              address: candidateData.address,
              birthday: new Date(candidateData.birth_date), // Convert string to Date
              gender: candidateData.gender,
              studies_type: candidateData.studies_type,
              specialization: candidateData.specialization,
              study_group: candidateData.study_group,
              study_language: candidateData.study_language,
              facebook_profile: candidateData.facebook_profile,
              instagram_profile: candidateData.instagram_profile,
              recruitment_status: candidateData.recruitment_status,
              recruitment_campaign_id: candidateData.recruitment_campaign_id
            };
          });
          setCandidates(cl);
        }
    );
  }, [])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPerPage] = useState(TOTAL_PER_PAGE);

  const indexOfLastCandidate = currentPage * totalPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - totalPerPage;
  const currentCandidates = candidates.slice(
      indexOfFirstCandidate,
      indexOfLastCandidate
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
      <div className="col-span-2 space-y-8">
        {currentCandidates.length ? (
            <>
              <ul className="p-4 space-y-5">
                {currentCandidates.map((candidate, index) => (
                    <Candidate index={index} candidate={candidate} />
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
  );
}

export default CandidatesList;