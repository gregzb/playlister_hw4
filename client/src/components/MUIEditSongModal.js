import { useContext, useState } from 'react'
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

export default function MUIEditSongModal() {
    const { store } = useContext(GlobalStoreContext);
    const [ title, setTitle ] = useState(store.currentSong.title);
    const [ artist, setArtist ] = useState(store.currentSong.artist);
    const [ youTubeId, setYouTubeId ] = useState(store.currentSong.youTubeId);

    function handleConfirmEditSong() {
        let newSongData = {
            title: title,
            artist: artist,
            youTubeId: youTubeId
        };
        store.addUpdateSongTransaction(store.currentSongIndex, newSongData);        
    }

    function handleCancelEditSong() {
        store.hideModals();
    }

    function handleUpdateTitle(event) {
        setTitle(event.target.value);
    }

    function handleUpdateArtist(event) {
        setArtist(event.target.value);
    }

    function handleUpdateYouTubeId(event) {
        setYouTubeId(event.target.value);
    }

    return (
        <Modal
            open={store.currentModal === "EDIT_SONG"}
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
                        Edit Song
                        </Typography>
                </Grid>
                <Grid item xs={12}>
                <Divider />
                </Grid>
                <Grid item xs={4}>
                    Title:
                </Grid>
                <Grid item xs={8}>
                <Input type="text" defaultValue={title} onChange={handleUpdateTitle}/>
                </Grid>
                <Grid item xs={4}>
                    Artist:
                </Grid>
                <Grid item xs={8}>
                <Input type="text" defaultValue={artist} onChange={handleUpdateArtist}/>
                </Grid>
                <Grid item xs={4}>
                    YouTube Id:
                </Grid>
                <Grid item xs={8}>
                <Input type="text" defaultValue={youTubeId} onChange={handleUpdateYouTubeId}/>
                </Grid>
                
                <Grid item xs={12}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={handleConfirmEditSong}>Confirm</Button>
                    <Button onClick={handleCancelEditSong}>Cancel</Button>
                </ButtonGroup>
                {/* <Input type="button" value="Confirm" onClick={handleConfirmEditSong}/> */}
                </Grid>
                {/* <Grid item xs={6}>
                <Input type="button" value="Cancel" onClick={handleCancelEditSong}/>
                </Grid> */}
            </Grid>
            {/* <div
            id="edit-song-modal"
            data-animation="slideInOutLeft">
            <div
                id='edit-song-root'
                >
                <div
                    id="edit-song-modal-header"
                    >Edit Song</div>
                <div
                    id="edit-song-modal-content"
                    >
                    <div id="title-prompt" className="modal-prompt">Title:</div>
                    <input 
                        id="edit-song-modal-title-textfield" 
                        className='modal-textfield' 
                        type="text" 
                        defaultValue={title} 
                        onChange={handleUpdateTitle} />
                    <div id="artist-prompt" className="modal-prompt">Artist:</div>
                    <input 
                        id="edit-song-modal-artist-textfield" 
                        className='modal-textfield' 
                        type="text" 
                        defaultValue={artist} 
                        onChange={handleUpdateArtist} />
                    <div id="you-tube-id-prompt" className="modal-prompt">You Tube Id:</div>
                    <input 
                        id="edit-song-modal-youTubeId-textfield" 
                        className='modal-textfield' 
                        type="text" 
                        defaultValue={youTubeId} 
                        onChange={handleUpdateYouTubeId} />
                </div>
                <div className="modal-south">
                    <input 
                        type="button" 
                        id="edit-song-confirm-button" 
                        className="modal-button" 
                        value='Confirm' 
                        onClick={handleConfirmEditSong} />
                    <input 
                        type="button" 
                        id="edit-song-cancel-button" 
                        className="modal-button" 
                        value='Cancel' 
                        onClick={handleCancelEditSong} />
                </div>
            </div>
        </div> */}
            </Box>
        </Modal>
    );
}