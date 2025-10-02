

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {children}
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
}

function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
}

function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
}

function ModalFooter({ children }) {
  return <div className="modal-footer">{children}</div>;
}

// Attach subcomponents
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
