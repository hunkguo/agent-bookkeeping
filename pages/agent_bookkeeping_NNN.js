import styles from '../styles/Home.module.css'
import Header from './components/agent_bookkeeping/hearder'
import Footer from './components/agent_bookkeeping/footer'


export default function AgentBookkeeping() {
    return (
        <>
        <Header/>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">创业一路，宜通伴您前行</h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">XX财务  您身边的财税管家</p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-3 md:w-1/4 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">代理记账</h2>
                  <p class="leading-relaxed text-base">一站式托管记账服务</p>
                </div>
              </div>
              <div class="p-3 md:w-1/4 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">公司注册</h2>
                  <p class="leading-relaxed text-base">开启事业第一步</p>
                </div>
              </div>
              <div class="p-3 md:w-1/4 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">银行开户</h2>
                  <p class="leading-relaxed text-base">快速开通银行对公基本账户</p>
                </div>
              </div>
              <div class="p-3 md:w-1/4 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">商标注册</h2>
                  <p class="leading-relaxed text-base">保护企业知识产权</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">1对1顾问服务</h2>
                <p class="leading-relaxed text-base">客户至上服务理念</p>
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">5家商会合作机构</h2>
                <p class="leading-relaxed text-base">联手合作提供更佳入驻体验</p>
              </div>
              <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                  <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">13年行业经验</h2>
                <p class="leading-relaxed text-base">专注才能更专业</p>
              </div>
            </div>            
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">咨询沟通</h2>
                  <p class="leading-relaxed">注册相关事宜进行沟通</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">资料准备</h2>
                  <p class="leading-relaxed">准备办理业务所需要的资料</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">签订合同</h2>
                  <p class="leading-relaxed">签订正规合作合同保障权益</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">开始办理</h2>
                  <p class="leading-relaxed">准备齐全快速为您办理</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">5</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">进度汇报</h2>
                  <p class="leading-relaxed">每个进度清晰明了</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">6</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">完成交接</h2>
                  <p class="leading-relaxed">办理完成交接材料</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">核心业务</h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">PRIMARY BUSINESS</p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-3 lg:w-1/3 sm:w-1/2 w-full">
                <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">工商服务</h2>
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>公司注册</a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    变更公司名称
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    变更法人
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    变更经营范围
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    变更注册资金
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    变更股东
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>            
                    工商年报
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    公司注销
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    公司转让
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    变更地址
                  </a>
                </nav>
              </div>

              
              <div class="p-3 lg:w-1/3 sm:w-1/2 w-full">
                <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">财税服务</h2>
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    代理记账
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>申请一般纳税人
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>汇算清缴
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>税务变更
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>解除异常
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>收税筹划
                  </a>
                </nav>
              </div>
              <div class="p-3 lg:w-1/3 sm:w-1/2 w-full">
                <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">企业服务</h2>
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>银行开户
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>商标注册
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>社保开户
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>公积金开户
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>场地证明
                  </a>
                  <a>
                    <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>食品经营许可证
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <Footer/>
        </>
    
    )
}