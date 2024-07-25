import React from 'react'
import Faqs from '../../Components/Faqs/Faqs'
import Post from '../BlogPost/Post'

function Resource() {
  return (
    <>
      <div className="mt-[72px]">
        <Post/>
      <div className="flex justify-center">
          <div className="container 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-[1200px] flex flex-wrap justify-between">
            <div className="container my-12 mx-auto px-4 md:px-12">
              <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {/* <!-- Column --> */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  {/* <!-- Article --> */}
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>
                    <header className="flex  flex-col px-2 pt-2 md:px-4 md:pt-4">
                      <p className="text-grey-darker text-sm">11/1/19</p>
                      <h1 className="text-lg pt-2 ">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Article Title hellow hellow
                        </a>
                      </h1>
                      
                    </header>

                    <p className=" justify-between leading-tight px-2 pt-2 md:px-4 md:pt-4  line-clamp-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quos dolor provident omnis beatae esse, alias voluptatum
                      iste accusamus, dolorum quisquam, aliquam obcaecati
                      placeat.
                    </p>
                    <div className="p-2 md:p-4 ">
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                      >
                        Read More
                      </button>
                    </div>
                  </article>
                  {/* <!-- END Article --> */}
                </div>
                {/* <!-- END Column --> */}
                {/* <!-- Column --> */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  {/* <!-- Article --> */}
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>
                    <header className="flex  flex-col px-2 pt-2 md:px-4 md:pt-4">
                      <p className="text-grey-darker text-sm">11/1/19</p>
                      <h1 className="text-lg pt-2 ">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Article Title hellow hellow
                        </a>
                      </h1>
                      
                    </header>

                    <p className=" justify-between leading-tight px-2 pt-2 md:px-4 md:pt-4  line-clamp-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quos dolor provident omnis beatae esse, alias voluptatum
                      iste accusamus, dolorum quisquam, aliquam obcaecati
                      placeat.
                    </p>
                    <div className="p-2 md:p-4 ">
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                      >
                        Read More
                      </button>
                    </div>
                  </article>
                  {/* <!-- END Article --> */}
                </div>
                {/* <!-- END Column --> */}
                {/* <!-- Column --> */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  {/* <!-- Article --> */}
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>
                    <header className="flex  flex-col px-2 pt-2 md:px-4 md:pt-4">
                      <p className="text-grey-darker text-sm">11/1/19</p>
                      <h1 className="text-lg pt-2 ">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Article Title hellow hellow
                        </a>
                      </h1>
                      
                    </header>

                    <p className=" justify-between leading-tight px-2 pt-2 md:px-4 md:pt-4  line-clamp-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quos dolor provident omnis beatae esse, alias voluptatum
                      iste accusamus, dolorum quisquam, aliquam obcaecati
                      placeat.
                    </p>
                    <div className="p-2 md:p-4 ">
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                      >
                        Read More
                      </button>
                    </div>
                  </article>
                  {/* <!-- END Article --> */}
                </div>
                {/* <!-- END Column --> */}
              </div>
            </div>
          </div>
        </div>
          <Faqs />
      </div>
    </>
  )
}

export default Resource