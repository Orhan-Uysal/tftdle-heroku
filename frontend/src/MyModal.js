import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import './MyModal.css';


function MyModal(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div style={{
            margin: "auto", width: "650px", justifyContent: "center", alignItems: "center", display: "flex"

        }}>
            <IconButton onClick={toggle}
                variant="contained"
                style={{ }} >
                <InfoIcon style={{color:"white", width:"50px", height:"50px"}} />
            </IconButton>

            <Modal isOpen={modal} toggle={toggle} {...args} className="my-modal"
            style={{
                  color:"white"
              }}>
                <ModalHeader toggle={toggle}>Info</ModalHeader>
                <ModalBody>
                <p>Tftdle was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.</p>
                <p>If you have any suggestions or come across any bugs you can drop me an email at <a href="mailto: tftdle@gmail.com">tftdle@gmail.com</a></p>
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter> */}
            </Modal>
        </div>
    );
}

export default MyModal;