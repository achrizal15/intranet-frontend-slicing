import { Paper, Typography } from '@mui/material';
import Layout from '../components/Layout1/Layout';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import SorotanCarousel from '../components/Sorotan/Carousel';
function Index() {
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

  return (
    <Layout title="Danone Home">
      <Paper className="home-page-banner">
        <Container>
          <Typography fontWeight="bold" fontFamily="BlogScript" color="white.main" variant='h4' pt={8}>
            SOROTAN <br />
          </Typography>
          <sub style={{ fontFamily: "Bariol", fontSize: 20, color: 'white' }}>Bersama Kita Ciptakan Dunia Dan Lingkungan Yang Lebih Baik</sub>

          <Box>
            <Grid container spacing={4} mt={3}>
              <Grid item xs={7}>
                <SorotanCarousel items={items} />
              </Grid>
              <Grid item xs={5}>

                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Paper style={{ backgroundImage: 'url("/vendor/images/banner2.png")', height: 150, backgroundSize: "cover", position: "relative" ,overflowText:'ellipsis'}} >
                      <Typography variant="span" style={{ position: 'absolute', bottom: 15, left: 15,paddingRight:25 }} className="one-line-ellipsis uppercase" width="100%" fontWeight={800} color="white.main" alignContent="bottom">
                        Danone article nomor 12 dan seterusnya
                      </Typography>
                    </Paper>
                    <Typography color="white.main" variant="span" width="100%" className='two-line-ellipsis' pt={1} style={{fontSize:"12px"}} >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti harum dolores cumque iure vel eum, quam aut aliquid dicta.
                    <span>Read More</span>
                    </Typography>
                  
                  </Grid>
                  <Grid item xs={6}>
                       <Paper style={{ backgroundImage: 'url("/vendor/images/banner2.png")', height: 150, backgroundSize: "cover", position: "relative" ,overflowText:'ellipsis'}} >
                      <Typography variant="span" style={{ position: 'absolute', bottom: 15, left: 15,paddingRight:25 }} className="one-line-ellipsis uppercase" width="100%" fontWeight={800} color="white.main" alignContent="bottom">
                        Danone article nomor 12 dan seterusnya
                      </Typography>
                    </Paper>
                    <Typography color="white.main" variant="span" width="100%" className='two-line-ellipsis' pt={1} style={{fontSize:"12px"}} >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti harum dolores cumque iure vel eum, quam aut aliquid dicta.
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                       <Paper style={{ backgroundImage: 'url("/vendor/images/banner2.png")', height: 150, backgroundSize: "cover", position: "relative" ,overflowText:'ellipsis'}} >
                      <Typography variant="span" style={{ position: 'absolute', bottom: 15, left: 15,paddingRight:25 }} className="one-line-ellipsis uppercase" width="100%" fontWeight={800} color="white.main" alignContent="bottom">
                        Danone article nomor 12 dan seterusnya
                      </Typography>
                    </Paper>
                    <Typography color="white.main" variant="span" width="100%" className='two-line-ellipsis' pt={1} style={{fontSize:"12px"}} >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti harum dolores cumque iure vel eum, quam aut aliquid dicta.
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                       <Paper style={{ backgroundImage: 'url("/vendor/images/banner2.png")', height: 150, backgroundSize: "cover", position: "relative" ,overflowText:'ellipsis'}} >
                      <Typography variant="span" style={{ position: 'absolute', bottom: 15, left: 15,paddingRight:25 }} className="one-line-ellipsis uppercase" width="100%" fontWeight={800} color="white.main" alignContent="bottom">
                        Danone article nomor 12 dan seterusnya
                      </Typography>
                    </Paper>
                    <Typography color="white.main" variant="span" width="100%" className='two-line-ellipsis' pt={1} style={{fontSize:"12px"}} >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti harum dolores cumque iure vel eum, quam aut aliquid dicta.
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>

            </Grid>
          </Box>

        </Container>
      </Paper>
    </Layout>
  );
}
export default Index;
