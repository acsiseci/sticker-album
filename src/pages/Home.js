import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";

import Button from "../components/buttons/button/Button";
import CrewModal from "../components/modals/crewModal/CrewModal";
import StickerModal from "../components/modals/stickerModal/StickerModal";

import Utils from "../utils/Utils";
import CrewService from "../service/CrewService";
import HistoryService from "../service/HistoryService";

const Home = () => {
  const [stickerModalVisible, setStickerModalVisible] = useState(false);
  const [crewModalVisible, setCrewModalVisible] = useState(false);
  const [historyButton, setHistoryButton] = useState(true);
  const [activeCardCount, setActiveCardCount] = useState(3);
  const [crewList, setCrewList] = useState([]);

  const {nextPage} = useContext(AuthContext);

  useEffect(() => {
    checkHistory();
  }, []);

  const checkHistory = () => {
    let now = Utils.nowDate();
    let history = HistoryService.getCardHistory();
    if (history !== null) {
      if (history.cardCount == 3 && history.date == now) {
        setHistoryButton(false);
      }
      if (history.cardCount < 3) {
        setActiveCardCount(activeCardCount - 1);
      }
    }
  };
  const openCrewModal = () => {
    let tempCrew = [];
    setStickerModalVisible(false);
    let crews = CrewService.getCrew();
    crews.teams.forEach((_team) => {
      _team.team.crew.forEach((_crew) => {
        if (_crew.locked && tempCrew.length < 6) {
          _crew.locked = false;
          _crew.team = _team.team.name;
          tempCrew.push(_crew);
        }
      });
    });
    CrewService.setOpenCard(crews);
    setCrewList(tempCrew);
    setCrewModalVisible(true);
  };
  const closeCrewModal = () => {
    setCrewModalVisible(false);
    setStickerModalVisible(false);
    checkHistory();
  };

  return (
      <div className="row">
        <div className="col-3"/>
        <div className="col-6 vh-100 d-flex justify-content-center align-items-center">
          <div className="w-100">
            <div className="p-5 bg-warning text-white">
              <div className="fw-bold h1">TEAM</div>
              <div className="h2">Sticker Album</div>
            </div>
            <Button
                text={"Get Your Daily Sticker"}
                action={() => setStickerModalVisible(true)}
                show={historyButton}
            ></Button>
            <div className="d-lg-none">
              <Button text={" Open Sticker Album"} action={nextPage}></Button>
            </div>
          </div>
        </div>
        <div className="col-3"/>
        <StickerModal
            show={stickerModalVisible}
            close={() => setStickerModalVisible(false)}
            buttonCount={activeCardCount}
            openCrewModal={openCrewModal}
        ></StickerModal>
        <CrewModal
            show={crewModalVisible}
            close={closeCrewModal}
            crewList={crewList}
        ></CrewModal>
      </div>
  );
};

export default Home;
