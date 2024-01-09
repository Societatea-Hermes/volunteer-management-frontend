interface VolunteerProps {
  index: number,
  volunteer: Volunteer,
}

function Volunteer(props: VolunteerProps) {
  return (
    <li key={props.index} className="bg-zinc-200 collapse">
        <input type="checkbox"/>
        <div className="text-xl font-medium text-center collapse-title">
            <p className="text-lg font-bold text-black ">{`${props.volunteer.first_name} ${props.volunteer.last_name}`}</p>
        </div>
        <div className="collapse-content">
            <p>{`Recruitment Status: ${props.volunteer.department}`}</p>
        </div>
    </li>
);
}

export default Volunteer