import React, { useState } from 'react'

const Header = () => {

  const [show, setShow] = useState(false);
    //useState() ; 컨퍼넌트의 상태를 관리해주는 훅
    // false : 초기값

  const toggleMenu = ()=> {
     setShow((pShow) => !pShow);

    //  !:반대값 참->거짓 거짓->참
  }

  return (
    <header id='header' role='banner'>
      <section className='header_inner'>
        <h1 className="header_logo">
          <a href="/">portfolio<em>react.js</em></a>
        </h1>
        <nav className={`header_nav ${show ? "show" :""}`} role='navigation' aria-label='800이상 메뉴'>
          <ul>
            <li><a href="/">intro</a></li>
            <li><a href="/">skill</a></li>
            <li><a href="/">site</a></li>
            <li><a href="/">port</a></li>
            <li><a href="/">contact</a></li>
          </ul>
        </nav>
        <nav 
            className="header_nav_m"
            id='headerToggle'  
            role='button'  
            tabIndex={0}
            onClick={toggleMenu}
         >

          <span></span>
        </nav>

      </section>
    </header>
  )
}

export default Header
