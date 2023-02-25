import Header from './components/Header.jsx';
import Body from './components/Body.jsx'
import Assets from './components/Assets.jsx'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='head'>
        <Header></Header>
        <Body></Body>
      </div>
      <Assets></Assets>
    </div>
  );
}

export default App;
