import React from 'react'
import NavBar from '../components/header';
import UpdateBox from '../components/updatenewcomp'
import Footer from '../components/footer'
import Banner from '../components/banner'
import Loading from '../components/LoadingAnimation'
import { repository } from '../utiles/repository';
import {useSelector} from 'react-redux';
import { NextSeo } from 'next-seo';
import Head from 'next/head'

export default () => {
    const [showanimation,setshowanimation]=React.useState(false);

    const [content,setcontent]=React.useState("");

    React.useEffect(()=>{
        setshowanimation(true)
        try
            {
                
                (async ()=>{
                    const  {data,status}=await repository.Terms().then(x=>x).then(x=>x)
                    console.log(data,status)
                    if(status==200)
                  {
                    setcontent(data.data);
                    setshowanimation(false)
                  }
                  else
                  {
                    setshowanimation(false)
                  }
                })()
            }
            catch(e)
            {
                setshowanimation(false)
            }
    },[])
    return <div>
   
          {showanimation?<Loading/>
:<></>}
        <Banner />
        <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo
      title=""
      description=""
    />
      </Head>
        
        <NavBar  hastop={false} subtitle="" hassubtitle={true} title="Terms Of" titleSpan="Use" />
        <div className="mt-5 mb-5 ask-question-bx">
        <p className="nunito-reg-14"  dangerouslySetInnerHTML={{ __html: content }}   >
        </p>
       </div>

        <UpdateBox />
        <Footer/>

    </div>
}