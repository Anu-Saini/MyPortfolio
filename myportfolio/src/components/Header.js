import React, {useState} from 'react';
import NavTabs from "./Navigation";
import About from "./pagelinks/About";
import Portfolio from "./pagelinks/Portfolio";
import Contact	from "./pagelinks/Contact";



function Header () {
const [currentpage, SetCurrentPage] = useState('About');

const renderPage = () => {
 if(currentpage ==="About") {
  return <About />
  }
  if(currentpage ==="Portfolio") {
   return <Portfolio />
   }
    else {
    return <Contact />
    };
};

const handlePageChange = (page) => SetCurrentPage(page);


 return (
  <div>
  <header className="header">
   <h1 className="header-text"> Anuraag saini</h1>
   <NavTabs
    currentPage = {currentpage}
    handlePageChange={handlePageChange}
    />
    </header>
    {renderPage()}
       </div>
  );
}

export default Header;
