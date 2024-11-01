import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const width = {
  small: 400,
  medium: 600,
  large: 800,
};

const ModalCustom = ({ open, handleClose, size, children }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width[size],
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalCustom;
