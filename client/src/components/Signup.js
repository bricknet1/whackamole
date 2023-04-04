import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";

function Signup({setUser}) {

    const history = useHistory();
    const [error, setError] = useState('');

    const formSchema = yup.object().shape({
        email: yup.string().email(),
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
            // .min(5, 'Your password is too short.')
            // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordconfirm: yup
            .string()
            .required("Must confirm password.")
            .oneOf([yup.ref('password'), null], 'Passwords must match')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            passwordconfirm: ''
        },
        validationSchema: formSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => {
            fetch('/signup', {
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
        <div className='signup-div'>
            <h2>Create an Account</h2>
            <form onSubmit={formik.handleSubmit}>
                <label >Username</label><br></br>
                <input type="text"  name="username" value={formik.values.username} onChange={formik.handleChange} /><br></br>
                <h3 style={{color:'#4FC9C2'}}> {formik.errors.username}</h3>
                <label >Email</label><br></br>
                <input type="text"  name="email" value={formik.values.email} onChange={formik.handleChange} /><br></br>
                <h3 style={{color:'#4FC9C2'}}> {formik.errors.email}</h3>
                <label >Password</label><br></br>
                <input type="password"  name="password" value={formik.values.password} onChange={formik.handleChange} /><br></br>
                <h3 style={{color:'#4FC9C2'}}> {formik.errors.password}</h3>
                <label >Confirm Password</label><br></br>
                <input type="password"  name="passwordconfirm" value={formik.values.passwordconfirm} onChange={formik.handleChange} /><br></br>
                <h3 style={{color:'#4FC9C2'}}> {formik.errors.passwordconfirm}</h3>
                <input type='submit' value='Create Account!' />
                {error&& <h3 style={{color:'#4FC9C2'}}> {error}</h3>}
            </form>
        </div>
    );
}

export default Signup;