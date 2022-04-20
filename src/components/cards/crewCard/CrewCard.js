import Utils from "../../../utils/Utils";
import "./CrewCard.scss";

const CrewCard = (props) => {
  const { person } = props;

  return (
    <div key={person.uid} className="col-4 col-lg-2 ">
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
        <div className="text-uppercase one-line">{person.team}</div>
        <div className="text-uppercase one-line">{person.title}</div>
        <div>{Utils.totalExperienceCalc(person.jobStartDate)}</div>
      </div>
    </div>
  );
};

export default CrewCard
