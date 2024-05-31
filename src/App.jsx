import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import MoviePage from './pages/MoviePage';
import UserContextProvider from './context/UserContextProvider';
import VideoDetails from './Components/VideoDetails';

const App = () => {
  return (
  <UserContextProvider>
<Router>
<Routes>
  <Route path='/' element={<MoviePage/>}>
  </Route>
  <Route path='/videodetail' element={<VideoDetails />} />

</Routes>
</Router>

  </UserContextProvider>

    )
}

export default App
