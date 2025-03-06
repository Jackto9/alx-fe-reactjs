import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />
      <MainContent />

      {/* UserProfile Example */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

      {/* Counter Component */}
      <Counter />

      <Footer />
    </>
  );
}

export default App;
