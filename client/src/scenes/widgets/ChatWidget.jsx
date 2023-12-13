import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ChatWindow = ({ open, onClose, children, sx }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={sx}>
            <IconButton onClick={onClose}>
                <CloseIcon />
            </IconButton>
            {children}
        </Drawer>
    )
}

export default ChatWindow;