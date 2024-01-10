interface PaginateProps {
  totalPerPage: number;
  totalEntities: number;
  currentActive: number;
  paginate: (page: number) => void;
}

function Paginate(props: PaginateProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalEntities / props.totalPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <ul className="join">
        {pageNumbers.map((number) => (
            number === props.currentActive ? (
                <li key={number + " page"} className="join-item btn btn-lg hover:bg-gray-800" onClick={() => {props.paginate(number)}}>
                  {number}
                </li>
            )  : (
                <li key={number} className="join-item btn btn-lg hover:bg-gray-800 btn-active" onClick={() => {props.paginate(number)}}>
                  {number}
                </li>
            )
        ))}
      </ul>
  );
}

export default Paginate;