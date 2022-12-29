import { Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const SorotanCarousel = ({ items }) => {
    return (<Carousel
        fullHeightHover={false}
        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                margin: 0,
                borderRadius: 0,
                height: 80
            }
        }}
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosNewIcon />}
        navButtonsAlwaysVisible={true} indicators={false} className='carousel' animation="slide">
        {
            items.map((item, i) => {
                return (
                    <Paper key={i} style={{ backgroundImage: 'url("/vendor/images/banner2.png")', height: 350, backgroundSize: "cover", position: "relative" }}>
                        <Typography variant="h4" style={{ position: 'absolute', bottom: 15, left: 15 }} fontWeight={600} color="white.main" alignContent="bottom">
                            {item.name.toUpperCase()}
                        </Typography>
                    </Paper>

                )
            })
        }
    </Carousel>)
}
export default SorotanCarousel