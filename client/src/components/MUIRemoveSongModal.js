import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIRemoveSongModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleConfirmRemoveSong () {
        store.addRemoveSongTransaction();
    }

    function handleCancelRemoveSong () {
        store.hideModals();
    }
    
    let modalClass = "modal";
    if (store.isRemoveSongModalOpen()) {
        modalClass += " is-visible";
    }
    let songTitle = "";
    if (store.currentSong) {
        songTitle = store.currentSong.title;
    }

    return (
        <Modal
            open={store.currentModal === "REMOVE_SONG"}
        >
            <Box sx={style}>
            <Grid container spacing={1}>
            <Grid item xs={12}>
            <Typography                        
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block' } }}                        
                    >
                        Remove {songTitle}?
                        </Typography>
                </Grid>
                <Grid item xs={12}>
                <Divider />
                </Grid>
                <Grid item xs={12}>
                <Typography                        
                        variant="body1"
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block' } }}                        
                    >
                        Are you sure you wish to permanently remove <span style={{fontWeight: "bold"}}>{songTitle}</span> from the playlist?
                        </Typography>
                </Grid>
                
                <Grid item xs={12}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={handleConfirmRemoveSong}>Confirm</Button>
                    <Button onClick={handleCancelRemoveSong}>Cancel</Button>
                </ButtonGroup>
                {/* <Input type="button" value="Confirm" onClick={handleConfirmEditSong}/> */}
                </Grid>
                {/* <Grid item xs={6}>
                <Input type="button" value="Cancel" onClick={handleCancelEditSong}/>
                </Grid> */}
            </Grid>
            {/* <div
        id="remove-song-modal"
        className={modalClass}
        data-animation="slideInOutLeft">
        <div className="modal-root" id='verify-remove-song-root'>
            <div className="modal-north">
                Remove {songTitle}?
            </div>
            <div className="modal-center">
                <div className="modal-center-content">
                    Are you sure you wish to permanently remove {songTitle} from the playlist?
                </div>
            </div>
            <div className="modal-south">
                <input type="button" 
                    id="remove-song-confirm-button" 
                    className="modal-button" 
                    onClick={handleConfirmRemoveSong} 
                    value='Confirm' />
                <input 
                    type="button" 
                    id="remove-song-cancel-button" 
                    className="modal-button" 
                    onClick={handleCancelRemoveSong} 
                    value='Cancel' />
            </div>
        </div>
    </div> */}
            </Box>
        </Modal>
    );
}