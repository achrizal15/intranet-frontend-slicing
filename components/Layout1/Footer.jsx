import { Box, Paper, Typography } from '@mui/material';
const Footer =()=>{
    return (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "primary.main" ,fontWeight:800,color:"white.main"}} pt={2} height={50}  style={{textAlign:'center'}}>
        <Typography  variant='p'>
          All right reserved. Copyright © 2022
        </Typography>
      </Box>
    )
}
export default Footer