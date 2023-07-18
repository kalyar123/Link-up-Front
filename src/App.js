import logo from './logo.svg';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import About from './userComponents/About';
import Prayer from './userComponents/Prayer';
import QuranReader from './userComponents/QuranReader';
import Front from './userComponents/Front';
import Hijricalender from './userComponents/Hijricalender';
import Quranepak from './userComponents/Quranepak';
// import { Calendar } from '@fullcalendar/core';
import Calendar from './userComponents/Calendar';


function App() {
  return (
    <div className='App'>

      

      <Switch>

        <Route exact path='/' component={Front} />
        {/* <Route exact path='/quranepak' component={Quranepak} /> */}
        <Route exact path='/hijricalender' component={Hijricalender} />
        <Route exact path='/about' component={About} />
        <Route exact path='/prayer' component={Prayer} />
        <Route exact path='/quran' component={QuranReader} />
        <Route exact path='/calendar' component={Calendar} />

      </Switch> 


      
      
      
     
     
      
      

    </div>
  );
}

export default App;
