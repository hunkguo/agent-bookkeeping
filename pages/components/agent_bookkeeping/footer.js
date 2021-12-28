
export default function Footer() {
    return (  
        <>
        <footer class="text-gray-600 body-font">
        <div class="border-t border-gray-200">
            <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label for="footer-field" class="leading-7 text-sm text-gray-600">联系我们</label>
                <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" control-id="ControlID-121"/>
                </div>
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">提交</button>
                <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">如果您有业务需求，请联系我们。即使您仅仅是来咨询，我们也会感到万分荣幸！
                </p>
            </div>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                </svg>
                </a>
                </span>
            </div>
        </div>
        <div class="bg-gray-100">
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@hunk</a>
                </p>
                
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">「Powered by  
                <a
                    href="https://webify.cloudbase.net/"
                > CloudBase Webify</a>」
                </span>
            </div>
        </div>
        </footer>
        </>
    )
}
