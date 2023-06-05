import React, { useEffect, useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions
} from '@mui/material';

const Modal = ({ 
  open, 
  onClose, 
  title, 
  content, 
  actions, 
  style, 
  classe 
}) => {
  const [aberto, setAberto] = useState(false);

  useEffect(()=>{
    setAberto(open);
  }, [open])
  
  const handleClose = ()=>{
    setAberto(false);
  }
  return (
    <Dialog open={aberto} onClose={onClose} style={style} className={classe}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
      <DialogActions>
        {actions}
        <button 
          className='btn btn-secondary' 
          variant="secondary" 
          onClick={()=>handleClose() }          
        >
          FECHAR
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;