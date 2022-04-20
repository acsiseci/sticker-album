import { Modal } from "react-bootstrap";
import "./StickerModal.scss";
import StickerCard from "../../cards/stickerCard/StickerCard";

const StickerModal = (props) => {
  const { show, close, buttonCount, openCrewModal } = props;

  return (
    <Modal
      show={show}
      onHide={close}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="sticker-modal-bg d-flex flex-column justify-content-center ">
        <div className="text-white h3 text-center mb-5">
          Daily Sticker Sets You Have {buttonCount} Sticker Sets To Open
        </div>
        <div className="row ">
          {Array.from(Array(buttonCount), (e, i) => {
            return <StickerCard key={i} openCrewModal={openCrewModal} />;
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default StickerModal
