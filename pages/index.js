import styles from '../styles/Home.module.css'
import Header from './components/agent_bookkeeping/hearder'
import Footer from './components/agent_bookkeeping/footer'
import { motion } from "framer-motion"


export default function AgentBookkeeping() {
    const variants = {
      container: {
        animate: {
          transition: {
            staggerChildren: 0.5
          }
        }
      },
      div: {
        initial: {
          opacity: 0,
          x: -200
        },
    
        animate: {
          opacity: 1,
          x: 0
        }
      }
    };
    return (
        <>
        <Header/>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <motion.div class="flex flex-col text-center w-full mb-20"
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}  >
                <h2 class="text-indigo-500 tracking-widest font-medium title-font mb-1">张 慧</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"><span class="text-xs">准      </span>注册会计师</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">If there is an opportunity for me to do it. I am ready!</p>
              </motion.div>
              <motion.div class="flex flex-wrap"
                // initial={{ opacity: 0, x: -200 }}
                // animate={{ opacity: 1, x: 0 }}  
                initial="initial"
                animate="animate"
                variants={variants.container}   
              >
                
                <motion.div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
                variants={variants.div}   
                >
                  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">丰富的工作经验</h2>
                  <p class="leading-relaxed text-base mb-4">拥有六年的财务工作经验，熟悉国家会计制度和准则及相关税法政策，能做好事前的税务策划、财务预算，合理安排公司的税负，协调处理好公司与银行、税局、工商等部门的关系，减少公司的财务和税务风险。</p>
                </motion.div>
                
                <motion.div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60" variants={variants.div}   >
                  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">善于从全局出发考虑问题</h2>
                  <p class="leading-relaxed text-base mb-4">能够独立全面处理公司的全盘账务，对一般纳税人企业税务操作熟悉，并对财务报表有良好的分析能力。</p>
                </motion.div>
                
                <motion.div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60" variants={variants.div} >
                  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">工作有思想有活力</h2>
                  <p class="leading-relaxed text-base mb-4">本人性格开朗具亲和力，乐观耿直，诚实守信；能吃苦耐劳，善于与人沟通，有较强的工作责任心和敬业精神。</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">职场经历</h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/2 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img class="h-200 rounded w-200 object-cover object-center mb-6" src="https://image.qcc.com/auto/7fc12fb293b8d939f87dad27e588f375.jpg?x-oss-process=style/logo_200" alt="content"/>
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">南阳方圆</h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4"></h2>
                  <p class="leading-relaxed text-base">成立于1998-06-01，企业地址位于南阳市文化路189号。</p>
                </div>
              </div>
              <div class="xl:w-1/2 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img class="h-200 rounded w-200 object-cover object-center mb-6" src="https://image.qcc.com/logo/c725d5f9f4e43e6eb982400e5e663ef9.jpg?x-oss-process=style/logo_200" alt="content"/>
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">博集天卷</h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4"></h2>
                  <p class="leading-relaxed text-base">国有控股企业，主营业务为文化传媒、内容提供、出版创意、数字出版以及作家经纪和文化服务等。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
          

        <section class="text-gray-600 body-font ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">执业资格</h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-medium title-font mb-2 text-gray-900">初级会计师</h2>
                <p class="leading-relaxed text-base">2018年通过</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-medium title-font mb-2 text-gray-900 ">中级会计师</h2>
                <p class="leading-relaxed text-base">2021年通过</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">注册会计师</h2>
                <p class="leading-relaxed text-base">预计2022年通过</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-12">
              <div class="p-12 md:w-1/2 flex flex-col items-start">
                <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Knowledges</span>
                <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">如何看待所谓的税务筹划，分享17个提醒！</h2>
                <p class="leading-relaxed mb-8">提醒一：做好税务筹划，财务不仅是需要深刻了解税收政策、税法、其他相关的一些法律法规等，还要与当地税务局沟通，了解相关税务处理时的征管口径。有些人拿到税收优惠政策，会生搬硬套地运用，结果漏洞百出、麻烦不断。</p>
                <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                  <a class="text-indigo-500 inline-flex items-center" href="/How_to_view_the_so-called_tax_planning">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-12 md:w-1/2 flex flex-col items-start">
                <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Knowledges</span>
                <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">“买一送一”如何做账？</h2>
                <p class="leading-relaxed mb-8">对于企业来说，买一送一作为一种促销方式，在促销时更是不可或缺。此类行为的发票开具方式和会计处理将直接影响税务机关的定义是否符合目视检查。对于销售，企业需要缴纳增值税和企业所得税。那么应该怎样做才能避免税务公司定义的差异呢？</p>
                <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                  <a class="text-indigo-500 inline-flex items-center" href="http://blog.fatax.cn/2022/01/05/Buy-one-get-one-free-how-do-you-bill-and-do-the-billing/">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
        </>
    
    )
}