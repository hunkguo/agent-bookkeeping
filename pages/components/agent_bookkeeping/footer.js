
import { motion } from "framer-motion"
export default function Footer() {
    return (  
        <>
        <footer class="text-gray-600 body-font">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}  
            >
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span class="ml-3 text-xl">河南 南阳</span>
                </a>
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span class="ml-3 text-xl">18237715216</span>
                </a>
                <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@hunk</a>
                </p>
                
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a
                    href="https://webify.cloudbase.net/"
                > 「Powered by CloudBase Webify」</a>
                </span>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://beian.miit.gov.cn/" target="_blank">您的备案号</a>
                    <a href="https://beian.miit.gov.cn/" target="_blank">粤B2-20****59-1</a>
                </span>

            </div>
            </motion.div>
        </footer>
        </>
    )
}
