import { useEffect, useState } from 'react';
import { GlobalMobileComponent } from './components/mobile/globalMobileComponent'
import { useSelector } from 'react-redux';
import { PCglobalComponent } from './components/PC/PCglobalComponent';

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

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (isMobile) {
      import("../src/mobileApp.css")
    } else {
      import("../src/PCApp.css")
    }
  }, [isMobile])


  addBasketInLocalStorage();

  addBasketInLocalStorage()

  return (
    <div className="App">

      {isMobile ?
        < GlobalMobileComponent />
        : <PCglobalComponent />}
    </div>
  );
}

export default App;
