import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";

import CrewService from "../service/CrewService";
import TeamInfoCard from "../components/cards/teamInfoCard/TeamInfoCard";

import Button from "../components/buttons/button/Button";
import PersonCard from "../components/cards/personCard/PersonCard";

const Team = () => {
    const {page,pageCount, nextPage, prevPage} = useContext(AuthContext);
    const [team, setTeam] = useState();

    useEffect(() => {
        setTeam(CrewService.getTeam(page - 1 < 0 ? 0 : page - 1));
    }, [page]);

    return (
        team && (
            <div className="container">
                <div className="row my-2 ">
                    <div className="col-6 d-lg-none">
                        <Button text={"prev"} action={prevPage} show={page > -1}></Button>
                    </div>
                    <div className="col-6 d-lg-none">
                        <Button text={"next"} action={nextPage}  show={pageCount > page}></Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <TeamInfoCard team={team.team} ></TeamInfoCard>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            {team.team.crew.map((person) => (
                                <PersonCard
                                    key={person.uid}
                                    person={person}
                                    className={"col-12 col-lg-2"}
                                ></PersonCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Team;
