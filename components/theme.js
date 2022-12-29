
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
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
        info: {
            main: "#E9F4FF"
        },
        white: {
            main: "#FFFFFF"
        }
    },
});
export default theme
