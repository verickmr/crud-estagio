import { Dialog, DialogOverlay, DialogContent } from '@radix-ui/react-dialog';
import "./modal.css"

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogOverlay className='Overlay'/>
      <DialogContent className='Content'>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;