import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Backdrop } from './AgreementModal.styled';

const modalRoot = document.querySelector('#modal-root');

class AgreementModal extends Component {
  render() {
    const { id, children } = this.props;
    return createPortal(
      <Backdrop id={id}>
        <Modal>{children}</Modal>
      </Backdrop>,
      modalRoot
    );
  }
}

AgreementModal.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default AgreementModal;
