import Utils from "../../../utils/Utils";
import HistoryService from "../../../service/HistoryService";
import Button from "../../buttons/button/Button";

const StickerCard = (props) => {
  const { openCrewModal, index } = props;

  const openCard = () => {
    let now = Utils.nowDate();
    let history = HistoryService.getCardHistory();

    if (history !== null) {
      if (history.date == now) {
        if (history.cardCount < 3) {
          history.cardCount = history.cardCount + 1;
          localStorage.setItem("history", JSON.stringify(history));
        }
      } else {
        let newHistory = { date: now, cardCount: 1 };
        localStorage.setItem("history", JSON.stringify(newHistory));
      }
    } else {
      let newHistory = { date: now, cardCount: 1 };
      localStorage.setItem("history", JSON.stringify(newHistory));
    }
    openCrewModal(true);
  };

  return (
    <div key={index} className="col">
      <div className="sticker d-flex flex-column justify-content-between ">
        <div className="h1 sticker-title">Sticker Set</div>
        <Button text={"Open"} action={openCard}></Button>
      </div>
    </div>
  );
};

export default StickerCard;
