
import Modal from "react-modal"; // Import the modal library if you choose to use one

const BorrowModal = ({ showModal, handleClose, handleFormSubmit, userEmail, returnDate, setReturnDate }) => {


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',  // Set your custom width here
            height: '60%', // Set your custom height here
        },
    };

    return (
        <Modal isOpen={showModal} onRequestClose={handleClose} style={customStyles}>
            <form className="" onSubmit={handleFormSubmit}>
                <div className="text-center mb-5">

                    <label>
                        Return Date:
                        <input className=""
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                    </label>
                </div>

                {/* Other form fields can be added here */}

                <div className="text-center"> <button className="px-5 py-3 rounded-lg bg-btn-bg text-white " type="submit">Submit</button></div>
            </form>
        </Modal>
    );
};

export default BorrowModal;
