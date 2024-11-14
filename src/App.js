import { useEffect, useState } from 'react';
import './App.css';
import { GlobalMobileComponent } from './components/mobile/globalMobileComponent'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);


  return (
    <div className="App">

      {isMobile ?
        < GlobalMobileComponent />
        : "ПК версия в разработке"}
    </div>
  );
}

export default App;
