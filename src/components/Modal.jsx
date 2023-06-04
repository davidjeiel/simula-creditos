import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button 
} from '@mui/material';

const Modal = ({ open, onClose, title, content, actions, style }) => {
  const [aberto, setAberto] = useState(false);
  const handleClose = ()=>{
    setAberto(false);
  }
  return (
    <Dialog open={aberto} onClose={onClose} style={style}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
      <DialogActions>
        {actions}
        {/* <button className='btn btn-secondary' variant="secondary" onClick={ handleClose }>
          FECHAR
        </button> */}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;