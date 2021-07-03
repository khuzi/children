import React from 'react'
import NavBar from '../components/header2';
import UpdateBox from '../components/updatenewcomp'
import Footer from '../components/footer'
import Loading from '../components/LoadingAnimation'
import { NextSeo } from 'next-seo';
import Head from 'next/head'

export default () => {
    return <div>
         <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo
      title=""
      description=""
    />
      </Head>
        <NavBar subtitle="For media enquiries, please contact" spanPara="press@inspirable.io" hassubtitle={true}  title="Press" titleSpan="" />
        <div className="mt-5 mb-5 container">
          <div className="row">
              <div className="col-md-6">
                  <h3 className="font-20-open-sans">
                  About Inspirable
                  </h3>

                  <p className="font-16-open-sans">
                  Inspirable was born out of a strong desire to revolutionise the reading experience for children. By designing an application that puts each reader into our carefully crafted stories, we want to inspire children to read widely, relate clearly and comprehend fully. We are focused on helping children foster a love for reading through our innovative approach that ensures stories are relevant, engaging and dynamic. Driven by a dedication to give back to children and society, we are rolling up our sleeves and diving into the details to ensure each story becomes an opportunity for a curious child to learn, grow and expand his/her imagination.
                </p>
                <p className="font-16-open-sans">
                We want to breathe new life into children’s education by delivering well-conceptualised stories that are memorable, educational and fun to read. For children who struggle to remain attentive or for those who love finding new joys of reading and learning, Inspirable is the perfect tool. After thorough research and consideration, we have focused our efforts on adding real value to stories that serve to aid in a child’s balanced growth and development. By having the main character in each story personalised in some way is the first step in the transformation of the reading experience for children. That said, we want the reader (your child) to become part of the story so that they can better comprehend the messaging and commit it to memory. Our commitment to cultivating a rich and inclusive environment for learning and development will always remain paramount to our company’s purpose. 
                 
                </p>
                <p className="font-16-open-sans">
                Inspirable is an innovative company, driven by our passion to help children see themselves in the stories they read. We believe in harnessing the power of technology to encourage open-minded learning and effective reading. For children ages 2-12, we offer books designed for interactive reading and enjoyment.
                
                </p>
              </div>
              <div className="col-md-5">
                  <img className="w-100" src="/images/icons/rc7.png"/>
              </div>
          </div>
        </div>

        <UpdateBox />
        <Footer/>

    </div>
}