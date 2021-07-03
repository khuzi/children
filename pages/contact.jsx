import React from 'react'
import NavBar from '../components/header';
import UpdateBox from '../components/updatenewcomp'
import Footer from '../components/footer'
import Banner from '../components/banner'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { Toast } from 'react-bootstrap'
import Loading from '../components/LoadingAnimation';
import {useSelector} from 'react-redux'
import { NextSeo } from 'next-seo';
import Head from 'next/head'

const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string().required('required'),
    email: Yup.string().required('required').email(),
    message: Yup.string().required('required'),
    subject: Yup.string().required('required'),
    
});
export default () => {
    const [showanimation, setshowanimation] = React.useState(false);
    const [showmessage, setshowmessage] = React.useState(false);
    const [message, setmessage] = React.useState("");
    const token=useSelector(x=>x.fcmToken);
    const postCat = async (datapost) => {
        setshowanimation(true)
        const { data, status } = await repository.chatMessaget(datapost,token).then(x => x).then(x => x)
            if(status==200)
            {
                setmessage(data.message)
            setshowmessage(true)
                setshowanimation(false)
            }
            else
            {  setmessage("Something went wrong")
            setshowmessage(true)
                setshowanimation(false)

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
      {showmessage ? <Toast style={{
            position: 'fixed',
            top: 10,
            right: 10,
            zIndex: 111,
            backgroundColor: 'white'
        }}>
            <Toast.Header onClick={() => setshowmessage(false)}>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Inspirable</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast> : <></>}
         {showanimation ? <Loading />
            : <></>}
        <Banner />

        <NavBar active="4" hastop={true} subtitle="Do you have a question about Inspirable, our mobile app, or anything else? If so, you have come to the right place. Please take a look at our FAQ page to see if we have already answered your question. If you do not see your unique question listed, or if you require further assistance, please do not hesitate to contact us directly by filling out the provided form below." hassubtitle={true} title="Contact" titleSpan="Us" />
        <div className="mt-5 mb-5 ask-question-bx container">
            <h2 className="roboto-reg-18">
            My Details            </h2>
            <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                        
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        await postCat(values)

                    }}
                >
                    {({ errors, touched, getFieldProps,submitForm,setErrors,handleBlur ,values,handleSubmit}) => {
                        // cstErrors = errors;

                        return (
                            <Form   >
               
               <input  {...getFieldProps("name")} className="form-control ask-inpt mt-4 pl-4 font-19 newplaceholder" placeholder="First Name" />
               {touched.name && errors.name && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.name}</div>}
               <input  {...getFieldProps("subject")} className="form-control ask-inpt mt-4 pl-4 font-19 newplaceholder" placeholder="Subject" />
               {touched.subject && errors.subject && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.subject}</div>}

            <input  {...getFieldProps("email")}  className="form-control ask-inpt mt-4 pl-4 font-19 newplaceholder" placeholder="Email address" />
            {touched.email && errors.email && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.email}</div>}

            <textarea  {...getFieldProps("message")}  className="form-control text-secondary mt-4 br-2 font-19 newplaceholder" id="exampleFormControlTextarea1" rows="6" placeholder="Message"></textarea>
            {touched.message && errors.message && <div style={{ color: 'red', marginTop: 10,maxWidth:320 }}>{errors.message}</div>}

            <div className="d-flex justify-content-center">
                <button type="submit" className="btn sgn-sbmt mt-2 pl-5 pr-5 mt-3 sgn-btn-wht" >
                    Submit
                </button>
            </div>
            </Form>
                        )

                    }}
                </Formik>
                
           
         
        </div>

        <UpdateBox />
        <Footer/>

    </div>
}