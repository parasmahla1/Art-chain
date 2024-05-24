import ArtWorks from './components/ArtWorks'
import CreateNFT from './components/CreateNFT'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ShowNFT from './components/ShowNFT'
import Transactions from './components/Transactions'
import UpdateNFT from './components/UpdateNFT'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
      <Header />
      <Hero />
      </div>
      <ArtWorks />
      <Transactions />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <Footer />
    </div>
  )
}

export default App
