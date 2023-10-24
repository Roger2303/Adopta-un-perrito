import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Tags from './components/Tags';
import './index.css';
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='header'>
    <Header className='header' title="Adopta un perrito"/>
    <div className='cards'>
    <MyCard image="https://cdn.pixabay.com/photo/2020/11/21/17/20/dog-5764666_1280.jpg" nombre="Cholito" descripcion="Es un perrito joven, alegre y se lleva muy bien con los niños." texto="+569 79375414" colorBadge="success"/>
    <MyCard image="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" nombre="Nezuko" descripcion="Perrita mujer, muy tranquila y regalona. Obedece y alegra." texto="+569 7 5436754"  colorBadge="warning"/>
    <MyCard image="https://fotografias.antena3.com/clipping/cmsimages01/2022/08/12/F30768A2-C006-4CF1-8701-6026559DB725/mas-4000-perros-utilizados-experimentos-cientificos-buscan-hogar-adopcion_97.jpg?crop=1920,1080,x0,y0&width=1600&height=900&optimize=low&format=webply" nombre="Max" descripcion="Muy juguetón y con mucha energía. Es tranquilo y tiene todas sus vacunas." texto= "+569 7 9650193"  colorBadge="secondary"/>
    </div>
  <div className='footer'> <Footer/> </div>
    </div>

  )
}

export default App;
