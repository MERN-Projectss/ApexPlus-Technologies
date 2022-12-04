import React from 'react'
import {Menu} from 'antd'
import './SideMenu.css'
import {  Route, Routes,useNavigate } from 'react-router-dom'
import {HomeOutlined, FileAddOutlined , UnorderedListOutlined } from '@ant-design/icons'
import AddScenario from '../Pages/AddScenario'
import AddVehicle from '../Pages/AddVehicle'



const SideMenu = () => {
    const navigate =useNavigate()
  return (
    <div className='menu-content'>
        {/* creating menu items */}
        <Menu  className='menu-item'
        // Creating OnClick function and generating key as path name and using useNavigate hooks  to redirect path
        onClick={({key})=> navigate(key)
    }
    // keep selection of menu items using path
        defaultSelectedKeys ={[window.location.pathname]}
        items={[
            {label : "Home" , key:'/',icon :<HomeOutlined /> },
            {label :'Add Scenario', key:'/AddScenario' ,icon : <FileAddOutlined />},
            { label : "All Scenarios",key:'/AllScenarios', icon : <UnorderedListOutlined />},
            {label : "Add Vehicle", key:'/AddVehicle', icon : <FileAddOutlined />}
    ]} >

        </Menu>
        {/* Creating contents for menu items */}
        < Content />
    </div>

  )


function Content(){
 return <div className='rtg'>
    <Routes>
        {/* Routing Paths */}
    <Route path='/' element={ <div >Home</div>} />


    <Route path='/AddScenario' element={<div>
        <h3>Scenario / add</h3>
        <AddScenario/>
        
    </div>} />


    <Route path='/AllScenarios' element={ 
    
    <div>All Scenarios</div>} />



    <Route path='/AddVehicle' element={ 
<div>
    <h3>Vehicle / add</h3>
        <AddVehicle/>
        </div>
    } />
    </Routes>
 </div>
}



}

export default SideMenu