import React, { useState, useEffect, useRef } from "react";
import logo from "../../asset/images/logo1.png";
import { useTranslation } from "react-i18next";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import Logout from "../../services/Logout";
import Bag from "../../asset/images/Bag.svg";
import logout from "../../asset/images/logout.svg";
import profileIcon from "../../asset/images/profileIcon.svg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useCartsQuery, useWishlistsQuery } from "../../Redux/productsPage/productSlice";

const Header: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');
  const userData: any = useAuthUser();
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null); 

  const navigate = useNavigate();

  const userToken = Cookies.get("_auth");
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = Logout();

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsLanguageDropdownOpen(false);
      setIsUserDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const userId = userData?.userId;
  const {data: carts} = useCartsQuery({});
  // console.log(carts)
  const { data: wishlists} = useWishlistsQuery({});
  // console.log(wishlists)
  const userWishlists = wishlists ? wishlists.filter((wishlist: any) => wishlist.userId === userId) : [];
  const wishlistsNumber = userWishlists.length;
  const userCarts = carts ? carts.filter((cart: any) => cart.userId === userId) : [];
  const cartsNumber = userCarts.length;

  return (
    <header className="bg-primary text-xl text-white pl-24 pt-8 pb-8 sm:pl-12 sm:pt-6 sm:pb-6 md:pl-24 md:pt-8 md:pb-8 flex items-center justify-between font-outfit border-b-2 border-border fixed top-0 w-full z-50">
      <div className="flex items-center">
        <img src={logo} alt="CRAFTERS Logo" className=" mr-20 h-12 sm:h-10" />

      <nav className="hidden lg:flex">
        <ul className="flex space-x-8">
          <li>
            <a href="" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#AboutCrafters" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <a href="#ContactSection" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      </div>

      {userData ? (
        <div className="hidden lg:flex items-center space-x-8 pr-24">
        <a href="" className="relative">
          <svg
            width="30"
            height="34"
            viewBox="0 0 33 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.2612 0.942749C20.4836 0.942749 23.9717 4.02599 24.4018 7.96935L24.5218 7.97071C26.8641 7.97071 29.712 9.46151 30.6732 13.6429L31.9477 23.097C32.4049 26.1482 31.8331 28.5957 30.245 30.3513C28.6653 32.0975 26.1647 33.0217 23.0131 33.0217H9.52782C6.06605 33.0217 3.65428 32.209 2.15359 30.5386C0.646437 28.8636 0.142437 26.351 0.656129 23.0722L1.90967 13.7435C2.73351 9.46615 5.74621 7.97071 8.07882 7.97071C8.2802 6.19116 9.11751 4.49822 10.4458 3.22926C11.9724 1.77561 14.0772 0.942749 16.2273 0.942749H16.2612ZM24.5218 10.2928H8.07882C7.36644 10.2928 4.98536 10.5684 4.30205 14.1042L3.05498 23.3927C2.64951 25.9981 2.9629 27.8836 3.98867 29.0246C5.00151 30.1516 6.81398 30.6996 9.52782 30.6996H23.0131C24.706 30.6996 27.0176 30.376 28.4133 28.831C29.5214 27.6065 29.9027 25.7829 29.5473 23.4097L28.2889 14.0407C27.7526 11.7325 26.3375 10.2928 24.5218 10.2928ZM20.9725 14.6028C21.6413 14.6028 22.2212 15.123 22.2212 15.7639C22.2212 16.4048 21.7156 16.9249 21.0468 16.9249H20.9725C20.3037 16.9249 19.761 16.4048 19.761 15.7639C19.761 15.123 20.3037 14.6028 20.9725 14.6028ZM11.5546 14.6028C12.2234 14.6028 12.8033 15.123 12.8033 15.7639C12.8033 16.4048 12.2961 16.9249 11.6273 16.9249H11.5546C10.8859 16.9249 10.3431 16.4048 10.3431 15.7639C10.3431 15.123 10.8859 14.6028 11.5546 14.6028ZM16.2564 3.26486H16.2322C14.7121 3.26486 13.2308 3.85159 12.1565 4.87486C11.2815 5.70969 10.7092 6.80717 10.524 7.96999L21.9598 7.97042C21.5447 5.31046 19.1445 3.26486 16.2564 3.26486Z"
              fill="white"
            />
          </svg>
          <div className=" absolute top-[-10px] left-[10px] p-1 min-h-[25px] min-w-[25px] flex items-center justify-center rounded-full bg-secondary">
            <span className="text-white text-[12px]">{cartsNumber}</span>
          </div>
        </a>
        <a href="" className="relative">
          <svg
            width="33"
            height="36"
            viewBox="0 0 33 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 8.25095C10.3127 1.2382 2.75 6.41124 2.75 13.7057C2.75 21 8.27672 24.8871 12.3224 28.3664C13.75 29.5941 15.125 30.75 16.5 30.75"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M16.5 8.25095C22.6872 1.2382 30.25 6.41124 30.25 13.7057C30.25 21 24.7233 24.8871 20.6777 28.3664C19.25 29.5941 17.875 30.75 16.5 30.75"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <div className=" absolute top-[-10px] left-[10px] p-1 min-h-[25px] min-w-[25px] flex items-center justify-center rounded-full bg-secondary">
            <span className="text-white text-[12px]">{wishlistsNumber}</span>
          </div>
        </a>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center"
            >
              {selectedLanguage}
              <i className="fas fa-chevron-down ml-2"></i>
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 top-12 w-28 bg-primary border border-border rounded shadow-lg" ref={dropdownRef}>
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => handleLanguageChange('ENG')}
                      className="block px-4 py-2 w-full text-left hover:scale-105 transition-transform duration-200"
                    >
                      ENG
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLanguageChange('FR')}
                      className="block px-4 py-2 w-full text-left hover:scale-105 transition-transform duration-200"
                    >
                      FR
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLanguageChange('KINY')}
                      className="block px-4 py-2 w-full text-left hover:scale-105 transition-transform duration-200"
                    >
                      KINY
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4" ref={dropdownRef}>
            <img src={userData?.profile} alt="User Profile" className="w-10 h-10 rounded-full" />
            <span className="text-sm">{userData?.name}</span>
            <i className="fas fa-chevron-down ml-2 cursor-pointer" onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}></i>
          </div>

          {isUserDropdownOpen && (
                  <div className="absolute z-50 flex flex-col top-full mt-2 right-2 h-62 bg-[#012F5A] rounded-l-[20px] mb-4 border-2 border-[#ffffff3e] fade-in">
                    <div className="flex flex-row gap-4 bg-[#0E3F6D] rounded-tl-[20px] p-7">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                        <img
                          src={userData.profile}
                          alt="profilePic"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="font-outfit text-lg text-white gap-2">
                        <p className="text-xl font-semibold">{userData.name}</p>
                        <p className="text-gray-200">{userData.email}</p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-6 mb-4 p-8">
                      <div
                        className="flex flex-row gap-6 hover:scale-105 transition-transform duration-200"
                        onClick={() =>
                          navigate(
                            userData.role === "vendor" ? "/vendor" : "/buyer"
                          )
                        }
                      >   
                        <p className="font-outfit text-lg text-white flex gap-3"><img src={profileIcon} alt="" />
                          Profile
                        </p>
                      </div>
                      {userData.role === "vendor" && (
                        <div className="flex flex-row gap-6 hover:scale-105 transition-transform duration-200"
                        onClick={() => navigate("/sellerDashboard")}
                        >  
                          <a className="font-outfit text-lg text-white flex gap-3"><img src={Bag} alt="" />
                            My Shop
                          </a>
                        </div>
                      )}
                      <div
                        className="flex flex-row gap-6 hover:scale-105 transition-transform duration-200"
                        onClick={handleLogout}
                      >
                        <a href="" className="font-outfit text-lg text-white flex gap-3"><img src={logout} alt="" />Logout</a>
                      </div>
                    </div>
                  </div>
                )}
        </div>
      ) : (
        <a href="/login" className="hidden lg:flex items-center bg-secondary px-6 py-2 rounded-lg mr-36 mb-4 md:mb-0 md:text-lg cursor-pointer">
          Login
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      )}

      <div className="flex lg:hidden items-center space-x-8">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl sm:pr-6 md:pr-12">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-primary text-white p-8 sm:p-6 md:p-8 flex flex-col space-y-4 z-50">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="#AboutCrafters" className="hover:text-gray-300">About Us</a>
            <a href="/products" className="hover:text-gray-300">Products</a>
            <a href="#ContactSection" className="hover:text-gray-300">Contact Us</a>
            {userData ? (
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-gray-300">Cartitems({cartsNumber})</a>
                <a href="#" className="hover:text-gray-300">Wishlists({wishlistsNumber})</a>
                <div
                  className="flex flex-row gap-6 hover:scale-105 transition-transform duration-200"
                  onClick={handleLogout}>
                  <a href="" className="hover:text-gray-300">Logout</a>
                </div>
              </div> 
            ):(
              <a href="/login" className="pr-60 hover:text-gray-300">Login</a>
            )}
          </nav>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center"
            >
              {selectedLanguage}
              <i className="fas fa-chevron-down ml-2"></i>
            </button>
            {isLanguageDropdownOpen && (
              <div className="mt-2 w-28 bg-primary border border-border rounded shadow-lg">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => handleLanguageChange('ENG')}
                      className="block px-4 py-2 w-full text-left"
                    >
                      ENG
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLanguageChange('FR')}
                      className="block px-4 py-2 w-full text-left"
                    >
                      FR
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLanguageChange('KINY')}
                      className="block px-4 py-2 w-full text-left"
                    >
                      KINY
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;