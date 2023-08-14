import React from 'react'
import { Link } from 'react-router-dom';
import CategoryMenShoes from "../Assets/CategoryMen/CategoryMenShoes.webp"
import CategoryMenSuits from "../Assets/CategoryMen/CategoryMenSuits.webp";
import CategoryMenAccessories from "../Assets/CategoryMen/CategoryMenAccessories.webp";
import CategoryMenBrands from "../Assets/CategoryMen/CategoryMenBrands.webp";
import CategoryMenNewin from "../Assets/CategoryMen/CategoryMenNewin.webp";
import CategoryMenSports from "../Assets/CategoryMen/CategoryMenSports.webp";
import CategoryMenJackets from "../Assets/CategoryMen/CategoryMenJackets.webp"
import CategoryMenHoodies from "../Assets/CategoryMen/CategoryMenHoodies.webp";
const MenCategories = () => {
  return (
    <div>
      <div className="flex text-left ml-4 mt-12 sm:ml-52 font-mono text-2xl text-gray-600">
        Categories
      </div>
      <div className=" items-center mx-auto container justify-between pb-12">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <ul className="flex flex-wrap sm:pl-[80px]  ">
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href="/categories/men/27110">
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenNewin}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to="/categories/men/27110">
                    Newin
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href="/categories/men/27111">
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenBrands}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to="/categories/men/27111">
                    Designer Brands
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href="/categories/men/4210">
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenAccessories}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to="/categories/men/4210">
                    Accessories
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href="/categories/men/5678">
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenSuits}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to="/categories/men/5678">
                    Suits
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href="/categories/men/26090">
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenSports}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to="/categories/men/26090">
                    Sports
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href="/categories/men/4209">
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenShoes}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to="/categories/men/4209">
                    Shoes
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href="/categories/men/3606">
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenJackets}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="">
                  <Link className="truncate-2-lines" to="/categories/men/3606">
                    Jacekts & Coats
                  </Link>
                </button>
              </div>
            </li>
            <li className="ml-3 mr-1 sm:ml-0 sm:mr-4 md:mr-14 pb-6 relative">
              <a href="/categories/men/5668">
                <img
                  className="w-[180px] h-[239px] sm:w-[280px] sm:h-[360px]  hover:shadow-lg cursor-pointer "
                  src={CategoryMenHoodies}
                  alt="img"
                />
              </a>
              <div className="absolute bottom-6 flex flex-col py-2 left-0 w-[180px] md:w-[280px] bg-gray-900/50 text-white text-md font-medium  cursor-pointer">
                <button className="hidden sm:block">
                  <Link className="truncate-2-lines" to="/categories/men/5668">
                    Hoodies & Sweatshirts
                  </Link>
                </button>
                <button className="sm:hidden">
                  <Link className="truncate-2-lines" to="/categories/men/5668">
                    Hoodies
                  </Link>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenCategories