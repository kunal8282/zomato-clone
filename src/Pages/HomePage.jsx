import Header from '../Components/Header'
import RestaurantMenuPage from './RestaurantMenuPage'
import TabIndex from './TabIndex'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='w-10/12 m-auto'>
        <Header />
        <Outlet />
    </div>
  )
}

export default HomePage