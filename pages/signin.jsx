import React from 'react';
import AuthHeader from '../components/authNavbar'
import queryString from 'query-string'
import Head from 'next/head'

import { FiEyeOff } from 'react-icons/fi';
import { Formik, Form } from 'formik';
import { Toast } from 'react-bootstrap'
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { NextSeo } from 'next-seo';

import { values } from 'lodash';

const DisplayingErrorMessagesSchema = Yup.object().shape({

    email: Yup.string()
        .required('Required').email(),
});
export default () => {
    const history = useRouter();

    const [message, setmessage] = React.useState("");
    const [showmessage, setshowmessage] = React.useState(false);
    function onKeyDown(keyEvent) {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }
    return <div>
        
        <> {showmessage ? <Toast style={{
            position: 'fixed',
            top: 10,
            right: 10,
        }}>
            <Toast.Header onClick={() => setshowmessage(false)}>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Inspirable</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast> : <></>}
            <AuthHeader />
            <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo
      title=""
      description=""
    />
      </Head>
            <div className="">
                <div className="row ">
                    <div className="col-md-6 col-sm-12 ">
                        <div className="container mt-5 w-80per">
                            <h1 className="sadbasiu83120ikas3-asdn3u">Sign In /<a href="/signup" style={{ color: '#334d5e' }}>  Sign UP</a></h1>
                            <p className="adsfmi3o2049-4okjda-sad mt-n2"> Welcome back to sign in to your account.</p>
                            <div className="mt-5">
                                <Formik
                                    initialValues={{

                                        email: '',

                                    }}
                                    validationSchema={DisplayingErrorMessagesSchema}
                                    onSubmit={async (values, { setSubmitting }) => {
                                        history.push({ pathname: '/signin/password', query: { email: values.email } })
                                    }}
                                >
                                    {({ errors, touched, getFieldProps, submitForm, setErrors, handleBlur, values }) => {
                                        // cstErrors = errors;

                                        return (
                                            <Form onKeyDown={onKeyDown} style={{ alignItems: 'center' }}>
                                                <div className="row">
                                                    <div className="col-md-12 p-0 m-0">
                                                        <label className="asdfn023u21-osld34-fas38">Email</label>
                                                        <input {...getFieldProps("email")} placeholder="Email address" type="text" className="form-control asdmi394iejm423i8ds7ayh1-as font-19 newplaceholder" />
                                                        {touched.email && errors.email && <div style={{ color: 'red', marginTop: 10, maxWidth: 320 }}>{errors.email}</div>}

                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <Link href="/forgot" className="mr-2" style={{ marginRight: '3  %' }}>Forgot Password?</Link>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <button type="button" onClick={()=>submitForm()}  className="btn sgn-btn mt-4 sgn-btn-wht" >
                                                        Next
                            </button>
                                                    {/* <button onClick={()=>{
                              history.push('/signup')
                            }}  className="btn sgn-btn mt-4" >
                            Sign Up
                            </button> */}
                                                </div>
                                            </Form>
                                        )

                                    }}
                                </Formik>


                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-0 col-0 p-0 m-0 dsp-signing-img">
                        <div className="dsp-flex-23">
                            <img src='/images/images/TRuMOV.png' className="image-fluid" style={{ width: '70%', marginTop: '10%', borderRadius: 15 }} />

                        </div>

                    </div>
                </div>

            </div>
        </>
    </div>

}
