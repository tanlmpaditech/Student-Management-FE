// import Password from "antd/es/input/Password";
import axios from "./customize-axios";

const login = async (email, password) => {
    return await axios.post('/login', {email, password});
}

export {login};