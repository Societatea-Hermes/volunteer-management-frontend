import {useCallback} from "react";
import { debouce } from "lodash.debounce";

function handleSearch(query: string) {
    console.log(query)
}

const Tools = () => {
    const debouncedHandleSearch = useCallback(debouce(handleSearch, 300), []);
    return (
        <>
            <input type="text" placeholder="Search volunteer"
                   className="col-span-1 input input-bordered input-lg w-full max-w-xs"
                   onChange={(e) => debouncedHandleSearch(e.target.value)} />

        </>
    );
};

export default Tools;