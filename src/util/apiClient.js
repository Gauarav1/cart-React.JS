import axios from 'axios';

const baseURL = "http://localhost:3000";
const getData = async () => {
    try {
        const url = baseURL + "/user/get/info";
        console.log("url is : " + url);
        return await axios.get(url);
    }
    catch (err) {
        console.log(err);
    }
}
export default getData