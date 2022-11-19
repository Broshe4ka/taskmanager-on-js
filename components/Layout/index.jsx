import Header from "../Header";
import Footer from "../Footer";
import React from "react";




const Layout = ({children}) => (
  <>
    <Header/>
    <div className="wrapper">
      {children}
    </div>
    <Footer/>
  </>
);

export default React.memo(Layout);