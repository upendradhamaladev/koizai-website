import Navbar from './components/Navbar'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/global.scss'
import Footer from './components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
