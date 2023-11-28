import { useState } from 'react';
import getData from '../util/apiClient';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Test = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return navigate("/login")
        }
        setToken(token);

    }, [])

    const [user, setUser] = useState([]);
    const gettingData = async () => {
        const res = await getData();
        setUser(res.data.data);
    }
    useEffect(() => {
        gettingData();
    }, [])

    return <>
        <div>
            <table style={{ border: "1px solid blue", }}>
                <th>Name</th>
                <th>Age</th>
                <th>Mobile Number</th>
                <th>Email</th>
                {
                    user.map(e => {
                        return <tr>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.mobileNo}</td>
                            <td>{e.email}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    </>
}
export default Test;
