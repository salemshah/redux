import React from 'react';
import {connect} from "react-redux"
import {MODAL_CLOSE} from "./Redux/Redux-Actions/Action"
import {Button, Modal} from 'react-bootstrap'
import PropTypes from 'prop-types';

const ModalComponent = (props) => {
    //const [showModal, setShowModal] = React.useState(false)
    //console.log(props)
    const {show, closeModal, text, name} = props

    return (
        <Modal
            show={show}
            onHide={closeModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*<h4>Centered Modal</h4>*/}
                <p>
                    {text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

ModalComponent.propTypes = {
    show: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired
};

const mapStateToProps = ({modalState: {show, name, text}}) => {
    return {show, name, text}
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch({type: MODAL_CLOSE})
    }
}

// connect function make connection with component ModalComponent
export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);

