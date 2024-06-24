import { Outlet } from 'react-router-dom'
import Navbar from '../header/NavBar'

const LayOut = () => {
  return (
      <main>
          <Navbar />
          <Outlet />
      </main>
  )
}

export default LayOut