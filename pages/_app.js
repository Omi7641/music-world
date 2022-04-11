import Link from 'next/link';
import { createContext, useState } from 'react'
import Layout from '../Component/Layout'
import '../styles/globals.css'



 export const myContext = createContext();


function MyApp({ Component, pageProps }) {
  
const [instrument,setInstrument] = useState([])
const [course,setCourse] = useState([])

  return (
  <div>
  <myContext.Provider value={
    {
      instrumentState : [instrument,setInstrument],
      courseState : [course,setCourse]
    }
  }>

    <Layout>
       <Component {...pageProps} />
    </Layout>
    </myContext.Provider>

   
     
  </div>
  )
}
export default MyApp;
