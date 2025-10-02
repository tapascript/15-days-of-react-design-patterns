import { useState } from "react";
// import Modal from "./messy/Modal";
import Modal from "./with-pattern/modal/Modal";
import AccordionDemo from "./with-pattern/accordion/AccordionDemo";
import "./App.css";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col items-center">
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Modal.Header>
                    <h2>Welcome!</h2>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        This is a modal built with the Compound Component
                        pattern.
                    </p>
                    <AccordionDemo />
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                    <button onClick={() => alert("Action performed!")}>
                        Do Action
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default App;
