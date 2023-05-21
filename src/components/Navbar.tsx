import { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets/index';
import { navigationLinks } from '../constants/constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setAcive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/hello"
          className="items-center gap-2 flex  "
          onClick={() => {
            setAcive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className=" w-12 h-12 object-contain " />
          <p className={`text-white text-[24px] font-bold cursor-pointer flex`}>
            Al Mamun Khan &nbsp;
            <span className="md:block hidden"> | Web Developer</span>
          </p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10 ">
          {' '}
          {navigationLinks.map((link) => {
            return (
              <li key={link.id} className={`flex items-center gap-2`}>
                <Link
                  to={link.title}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } text-[16px] cursor-pointer hover:text-white font-medium`}
                  onClick={() => {
                    setAcive(link.id);
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}{' '}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className=" w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] black-gradient z-10 rounded-xl `}
          >
            <ul className=" list-none flex  flex-col gap-4 justify-end items-start ">
              {' '}
              {navigationLinks.map((link) => {
                return (
                  <li key={link.id} className={`flex items-center gap-2`}>
                    <Link
                      to={link.title.toLowerCase()}
                      className={`${
                        active === link.title ? 'text-white' : 'text-secondary'
                      } text-[16px] font-poppins font-medium cursor-pointer `}
                      onClick={() => {
                        setAcive(link.id);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}{' '}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
