const TeamInfoCard = (props) => {
  const {team} = props
  console.log(team)
  return (
    <div className="row">
      <div className="col-12">
        <div className=" shadow p-2 mb-4 rounded bg-white">
          <div className="row">
            <div className="col-3">
              <img
                  className="img-fluid"
                  src={team.logo}
                  alt={team.name}
              />

            </div>
            <div className="col-9">
              <div className="h2 ">{team.name}</div>
              <div className="h3">{team.title}</div>
              <div className="">{team.comment}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamInfoCard;
