
import React from 'react'
import { Button, Form, Space } from 'antd'
import './AddVehicle.css'


const AddVehicle = () => {
  return (
    <div className='scenario-form'>
      <Space style={{ margin: "20px",marginLeft :"0px"}} >Add Vehicle</Space >

    
        <Form layout={"horizontal"} style = {{backgroundColor:"rgb(70, 66, 66)",  border: "3px solid gray" }}>



          <Space  style={{ margin: "20px",marginTop :"10px"}}>
         
       <Form.Item name={"scenarioList"} label={<h4 style={{ color: 'white' }}> Scenarios List </h4>}> 

              <input style={{ backgroundColor:"black",width:"200px",color:"white"  }} placeholder='Enter Scenario List'></input> 
              
            </Form.Item>

            <Form.Item name={"VehicleName"} label={<h4 style={{ color: 'white' }}> Vehicle Name</h4>}>
              <input style={{backgroundColor:"black", color:"white" ,width :"200px"}} placeholder='Enter Vehicle Name' />
            </Form.Item>

            <Form.Item name={"speed"} label={<h4 style={{ color: 'white' }}> Speed</h4>}>
              <input style={{backgroundColor:"black", color:"white" ,width :"200px"}} placeholder='Enter  Speed' />
            </Form.Item>

            
            
            <Form.Item  name={"positionX"} label={<h4 style={{ color: 'white',justifyItems:"center" }}> Position X</h4>}>
              <input style={{backgroundColor:"black", color:"white" ,width :"200px"}} placeholder='Enter  Position X' />
            </Form.Item>
            
            <Form.Item name={"positionY"} label={<h4 style={{ color: 'white' }}> Position Y</h4>}>
              <input style={{backgroundColor:"black", color:"white" ,width :"200px"}} placeholder='Enter Position Y' />
            </Form.Item>
            
            <Form.Item name={"directio"} label={<h4 style={{ color: 'white' }}> Direction</h4>}>
              <input style={{backgroundColor:"black", color:"white" ,width :"200px"}} placeholder='Enter Direction' />
            </Form.Item>
           
          </Space>

        </Form>

        <Space layout={'horizontal'}  style={{ margin: "15px",marginLeft :"0px"}} >
          <Button style={{backgroundColor :"green" ,border:"green",color:"white", width:"80px"}}>Add</Button><br/><br/>
          <Button type='reset' style={{backgroundColor :"rgb(198, 110, 1)" ,border:"rgb(198, 110, 1)",color:"white", width:"80px"}}>Reset</Button><br/><br/>
          <Button style={{backgroundColor :"rgb(30, 174, 235)" ,border:"rgb(30, 174, 235)",color:"white", width:"80px"}}>Go Back</Button>
        </Space>
     

    </div>
  )
}

export default AddVehicle