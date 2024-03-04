import {SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import {API_CANDIDATES_EP} from "../assets/constants.ts";

const ToolsCandidates = () => {
    const [searchCandidate, setSearchCandidate] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            axios.get(API_CANDIDATES_EP + `/${searchCandidate}`).then()

        }, 1000);
        return () => clearTimeout(delayDebounceFn);
    }, [searchCandidate]);

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchCandidate(event.target.value);
    };

    return (
        <>
            <input type="text" placeholder="Search volunteer"
                   value={searchCandidate}
                   className="col-span-1 input input-bordered input-lg w-full max-w-xs"
                   onChange={handleChange}
            />
        </>
    );
};

export default ToolsCandidates;