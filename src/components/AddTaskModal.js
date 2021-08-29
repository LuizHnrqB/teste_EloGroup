import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddTaskForm from './AddTaskForm'
import './AddTaskForm.css';

const AddTaksModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle} style={{ marginLeft: '100px' }} > {buttonLabel}</Button>
            <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <AddTaskForm formNum={this.props.id} onAdd={this.props.onAdd} />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default AddTaksModal;
