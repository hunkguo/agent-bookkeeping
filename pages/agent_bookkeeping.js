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
          <section class="text-gray-400 body-font bg-gray-900">
            <div class="container px-5 py-24 mx-auto">
              <motion.div class="flex flex-col text-center w-full mb-20"
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}  >
                <h2 class="text-blue-400 tracking-widest font-medium title-font mb-1">张 慧</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"><span class="text-xs">准      </span>注册会计师</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">If there is an opportunity for me to do it. I am ready!</p>
              </motion.div>
              <motion.div class="flex flex-wrap"
                // initial={{ opacity: 0, x: -200 }}
                // animate={{ opacity: 1, x: 0 }}  
                initial="initial"
                animate="animate"
                variants={variants.container}   
              >
                
                <motion.div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800"
                variants={variants.div}   
                >
                  <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">丰富的工作经验</h2>
                  <p class="leading-relaxed text-base mb-4">拥有六年的财务工作经验，熟悉国家会计制度和准则及相关税法政策，能做好事前的税务策划、财务预算，合理安排公司的税负，协调处理好公司与银行、税局、工商等部门的关系，减少公司的财务和税务风险。</p>
                </motion.div>
                
                <motion.div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800" variants={variants.div}   >
                  <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">善于从全局出发考虑问题</h2>
                  <p class="leading-relaxed text-base mb-4">能够独立全面处理公司的全盘账务，对一般纳税人企业税务操作熟悉，并对财务报表有良好的分析能力。</p>
                </motion.div>
                
                <motion.div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800" variants={variants.div} >
                  <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">工作有思想有活力</h2>
                  <p class="leading-relaxed text-base mb-4">本人性格开朗具亲和力，乐观耿直，诚实守信；能吃苦耐劳，善于与人沟通，有较强的工作责任心和敬业精神。</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

        <Footer/>
        </>
    
    )
}