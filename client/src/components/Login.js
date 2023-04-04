import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
// import * as yup from "yup";
// import LoginForm from './LoginForm';
// import SignupForm from './Signup';

function Login({ setUser }) {

    const history = useHistory();
    const [error, setError] = useState('');
    // const [signup, setSignup] = useState(false);

    // const handleClick = () => setSignup(!signup)

    // const formSchema = yup.object().shape({
    //     email: yup.string().email(),
    //     password: yup
    //         .string()
    //         .required('Password is required'),
    // });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        // validationSchema: formSchema,
        onSubmit: (values) => {
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        setUser(user)
                        history.push('/')
                    })
                } else {
                    res.json().then(error => setError(error.message))
                };
            })
        }
    })

    return (
        <div className='login-div'>
            <h2>Login</h2>
            {error&& <h3 style={{color:'#4FC9C2'}}> {error}</h3>}
            <form onSubmit={formik.handleSubmit}>
                <label >Username</label><br></br>
                <input type="text"  name="username" value={formik.values.username} onChange={formik.handleChange} /><br></br><br></br>
                <label >Password</label><br></br>
                <input type="password"  name="password" value={formik.values.password} onChange={formik.handleChange} /><br></br><br></br>
                <input type='submit' value='Log In!' />
            </form>
        </div>
    );
}

export default Login;