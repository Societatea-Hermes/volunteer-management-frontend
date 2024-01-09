import { useEffect, useState } from "react";

import { mockCandidates } from "../assets/mocks.ts";
import Candidate from "./Candidate.tsx";
import Paginate from "./Paginate.tsx";
import { API_BASE_URL, TOTAL_PER_PAGE } from "../assets/constants.ts";

function CandidatesList() {
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

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
