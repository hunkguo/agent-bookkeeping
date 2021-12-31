
import Header from './components/agent_bookkeeping/hearder'
import Footer from './components/agent_bookkeeping/footer'


export default function Content() {
    return (  
        <>
        <Header/>
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col w-full mb-20">
                <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">2021各行业最新“预警税负率”大全</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                金税三期施行以来税收评估的六大预警指标，建议会计人员学习收藏！
                </p>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    <img src="/images/a1efa907ly4gxsh3wh73bj20f60j3dib.jpg"/>
                    <img src="/images/a1efa907ly4gxsh3wkb6yj20f70m3whc.jpg"></img>
                    <img src="/images/a1efa907ly4gxsh3wjgvsj20f606wt9f.jpg"></img>
                </p>
                </div>
            </div>
            </section>
            <Footer/>
        </>
    )
}
