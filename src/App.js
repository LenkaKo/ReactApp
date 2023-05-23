import Container from './Components/Container/Container.js';
import NavBar from './Components/NavBar/NavBar.js';
import Home from './Components/Home/Home.js'
import About from './Components/About/About.js';
import Favorite from './Components/Favorite/Favorite.js';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound.js';


const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;



