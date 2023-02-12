import React, { useState, useEffect } from 'react'
import { Paper, TextField, Grid, FormControlLabel,FormControl, FormLabel, RadioGroup, Radio, Button, Snackbar, Alert } from '@mui/material'
import { Container } from '@mui/system'
import {makeStyles} from '@mui/styles';
import TaskService from '../services/TaskService';
import TaskTable from '../components/TaskTable';

const useStyles = makeStyles((theme) => ({
  paper: {
    width:'100%',
    height:'16rem',
    margin:'1rem 0',
    padding:'1rem'
  }
}));

const Dashboard = () => {
  const {paper} = useStyles()
  const [tasks,setTasks] = useState({
    name:'',
    details : '',
    status: Boolean
  })
  const [taskList,setTaskList] = useState([])
  const [notification,setNotification] = useState({
    message:'',
    type : ''
  })
  const [showNotification,setShowNotification] = useState(false)
  const [update,setUpdate] = useState({
    status:false,
    id:''
  })
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTasks((task) => ({
      ...task,
      [name]: value
    }));
  };
  const taskService = new TaskService()
  const getTaskDetails = () => {
    taskService.getTasks().then(response => {
      setTaskList(response.data)
    })
  }
  const postTaskData = (event) => {
    event.preventDefault()
    if(taskList.find(data => data.name === tasks.name)) {
      setShowNotification(true)
      setNotification({
        message:'Same Task Already Added',
        type:'error'
      })
    } else {
      taskService.postTask(tasks).then(res => {
        if(res && res.status === 201) {
        setShowNotification(true)
          setNotification({
            message:'Task Posted Sucessfully',
            type:'success'
          })
          setTasks({
            name:'',
            details : '',
            status: Boolean
          })
        } else{
        setShowNotification(true)
          setNotification({
            message:'Some Error is there',
            type:'error'
          })
        }
      })
    }
  }
  const editTask = (id) => {
    const data = taskList.find(data => data.id === id)
    console.log(data)
    setTasks(()=> {
    return {
          name:data.name,
          details : data.details,
          status: data.status 
        }
    })
    setUpdate({status:true,id:data.id})
  }
  const updateTaskData = () => {
    taskService.updateTask(update.id,tasks).then(res => {
      if(res && res.status === 200) {
        setShowNotification(true)
        setNotification({
          message:'Task Updated Sucessfully',
          type:'success'
        })
        setUpdate({status:false})
        setTasks({
          name:'',
          details : '',
          status: Boolean
        })
      }
    })
  }
  const deleteTask = (id) => {
    taskService.deleteTask(id).then(res=>{
      if(res && res.status === 200) {
        setShowNotification(true)
        setNotification({
          message:'Task Deleted Sucessfully',
          type:'success'
        })
      }
    })
  }
  useEffect(()=> {
    getTaskDetails()
  },[notification])

  return (
    <div>
      <Container maxWidth="xs">
      <Paper elevation={3} className={paper} >
      <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="taskName"
                  label="Task Name"
                  autoFocus
                  value={tasks.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="taskDetails"
                  label="Task Deails"
                  name="details"
                  autoComplete="family-name"
                  value={tasks.details}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl>
              <FormLabel id="taskStatus">Task Status</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="status"
                    onChange={handleInputChange}
                    value={tasks.status}
                  >
                    <FormControlLabel  value= {true} control={<Radio />} label="Done" />
                    <FormControlLabel value={false} control={<Radio />} label="Not Done" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                {
                  update.status === true?
                  (
                  <Button variant='contained' onClick={updateTaskData}>Update</Button>
                  ) : (
                  <Button variant='contained' onClick={postTaskData}>SAVE</Button>
                  )

                }
              </Grid>
            </Grid>
      </Paper>
      </Container>
      <TaskTable taskList={taskList} deleteTask ={deleteTask} editTask={editTask} />
      <Snackbar open={showNotification} autoHideDuration={3000} anchorOrigin={{ vertical:'bottom', horizontal:'center' }} onClose={() => showNotification(false)} >
        <Alert  severity={notification.type} sx={{ width: '100%' }} >
            {notification.message}
         </Alert>
      </Snackbar>

    </div>
  )
}

export default Dashboard