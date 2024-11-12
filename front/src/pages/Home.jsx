import ImagesContainer from '../components/ImagesContainer';
import MainImageContainder from '../components/MainImageContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/Home.css';

function Home() {
  return (
    <>
      <Header isEvent={true}/>
      <MainImageContainder />
      <ImagesContainer />
    </>
  )
}

export default Home