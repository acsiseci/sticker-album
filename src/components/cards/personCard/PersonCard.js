import Utils from "../../../utils/Utils";

const PersonCard = (props) => {
  const { person, className } = props;

  return (
    <div key={person.uid} className={className}>
      <div className="shadow p-2 mb-4 rounded bg-white">
        <div>
          <img
            className={
              person.locked
                ? "blur img-fluid rounded mx-auto d-block"
                : "img-fluid rounded mx-auto d-block"
            }
            src={person.avatar}
            alt={person.first_name}
          />
        </div>
        <div className="text-uppercase one-line">{person.first_name}</div>
        <div className="text-uppercase one-line">{person.title}</div>
        <div>{Utils.totalExperienceCalc(person.jobStartDate)}</div>
      </div>
    </div>
  );
};

export default PersonCard;
