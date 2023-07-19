import React from 'react'
import './Sass/main.scss'
import Header from './layout/Header/Header'
import SectionOne from "./layout/Section-One/SectionOne.jsx";
import Cards from './componentes/Cards/Cards';
import Marca from './componentes/Marcas/Marca';
import TextCenter from './componentes/TextCenter/TextCenter';
import Button from './componentes/Buttons/Button';
import Footer from './layout/Footer/Footer';

function App() {
  

  return (
    <> 
      <div className='gran-container'>            
        <Header />
        <SectionOne />
        <Cards />
        <Marca />
        <TextCenter title={'Clipboard for iOS and Mac OS'}
                    text={'Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.'}  />
        <div className="app">
            <Button />
        </div>
       </div>  
       <Footer />
    </>
  )
}

export default App
