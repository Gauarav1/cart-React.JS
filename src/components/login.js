import { Toast } from 'bootstrap';
import postData from '../util/loginApi';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Info = () => {

    // const email = useRef("");
    // const password = useRef("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const userInfo = async () => {

        const res = await postData(email, password);
        if (res?.data?.token) {
            localStorage.setItem("token", res?.data?.token);
            navigate("/test");
        }
        else {
            toast.error('Invalid Credentials', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
        // if (e === "" || p === "") {
        //     alert("issue");
        // }
        //     if (e && p) {
        //         alert(e);
        //         alert(p);
        //     }
        //     else {
        //         alert("Cannot leave Empty")
        //     }
    }
    return <>
    
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius:"1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your Email  and password!</p>

                                        <div className="form-outline form-white mb-4">
                                            <input onChange={e => setEmail(e.target.value)} type="email" id="email" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                        </div>
    
                                        <div className="form-outline form-white mb-4">
                                            
                                            <input onChange={e => setPassword(e.target.value)} type="password" id="password" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="password">Password</label>
                                        </div>
                                        <button onClick={e => userInfo()} className="btn btn-outline-light btn-lg px-5" type="button">Login</button>

                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer></ToastContainer>
        </div >
    </>
}
export default Info
