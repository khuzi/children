import React from 'react';
import AuthHeader from '../components/authNavbar'
// import TRuMOV from '../../images/images/TRuMOV.png'
import { FiEyeOff } from 'react-icons/fi';
import  Link  from 'next/link'
import { Formik, Form } from 'formik';
import {Toast} from 'react-bootstrap'
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { useRouter } from "next/router";
import { values } from 'lodash';
import Loading from '../components/LoadingAnimation'
import { NextSeo } from 'next-seo';
import Head from 'next/head'

const DisplayingErrorMessagesSchema = Yup.object().shape({

       email: Yup.string()
        .required('Required').email(),
});
export default () => {
    const history = useRouter();
    const [showanimation, setshowanimation] = React.useState(false);

    const postCat = async (datapost) => {
        setshowanimation(true)
        const { data, status } = await repository.GetPasswordToken(datapost).then(x => x).then(x => x)
        console.log(data,status)   
        if(data.status)
            {
                setmessage(data.status)
                setshowmessage(true)
                setshowanimation(false)
            }else
            {
                setmessage(data.errors.email)
                setshowmessage(true)
                setshowanimation(false)
                        //     {  setmessage("Something went wrong")
                        //     setshowmessage(true)
                        //         setshowanimation(false)
                        //     }
            }
        

    }
    const [message,setmessage]=React.useState("");
    const [showmessage,setshowmessage]=React.useState(false);
    function onKeyDown(keyEvent) {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
          keyEvent.preventDefault();
        }
      }
    return <div>
       <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo
      title=""
      description=""
    />
      </Head>
        <> {showmessage?<Toast style={{
        position: 'fixed',
        top: 10,
        right: 10,
        zIndex:999
      }}>
    <Toast.Header onClick={()=>setshowmessage(false)}>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Inspirable</strong>
    </Toast.Header>
    <Toast.Body>{message}</Toast.Body>
  </Toast> :<></>}
  {showanimation ? <Loading />
            : <></>}
        <AuthHeader />
        <div className="">
            <div className="row ">
                <div className="col-md-6 col-sm-12 ">
                    <div className="container mt-5 w-80per">
                        <h1 className="sadbasiu83120ikas3-asdn3u">Forgot /<a  href="/signin" style={{color: '#334D5E'}}>  Sign IN</a></h1>
                        <p className="adsfmi3o2049-4okjda-sad mt-n2"> Enter your email to reset password</p>
                        <div className="mt-5">
                        <Formik
                    initialValues={{
                       
                        email: '',
                        
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                            await postCat(values);
                    }}
                >
                    {({ errors, touched, getFieldProps,submitForm,setErrors,handleBlur ,values}) => {
                        // cstErrors = errors;

                        return (
                            <Form onKeyDown={onKeyDown}  style={{alignItems:'center'}}>
                 <div className="row">
                                <div className="col-md-12 p-0 m-0">
                                    <label className="asdfn023u21-osld34-fas38">Email</label>
                                    <input {...getFieldProps("email")}  placeholder="Email address" type="text" className="form-control asdmi394iejm423i8ds7ayh1-as font-19 newplaceholder" />
                                    {touched.email && errors.email && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.email}</div>}

                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                            <button type="submit"  onClick={()=>{
                              

                            }} className="btn sgn-btn sgn-btn-wht mt-4" >
                            Request
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
                    <img src='/images/images/TRuMOV.png' className="image-fluid" style={{width:'70%',marginTop:'10%',borderRadius:15}} />

                    </div>

                </div>
            </div>

        </div>
        </>
    </div>

}
