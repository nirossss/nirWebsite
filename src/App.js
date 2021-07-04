import './App.css';
import Contact from './components/Contact';

import Home from './components/Home'
import Navigation from './components/Navigation';
import Projects from './components/Projects';

function App() {
  return (
    <main>
      <header></header>
      <h1>Nir Elenhoren</h1>
      <Navigation />
      <Home />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
