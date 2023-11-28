import axios from "axios";

const baseURL = "http://localhost:3000";
const postData = async (a,b) => {
    try {
        const url = baseURL + "/user/login";
        console.log(`url is: ${url}`);
        return await axios.post(url,{
            email:a,
            password:b
        });
    }
    catch (err) {
        console.log(err);
    }
}
export default postData