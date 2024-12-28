import { Header } from './components/Header';
import { LogoCarousel } from './components/LogoCarousel';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LogoCarousel />
      </main>
    </div>
  );
}

export default App;