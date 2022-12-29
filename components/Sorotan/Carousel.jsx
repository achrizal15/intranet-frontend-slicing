import { Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
const SorotanCarousel=({items})=>{
  return (  <Carousel navButtonsAlwaysVisible={true} indicators={false} className='carousel' animation="slide">
  {
    items.map((item, i) => {
      return (
        <Paper key={i} style={{backgroundImage:'url("/vendor/images/banner2.png")',height:350,backgroundSize:"cover",position:"relative"}}>
          <Typography variant="h4" style={{position:'absolute',bottom:15, left:15}} fontWeight={600} color="white.main" alignContent="bottom">
            {item.name.toUpperCase()}
          </Typography>
        </Paper>
     
      )
    })
  }
</Carousel>)
}
export default SorotanCarousel