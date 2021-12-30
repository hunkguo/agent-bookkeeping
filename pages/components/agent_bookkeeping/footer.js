
import { motion } from "framer-motion"
export default function Footer() {
    return (  
        <>
        <footer class="text-gray-400 body-font bg-gray-900">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}  
            >
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@hunk</a>
                </p>
                
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">「Powered by  
                <a
                    href="https://webify.cloudbase.net/"
                > CloudBase Webify</a>」
                </span>
            </div>
            </motion.div>
        </footer>
        </>
    )
}
