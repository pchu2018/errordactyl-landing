import '../stylesheets/styles.scss';

import Navbar from '../components/Navbar';
import Team from './Team';
import Header from '../components/Header';
import MainCard from '../components/MainCard';

export default function App() {


  return (
    <div id="app">
      <Navbar></Navbar>
      <Header></Header>
      <MainCard></MainCard>
      <Team></Team>
    </div>
  );
}