import Signup from './Signup.jsx'
import Appbar from './Appbar.jsx'
import Signin from './Signin.jsx'
import Addcourse from './Addcourse.jsx'

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div style={{width : "100vw" , height : "100vh" , background : "#eeeeee"}}>
      <Router>
        <Appbar/>
        
        <Routes>
          <Route path='/addcourse' element={<Addcourse/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
        
        </Routes>
      </Router>
    </div>
  )
}



export default App
