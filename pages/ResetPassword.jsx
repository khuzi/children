import React from 'react';
import AuthHeader from '../components/authNavbar'
// import TRuMOV from '../images/images/TRuMOV.png'
import { FiEyeOff } from 'react-icons/fi';
import Link from 'next/link'
import { Formik, Form } from 'formik';
import {Toast} from 'react-bootstrap'
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
// import { useHistory } from "react-router-dom";
import { values } from 'lodash';
import {useRouter} from 'next/router'
// import {useParams,useLocation} from 'react-router-dom'
import queryString from 'query-string' 
import Loading from '../components/LoadingAnimation'
import { NextSeo } from 'next-seo';
import Head from 'next/head'

const DisplayingErrorMessagesSchema = Yup.object().shape({

    password: Yup.string()
    .required('Required').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),

    password_confirmation: Yup.string()
    .required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
export default () => {
    const history = useRouter();
    const [showanimation, setshowanimation] = React.useState(false);
    // const location=useRouter();
    const [showpassword,setshowpassword]=React.useState(false);
    const [showpassword1,setshowpassword1]=React.useState(false);
  
    const [parser,setparser]=React.useState(undefined);
    React.useEffect(()=>{

     
        const parsed = queryString.parse(window.location.search);
        console.log(parsed,"pppp")
        if(parsed.email && parsed.token)
        {
            setparser(parsed);
        }
        else
        {}
        // history.replace('/forgot')
    },[])
    const postCat = async (datapost) => {
        setshowanimation(true)
        const { data, status } = await repository.ResetPassword(datapost).then(x => x).then(x => x)
        console.log(data,status)   
        if(data.status)
            {
                setmessage(data.status)
                setshowmessage(true)
                setshowanimation(false)
                history.replace('/signin')
            }else
            {
                setmessage(data.errors.email)
                setshowmessage(true)
                setshowanimation(false)
                    
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
                        <h1 className="sadbasiu83120ikas3-asdn3u">Reset /<a href="/forgot" style={{color:'#334d5e'}}>  Forgot</a></h1>
                        <p className="adsfmi3o2049-4okjda-sad mt-n2"> Enter New Password</p>
                        <div className="mt-5">
                        <Formik
                    initialValues={{
                        token:parser&&parser.token ?parser.token:"",
                        email: parser&&parser.email ?parser.email:"",
                        password: '',
                        password_confirmation:'',
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        values.email=parser&&parser.email?parser.email:"";
                        values.token=parser&&parser.token?parser.token:"";
                         
                        await postCat(values);
                    }}
                >
                    {({ errors, touched, getFieldProps,submitForm,setErrors,handleBlur ,values}) => {
                        // cstErrors = errors;

                        return (
                            <Form>

                                                 <div className="row">
                                                    <div className="col-md-12 p-0 m-0">
                                                        <label className="asdfn023u21-osld34-fas38">Password</label>
                                                       
                                                        <input {...getFieldProps("password")} type={showpassword?"text":"password"} className="form-control asdmi394iejm423i8ds7ayh1-as"/>
                            
                                                        <FiEyeOff onClick={()=>setshowpassword(!showpassword)} className="asdnas8fs9a0023-asfh3" style={{    right: 9}}/>
                                                        {touched.password && errors.password && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.password}</div>}
                            
                                                    </div>
                                                    <div className="col-md-12 p-0 m-0">
                                                        <label className="asdfn023u21-osld34-fas38">Confirm Password</label>
                                                        <input {...getFieldProps("password_confirmation")} type={showpassword1?"text":"password"} className="form-control asdmi394iejm423i8ds7ayh1-as"/>
                                                        <FiEyeOff onClick={()=>setshowpassword1(!showpassword1)} className="asdnas8fs9a0023-asfh3" style={{    right: 9}}/>
                                                        {touched.password_confirmation && errors.password_confirmation && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.password_confirmation}</div>}
                            
                                                    </div>
                                                </div>
                                                <button type="submit"  className="btn sgn-btn sgn-btn-wht w-100 mt-4" >
                                                        Change Password
                                                        </button> 
                                                       
                                       
                                                        </Form>     )

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
