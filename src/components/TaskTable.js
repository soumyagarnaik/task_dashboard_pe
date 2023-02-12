import React from 'react'
import MaterialTable from "@material-table/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskTable = ({taskList,deleteTask,editTask}) => {
  return (
    <MaterialTable
    title='Tasks Table'
    columns={[
        {title:'SL No', field:'id'},
        {title:'Task Name', field:'name'},
        {title:'Task Details', field:'details'},
        {title:'Status', field:'status'},
        {title:'delete',render:(task) => (
            <EditIcon onClick={()=>editTask(task.id)}/>
        )},
        {title:'delete',render:(task) => (
            <DeleteIcon onClick={()=>deleteTask(task.id)}/>
        )}
    ]}
    data={taskList}
    />
  )
}

export default TaskTable