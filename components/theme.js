
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    typography: {
        fontFamily: 'Bariol, Arial,BlogScript',
    },
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#00339E",
        },
        danger: { main: "#D6281B" },
        secondary: {
            main: '#11cb5f',
        },
        success: { main: "#1BD64F" },
        info: {
            main: "#E9F4FF"
        },
        white: {
            main: "#FFFFFF"
        }
    },
});
export default theme
