import {useEffect, useState} from "react";

import {mockCandidates} from "../assets/mocks.ts";
import Candidate from "./Candidate.tsx";

function CandidatesList() {
    const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates)

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch(API_BASE_URL);
                const data = await response.json();
                setCandidates(data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            }
        };

        fetchCandidates();
    }, []); // Empty dependency array ensures the effect runs only once
    return (
        <ul className="bg-base-100 p-4 rounded shadow-md">
            {candidates.map((candidate, index) => (
                <Candidate index={index} candidate={candidate} />
            ))}
        </ul>
    );
}

export default CandidatesList;