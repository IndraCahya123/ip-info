import { Modal} from 'react-bootstrap';
import Map from './Map';

function ModalMaps(props) {
    return (
        <Modal
        show={props.showMaps}
        onHide={() => props.setShowMaps(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
        >
            <Modal.Body style={{ height: "100%" }}>
                <Map latitude={props.data.latitude} longitude={props.data.longitude} data={props.data} setShowMaps={props.setShowMaps} />
            </Modal.Body>
        </Modal>
    );
}

export default ModalMaps;