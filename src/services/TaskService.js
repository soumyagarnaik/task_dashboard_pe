import axios from "axios";
const url = 'http://localhost:3004/tasks'
class TaskService {
    getTasks(){
        return axios.get(url).then(response => {
            if(response && response.status === 200) {
                return response
            }
        })
    }
    postTask(task){
        return axios.post(url,task).then(response => {
            if(response && response.status === 201) {
                return response
            }
        })
    }
    updateTask(id,tasks) {
        return axios.put(`${url}/${id}`,tasks).then(response => {
            if(response && response.status === 200) {
                return response
            }
        })
    }
    deleteTask(id) {
        console.log(url,'dd')
        return axios.delete(`${url}/${id}`).then(response => {
            if(response && response.status === 200) {
                return response
            }
        })
    }
}

export default TaskService