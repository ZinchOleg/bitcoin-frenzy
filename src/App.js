import { Navigate, Route, Routes } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import History from './components/History';
import SideBar from './components/SideBar';
import Sell from './views/Sell';
import Buy from './views/Buy';
import Wallet from './views/Wallet';
import Bitcoin from './views/Bitcoin';


function App() {
  return (
    <div className="container mx-auto">
      <Routes>
				<Route element={<SideBar />}>
          <Route element={<Header />}>
            <Route element={<History />}>
              <Route index element={<Navigate to="/wallet" />}/>
              <Route path="/wallet" element={<Wallet />}>
              </Route>
              <Route path="/buy" element={<Buy />}>
              </Route>
              <Route path="/sell" element={<Sell />}>
              </Route>
              <Route path="/bitcoin" element={<Bitcoin />}>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        transition={Flip}
        progressStyle={{height: 10}}
      />
    </div>
  );
}

export default App;
