import './App.css';
import Header from './components/Header/Header.jsx'
// import Description from './components/Description/Description.jsx'
// import Transliterator from './components/Transliterator/Transliterator.jsx'
import ContentContainer from './components/ContentContainer/ContentContainer.jsx';

function App() {

  return (
    <>
      <Header/>
      <main>
        <ContentContainer />
      </main>
    </>
  );
}

export default App;
