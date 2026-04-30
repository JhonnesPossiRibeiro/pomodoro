import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from '../../page/Home';
import { History } from '../../page/History';
import { AboutPomodoro } from '../../page/AboutPomodoro';
import { NotFound } from '../../page/NotFound';
import { useEffect } from 'react';
import { Settings } from '../../page/Settings';

function ScrollToTop(){
  const {pathname} = useLocation();
  
  useEffect(() => {
    window.scrollTo({top:0, behavior: 'smooth'});
  }, [pathname])

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro' element={<AboutPomodoro />} />
        <Route path='/history' element={<History />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
