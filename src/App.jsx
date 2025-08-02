import {Routes, Route} from 'react-router'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import './App.css'
import NotFound from './components/NotFound'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/team-matches/:id" element={<TeamMatches />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
