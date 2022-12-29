import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
const SorotanArticle = ({image,title,description}) => {
    return (
        <Grid item xs={6}>
            <Paper style={{ backgroundImage: image, height: 120, backgroundSize: "cover", position: "relative", overflowText: 'ellipsis' }} >
                <Typography variant="span" style={{ position: 'absolute', bottom: 15, left: 15, paddingRight: 25 }} className="one-line-ellipsis uppercase" width="100%" fontWeight={800} color="white.main" alignContent="bottom">
                  {title}
                </Typography>
            </Paper>
            <Typography color="white.main" variant="span" width="100%" className='two-line-ellipsis' pt={1} style={{ fontSize: "12px" }} >
              {description}
            </Typography>

        </Grid>
    )
}
export default SorotanArticle