import Biodata from "./components/Biodata";
import Header from "./components/Header";
import Footer from "./components/Footer";

const biodata=[
  {
    id:1,
    image:"/vite.svg",
    name:"Tisatun Riza Fauziah",
    email:"tisatunriza@gmail.com",
    hobby:["singging","cooking","reading"],
  },
  {
    id:2,
    image:"/vite.svg",
    name:"Tisatun Riza Fauziah",
    email:"tisatunriza@gmail.com",
    hobby:["singging","cooking","reading"],
  },
];


export default function App()
{
  return(   
    <>
   <Header/>
    <div>
      {biodata.map((data)=>(
        <Biodata key={data.id} bioProps={data}/>
      ))}
    </div>
   <Footer/>
    </>
  )
}