import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SorotanCarousel from './Carousel';
import SorotanArticle from './Article';
const HomeSorotan=()=>{
    var items = [
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!"
        },
        {
          name: "Random Name #2",
          description: "Hello World!"
        }
      ]
    const article=[
      {title:'Randome 1',description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti harum dolores cumque iure vel eum, quam aut aliquid dicta.",image:'url("/vendor/images/banner2.png")'},
      {title:'Randome 1',description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti harum dolores cumque iure vel eum, quam aut aliquid dicta.",image:'url("/vendor/images/banner2.png")'},
      {title:'Randome 1',description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti harum dolores cumque iure vel eum, quam aut aliquid dicta.",image:'url("/vendor/images/banner2.png")'},
      {title:'Randome 1',description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti harum dolores cumque iure vel eum, quam aut aliquid dicta.",image:'url("/vendor/images/banner2.png")'}
    ]
    return (  <Paper className="home-page-banner">
    <Container>
      <Typography fontWeight="bold" fontFamily="BlogScript" color="white.main" variant='h4' pt={8}>
        SOROTAN <br />
      </Typography>
      <sub style={{ fontFamily: "Bariol", fontSize: 20, color: 'white' }}>Bersama Kita Ciptakan Dunia Dan Lingkungan Yang Lebih Baik</sub>

      <Box pb={1}>
        <Grid container spacing={4} mt={3} >
          <Grid item xs={7}>
            <SorotanCarousel items={items} />
          </Grid>
          <Grid item xs={5}>

            <Grid container  rowSpacing={2} columnSpacing={4}>
             {article.map((e,k)=>{
              return  <SorotanArticle key={k} title={e.title} description={e.description} image={e.image}/> 
             })}
            
             
            </Grid>
          </Grid>

        </Grid>
      </Box>

    </Container>
  </Paper>)
}
export default HomeSorotan