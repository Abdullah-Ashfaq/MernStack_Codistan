import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ParentTransactions from './pages/ParentTransactions'
import ChildCorrespondingData from './pages/ChildCorrespondingData'


const App = () => {
  return (
    <>
    {/* the header  */}
      <div style={{ height: "4rem", backgroundColor: "#0079FF", display: "flex", justifyContent: "center", alignItems: 'center', position:"fixed", top:"0", width:"100%", zIndex:"1"}}>
        <div style={{ fontSize: "24px", color: "white", fontStyle: "bold" }}>Mern Stack Assignment</div>

      </div>

      {/* defined the routes for the pages */}
      <Router>
        <Routes>
          <Route path='/' element={<ParentTransactions />} />
          <Route path='/child' element={<ChildCorrespondingData />} />
        </Routes>
      </Router>

      {/* the footer */}
      <div style={{ height: "4rem", backgroundColor: "#0079FF", display: "flex", justifyContent: "center", alignItems: 'center', position: "fixed", bottom: "0", width: "100%" }}>
        <div style={{ fontSize: "24px", color: "white", fontStyle: "bold" }}>&copy; Abdullah Ashfaq</div>

      </div>



    </>
  )
}

export default App