import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Layout from './Component/Layout'; 
import { BrowserRouter, Routes, Route,} from "react-router-dom";

const App = () => {
  return (
    <>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/register" element={<SignUp/>}/>
                    <Route path="/*" element={<h1 style={{fontSize:'80px', color:'#ff6700',height:'50vh', display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>Page Not Found</h1>}/>
                </Route>
            </Routes>
         </BrowserRouter>
    </>
  )
}

export default App;