import {useEffect, useState} from "react";

interface ModalInputCandidateProps {
    input_name: string;
    input_id: string;
    input_value: any;
    input_type: string;
    label_text: string;
    options?: string[];
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
}

const ModalInputCandidate = (props: ModalInputCandidateProps) => {
    const [inputValue, setInputValue] = useState(props.options ? props.options[0] : props.input_value);
    useEffect(() => {
        if (props.input_type === 'date') {
            const formattedDate = props.input_value?.toLocaleDateString('ro-RO'); // Example format
            setInputValue(formattedDate);
        }

    }, [props.input_value, props.input_type]);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputValue(event.target.value);
        props.handleChange(event);
    };

    return (
        <div>
            <label
                htmlFor={props.input_id}
                className="mb-1 block text-center font-mono text-sm font-semibold text-black"
            >
                {props.label_text}
            </label>
            {props.options ? (
                <select
                    name={props.input_name}
                    id={props.input_id}
                    className="add-candidate-select"
                    value={inputValue}
                    onChange={handleChange}
                    required
                >
                    {props.options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={props.input_type}
                    name={props.input_name}
                    id={props.input_id}
                    className="add-candidate-input"
                    value={inputValue}
                    onChange={handleChange}
                    required
                />
            )}
        </div>
    );
};

export default ModalInputCandidate;
