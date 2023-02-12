import Users from '../data/userdata.json'

class AuthenticationService {
    userLogin(userData) {
        if(userData){
            const getUser = Users.userData.find(data => data.email === userData.email && data.password === userData.password )
            if(getUser === undefined) {
                return {
                    user:'',
                    status : 400
                }
            } else {
                return {
                    user:getUser,
                    status : 200
                }
            }
        }
    }
}

export default AuthenticationService