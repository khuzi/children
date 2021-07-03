import React from 'react'
import NavBar from '../components/header';
import UpdateBox from '../components/updatenewcomp'
import Footer from '../components/footer'
import { useDispatch, useSelector } from 'react-redux';
import { Login, saveToken } from '../redux/actionMethodes/User/index'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { Toast } from 'react-bootstrap'
import Loading from '../components/LoadingAnimation'
import { FiEyeOff } from 'react-icons/fi'
import { NextSeo } from 'next-seo';
import Head from 'next/head'

const DisplayingErrorMessagesSchema = Yup.object().shape({
    current_password: Yup.string(),
    new_password: Yup.string(),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('new_password'), null], 'Passwords must match'),

});
export default () => {
    const dispatch = useDispatch();
    const [message, setmessage] = React.useState("");
    const [showmessage, setshowmessage] = React.useState(false);
    const [showanimation, setshowanimation] = React.useState(false);
    const user = useSelector(x => x.User);
    const token = useSelector(x => x.fcmToken);
    const [showpassword, setshowpassword] = React.useState(false);
    const [showpassword1, setshowpassword1] = React.useState(false);
    const [showpassword2, setshowpassword2] = React.useState(false);

    const postCat = async (datapost) => {
        if (datapost.first_name != user.first_name || datapost.last_name != user.last_name) {
            setshowanimation(true)
            const { data, status } = await repository.updateProfile(datapost, token).then(x => x).then(x => x)
            console.log(data, status)
            if (status == 200) {
                dispatch(Login(data.data));
                setmessage("User Updated sucessfully")
                setshowmessage(true)
                setshowanimation(false)

            }
            else {
                setmessage("Something went wrong")
                setshowmessage(true)
                setshowanimation(false)

            }
            //     if (status == 200) {

            //         dispatch(Login(data.me));
            //         dispatch(saveToken(data.access_token));


            //    }

        }

        if (datapost.current_password!= "" && datapost.new_password != "" && datapost.confirm_password != "") {

            setshowanimation(true)
            const { data, status } = await repository.changePassword(datapost, token).then(x => x).then(x => x)
            console.log(data, status)
            if (status == 200) {
                // dispatch(Login(data.data));
                setmessage(data.message)
                setshowmessage(true)
                setshowanimation(false)

            }
            else {
                setmessage("Something went wrong")
                setshowmessage(true)
                setshowanimation(false)

            }
        }
        //  
        //    {
        //     setshowanimation(true)
        //     const { data, status } = await repository.ResetToken({email:user.email}).then(x => x).then(x => x)
        //    console.log(data,"ssd")
        //     if(status==200)
        //     {


        //     }
        //     else
        //     {
        //         setmessage("Something went wrong")
        //         setshowmessage(true)
        //         setshowanimation(false)

        //     }


        // }




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
        {showmessage ? <Toast style={{
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
        {showanimation ? <Loading />
            : <></>}
        <NavBar subtitle="" hassubtitl={false} title="My" titleSpan="Details" />
        <div className="mt-5 mb-5 ask-question-bx container">
            <h2 className="roboto-reg-18">
                My Details
            </h2>
            {
                console.log(user, "uuu")
            }
            <Formik
                initialValues={{
                    first_name: user && user.first_name ? user.first_name : '',
                    last_name: user && user.last_name ? user.last_name : '',
                    email: user && user.email ? user.email : '',
                    current_password: '',
                    new_password: '',
                    confirm_password: '',
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={async (values, { setSubmitting }) => {

                    await postCat(values)
                }}
            >
                {({ errors, touched, getFieldProps, handleSubmit }) => {
                    // cstErrors = errors;

                    return (
                        <Form>

                            <input className="form-control ask-inpt mt-4 pl-4" placeholder="First Name" {...getFieldProps("first_name")} />

                            <input className="form-control ask-inpt mt-3 pl-4" placeholder="Last Name" {...getFieldProps("last_name")} />
                            <input className="form-control ask-inpt mt-3 pl-4" placeholder="Email Address" {...getFieldProps("email")} readOnly />

                            <h2 className="roboto-reg-18 mt-4">
                                Password Change            </h2>
                            
                            <div>

<input className="form-control ask-inpt mt-3 pl-4" placeholder="Old Password" {...getFieldProps("current_password")} type={showpassword ? "text" : "password"} />
<FiEyeOff onClick={() => setshowpassword(!showpassword)} className="asdf930-0sadwi30uzxfer" style={{ right: 9 }} />

{touched.current_password && errors.current_password && <div style={{ color: 'red', marginTop: 10, maxWidth: 320 }}>{errors.current_password}</div>}

</div> <div>

<input className="form-control ask-inpt mt-3 pl-4" placeholder="New Password" {...getFieldProps("new_password")} type={showpassword1 ? "text" : "password"} />
<FiEyeOff onClick={() => setshowpassword1(!showpassword1)} className="asdf930-0sadwi30uzxfer" style={{ right: 9 }} />

{touched.new_password && errors.new_password && <div style={{ color: 'red', marginTop: 10, maxWidth: 320 }}>{errors.new_password}</div>}

</div>
                            <div>

                                <input className="form-control ask-inpt mt-3 pl-4" placeholder="Confirm New Password" {...getFieldProps("confirm_password")} type={showpassword2 ? "text" : "password"} />
                                <FiEyeOff onClick={() => setshowpassword2(!showpassword2)} className="asdf930-0sadwi30uzxfer" style={{ right: 9 }} />

                                {touched.confirm_password && errors.confirm_password && <div style={{ color: 'red', marginTop: 10, maxWidth: 320 }}>{errors.confirm_password}</div>}

                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn sgn-sbmt sgn-btn-wht mt-2 pl-5 pr-5 mt-5" style={{ width: '70%' }} >
                                    Submit Now
                </button>
                            </div>



                        </Form>
                    )

                }}
            </Formik>


        </div>

        <UpdateBox />
        <Footer />

    </div>
}