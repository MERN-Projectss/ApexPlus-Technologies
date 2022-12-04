
import React from 'react'
import { Button, Form, Space } from 'antd'
import './AddScenario'


const AddScenario = () => {
  return (
    <div className='scenario-form'>
      <Space style={{ margin: "20px",marginLeft :"0px"}} >Add Scenario</Space >

    
        <Form layout={'vertical'} style = {{backgroundColor:"rgb(70, 66, 66)",  border: "3px solid gray" ,width :"130%",height:"17vw" ,alignItems:"center"}}>



          <Space  style={{ margin: "20px"}}>
          <br/><br/><br/><br/><br/><br/><br/>
       <Form.Item name={"scenario-name"} label={<h4 style={{ color: 'white' }}> Scenario Name </h4>}> 

              <input style={{ backgroundColor:"black",width:"200px",color:"white"  }} placeholder='Enter Scenario Name'></input> 
              
            </Form.Item>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Form.Item name={"scenario-time"} label={<h4 style={{ color: 'white' }}> Scenario Time (Seconds) </h4>}>
              <input style={{backgroundColor:"black", color:"white" ,width :"200px"}} placeholder='Enter Scenario Time in Seconds' />
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

export default AddScenario