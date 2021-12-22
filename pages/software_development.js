import styles from '../styles/Home.module.css'
import Header from './components/software_development/hearder'
import Footer from './components/software_development/footer'

export default function AgentBookkeeping() {
    return (
        <>
        <Header/>
        
          
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">老G软件工作室</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">创立于2015年1月20日，我们主要从事软件开发服务，为客户提供个性化定制服务，一对一开发和售后服务。</p>
            </div>
            <div class="flex flex-wrap">
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">网络爬虫开发</h2>
                <p class="leading-relaxed text-base mb-4"><b>高效采集</b>  充分利用golang协程的特性实现高并发，前期测试实现单台主机3小时采集13亿条链接。</p>
                <p class="leading-relaxed text-base mb-4"><b>规避验证</b> 通过分布式爬虫在保持采集速度的情况下降低采集频率，模仿真人操作浏览器获取数据。</p>
                <p class="leading-relaxed text-base mb-4"><b>数据清洗</b> 剔除无用数据，将有效数据入库。</p>
              </div>
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">小程序开发</h2>
                <p class="leading-relaxed text-base mb-4">垂直的行业解决方案，满足业务需求。</p>
                <p class="leading-relaxed text-base mb-4">提供电商、零售、工具、私欲流量、休闲娱乐行业解决方案</p>
              </div>
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">深度学习</h2>
                <p class="leading-relaxed text-base mb-4"><b>模型迭代及算法持续优化</b> 模型的组合(Ensemble)技术正变得越来越流行了，因为组合方法，仅需要付出少许偏见(bias)的代价，就能大大的减少算法的不确定性。在着名的Netflix算法竞赛中，冠军队以及成绩优异队伍们全都使用了组合模型方法，把超过100个模型合并在一起(在模型上叠加高层的模型形成组合)以提升效果。在人工智能用于实际应用时，从业者普遍都认为，未来的算法一定时会通过模型组合的方法来获得更好精度，但是这也会抬高非专业人员理解系统机制的门槛。</p>
                <p class="leading-relaxed text-base mb-4"><b>算力保障</b> 依赖Amazon EC2 G4ad实例强大的算力，部署机器学习模型，客户无需采购维护GPU集群。</p>
              </div>
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">量化交易系统</h2>
                <p class="leading-relaxed text-base mb-4"><b>数据仓库</b>  历史、实时数据存储和获取；时序数据库引擎；实时数据馈送。</p>
                <p class="leading-relaxed text-base mb-4"><b>策略开发</b>  模拟实时交易环境；对历史市场数据进行回测；支持股票、期货、债券、ETF、外汇和合成产品。</p>
                <p class="leading-relaxed text-base mb-4"><b>实盘部署方案</b>  能连接各大交易所进行自动算法交易；可配置全自动、半自动，和人工系统操作。</p>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap w-full">
              <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                    <p class="leading-relaxed">需求沟通</p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                    <p class="leading-relaxed">原型设计</p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                    <p class="leading-relaxed">架构接口设计</p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                    <p class="leading-relaxed">项目开发</p>
                  </div>
                </div>
                <div class="flex relative">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                    <p class="leading-relaxed">测试/交付</p>
                  </div>
                </div>
              </div>               
              <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/images/pexels-djordje-petrovic-2102416.jpg"></img>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/images/pexels-artem-podrez-8518620.jpg"></img>
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">超强用户体验</h1>
            <p class="mb-8 leading-relaxed">商业形式的改变，并未带来商业本质的改变，客户体验依然是成功的关键。通过我们的系统，访客拥有绝佳的浏览体验，轻松，安心的购物过程。高转化率和重复购买率。</p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/images/pexels-christina-morillo-1181675.jpg"></img>
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">高质量代码</h1>
            <p class="mb-8 leading-relaxed">我们的系统代码质量极高，我们从纯净的系统开发，没有加载任何低效的前端框架。各项测试都几乎是满分，能提高你的搜索引擎排名。</p>
          </div>
        </div>
      </section>


      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/images/pexels-panumas-nikhomkhai-1148820.jpg"></img>
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">兼容所有平台</h1>
            <p class="mb-8 leading-relaxed">我们的系统兼容所有的设备，并且是高质量的兼容，极高的响应速度。你如果对比我们和其他模板，就会发现，我们要远远比他们流畅。</p>
          </div>
        </div>
      </section>
      
        <Footer/>
        </>
    
    )
}