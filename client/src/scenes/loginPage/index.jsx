import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyForm from "./Form";


const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
    const navigate = useNavigate();
    const primaryLight = theme.palette.primary.light

    return (
        <Box 
            width="100%" 
            backgroundColor={theme.palette.background.alt} 
            p="1rem 6%" 
            textAlign="center">
            <Box>
                <Typography
                    fontWeight="bold"
                    fontSize="32px"
                    color="primary"
                >
                    Sociopedia
                </Typography>
            </Box>
            <Box
                width={isNonMobileScreen ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography>
                    Welcome to Sociopedia, the Social Media for Sociopaths
                </Typography>
                <MyForm />
                
            </Box>
        </Box>
    )
}

export default LoginPage;