import React from 'react'
import NavBar from '../components/header';
import UpdateBox from '../components/updatenewcomp';
import { Form } from 'react-bootstrap'
import Footer from '../components/footer'
import Loading from '../components/LoadingAnimation'
import {useSelector} from 'react-redux'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import Head from 'next/head'

export default () => {
    const user = useSelector(x => x.User);
    const history = useRouter();

        React.useEffect(()=>{
            if(user==null)
            {
                history.push('/');

            }
           
        })
return <div>
 <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo
      title=""
      description=""
    />
      </Head>
        <NavBar subtitle="Send us a message and we’ll get back to you within 24 hours." hassubtitl={true} title="Account" titleSpan="Closing" />
        <div className="mt-5 mb-5 container mr-5">
            <h2 className="nunito-semi-28">
                Tell us why you're closing your account
            </h2>
            <div style={{ marginTop: 53 }}>
                <Form.Check
                    type="radio"
                    label="I have a duplicate account."
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    className="mt-2"
                />
                <Form.Check
                    type="radio"
                    label="I'm getting too many emails."
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    className="mt-2"
                />
                <Form.Check
                    type="radio"
                    label="I'm not getting any value from membership."
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    className="mt-2"
                />
                <Form.Check
                    type="radio"
                    className="mt-2"
                    label="I have a privacy concern."
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                />
                <Form.Check
                    type="radio"
                    className="mt-2"
                    label="I'm receiving unwanted contact"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                />
                <Form.Check
                    type="radio"
                    className="mt-2"
                    label="Other"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                />
                <p className="nunito-semi-24 mt-4">Your feedback matters. Is there anything else you'd like us to know?</p>
                <textarea style={{ maxWidth: 820 }} className="form-control text-secondary mb-5" id="exampleFormControlTextarea1" rows="10" placeholder="Leave a comment..."></textarea>
                <div className="d-flex">
                    <button className="btn sgn-btn pl-3 pr-3 sgn-btn-wht">
                        Back to setting
                            </button>
                    <button className="btn sgn-btn-23hsd">
                        Next
                            </button>

                </div>
            </div>
        </div>

        <UpdateBox />
        <Footer />

    </div>
}