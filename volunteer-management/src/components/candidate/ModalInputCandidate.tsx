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
          value={props.input_value}
          onChange={props.handleChange}
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
          value={props.input_value}
          onChange={props.handleChange}
          required
        />
      )}
    </div>
  );
};

export default ModalInputCandidate;
