import { lazy,Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import style from './app.module.scss';
import Spinner from './component/common/Spinner'

const Login=lazy(()=>import('./pages/Login'))
const Register=lazy(()=>import('./pages/Register'))

function App() {
  return (
    <div className={style.appContainer}>
      <Suspense fallback={<Spinner/>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      </Suspense>
     
    </div>
  );
}

export default App;