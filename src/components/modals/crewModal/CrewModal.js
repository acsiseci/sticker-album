import { Modal } from "react-bootstrap";
import Button from "../../buttons/button/Button";
import CrewCard from "../../cards/crewCard/CrewCard";

const CrewModal = (props) => {
  const { show, close, crewList } = props;

  return (
    <Modal
      show={show}
      onHide={close}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="text-uppercase h4 text-center">
          Sticker Set Has Opened you have 6 new stickers
        </div>
        <div className="row">
          {crewList.map((person) => (
            <CrewCard key={person.uid} person={person} />
          ))}
        </div>
        <Button text={"Paste to Your Album"} action={close}></Button>
      </Modal.Body>
    </Modal>
  );
};

export default CrewModal;
