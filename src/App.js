import { useEffect, useState } from 'react';
import './App.css';
import { GlobalMobileComponent } from './components/mobile/globalMobileComponent'
import { useSelector } from 'react-redux';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const dessertInBasketState = useSelector(state => state.dessertInBasketState)

  const addBasketInLocalStorage = () => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        try {
          localStorage.setItem('BasketUserData', JSON.stringify(dessertInBasketState));
        } catch (error) { }
      }
    });
  };

  addBasketInLocalStorage();


  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);




  addBasketInLocalStorage()

  return (
    <div className="App">

      {isMobile ?
        < GlobalMobileComponent />
        : "ПК версия в разработке"}
    </div>
  );
}

export default App;
