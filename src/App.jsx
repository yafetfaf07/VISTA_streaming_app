import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MoviePage from './pages/MoviePage';
import UserContextProvider from './context/UserContextProvider';
import VideoDetailsPage from './pages/VideoDetailsPage';
import HistoryPage from './pages/HistoryPage';
import VideoUploadPage from './pages/VideoUploadPage';
import ProfilePage from './pages/ProfilePage';

import './App.css'

const App = () => {
  return (
  <UserContextProvider>
<Router>
<Routes>
  <Route path='/' element={<MoviePage/>}></Route>
  <Route path='/videodetail' element={<VideoDetailsPage />} />
  <Route path='/history' element= {<HistoryPage />} />
  <Route path='/videoupload' element = {<VideoUploadPage />}/>
  <Route path='/profile' element = {<ProfilePage />}/>

</Routes>
</Router>

  </UserContextProvider>

    )
}

export default App
