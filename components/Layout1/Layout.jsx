import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import theme from '../theme';
import Footer from './Footer';
import Navbar from './Navbar';


function Layout({children,title}) {

  return (
    <ThemeProvider theme={theme}>
    <Head>
        <title>{title?title:"Danone Intranet"}</title>
    </Head>
      <Navbar />
     {children}
      <Footer/>
    </ThemeProvider>
  );
}
export default Layout;
