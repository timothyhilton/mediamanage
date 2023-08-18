import FAQ from "../components/FrontPage/FAQ"
import Feature from "../components/FrontPage/Feature"

function FrontPage() {
  
    return (
        <>
            <div className="overflow-hidden">
                <section className="flex flex-col w-full overflow-hidden bg-white lg:flex-row sm:mx-auto">
                    <div className="flex justify-end p-8 bg-white lg:py-32 lg:px-16 lg:pl-10 lg:w-1/2">
                        <div className="flex flex-col items-start justify-center w-full lg:max-w-lg">
                            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl lg:text-7xl 2xl:mb-3 line-clamp-2">Speed up your small business</h5>
                            <p className="py-5 mb-5 text-gray-600 lg:text-xl">
                                Manage all of your small business' social media accounts, posts and comments all in one place.<br/></p>
                            <div className="flex items-center">
                                <button type="submit" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none" data-rounded="rounded-lg" data-primary="gray-900">
                                    Get started
                                </button>
                                <a href="/#features" aria-label="" className="inline-flex items-center text-lg text-gray-900 underline transition-colors duration-200" data-primary="gray-900">
                                    Learn More
                                    <svg className="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" className="">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img src="/hero.jpg" alt="Hero Image" className="object-cover w-full lg:absolute h-80 lg:h-full"></img>
                    </div>
                </section>
                <section className="w-full pt-8 pb-16 bg-gray-100">
                    <div className="flex flex-col items-center max-w-6xl px-10 mx-auto xl:px-0">
                        <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">Utilizes technologies from</p>
                        <div className="flex flex-col flex-wrap justify-center sm:flex-row sm:space-x-16">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 mt-8 text-gray-400 fill-current" viewBox="0 0 2476 2476"><path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 mt-8 text-gray-400 fill-current" viewBox="5.368 5.414 53.9 53.9"><path fill="#FFF" d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"/><path fill="#E8E0E0" d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"/><path d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 mt-8 text-gray-400 fill-current" viewBox="0 0 266.895 266.895"><path d="M252.164 266.895c8.134 0 14.729-6.596 14.729-14.73V14.73c0-8.137-6.596-14.73-14.729-14.73H14.73C6.593 0 0 6.594 0 14.73v237.434c0 8.135 6.593 14.73 14.73 14.73h237.434z"/><path fill="#fff" d="M184.152 266.895V163.539h34.692l5.194-40.28h-39.887V97.542c0-11.662 3.238-19.609 19.962-19.609l21.329-.01V41.897c-3.689-.49-16.351-1.587-31.08-1.587-30.753 0-51.807 18.771-51.807 53.244v29.705h-34.781v40.28h34.781v103.355h41.597z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 mt-8 text-gray-400 fill-current stroke-none stroke-1 opacity-100 [stroke-dasharray:none] [strokeLinecap:butt] [stroke-dashoffset:0] [stroke-linejoin:miter] [stroke-miterlimit:4] [fill-rule:evenodd]" viewBox="0 0 250 80" xmlSpace="preserve"><path d="M49.921 7.488c2.547 0 4.803 1.28 6.22 3.296V0h2.901v24h-2.9v-2.784c-1.418 2.02-3.674 3.296-6.22 3.296-4.77 0-8.799-3.744-8.799-8.512 0-4.767 4.028-8.512 8.798-8.512Zm0 14.464c3.771 0 6.22-2.528 6.22-5.952 0-3.423-2.449-5.952-6.22-5.952-3.35 0-5.898 2.4-5.898 5.952 0 3.553 2.547 5.952 5.898 5.952ZM36.29 10.784c-1.418-2.016-3.674-3.296-6.22-3.296-4.77 0-8.799 3.745-8.799 8.512 0 4.768 4.029 8.512 8.8 8.512 2.513 0 4.766-1.276 6.22-3.296V24h2.9V8h-2.9v2.784Zm0 5.216c0 3.392-2.482 5.952-6.22 5.952-3.351 0-5.898-2.4-5.898-5.952s2.547-5.952 5.899-5.952c3.77 0 6.22 2.528 6.22 5.952ZM0 15.582v.866a4.054 4.054 0 0 1 2.85 1.174 4 4 0 0 1 1.178 2.831h.807c0-1.06.425-2.078 1.18-2.828a4.044 4.044 0 0 1 2.848-1.171v-.866a4.054 4.054 0 0 1-2.85-1.174 3.998 3.998 0 0 1-1.178-2.832h-.807c0 1.06-.424 2.078-1.18 2.828A4.044 4.044 0 0 1 0 15.582Zm10.957-5.502H4.028V7.52h6.93c4.866 0 8.702 3.809 8.702 8.48 0 4.672-3.836 8.48-8.703 8.48H6.93V32h-2.9V21.92h6.928c3.385 0 5.802-2.399 5.802-5.92 0-3.52-2.418-5.92-5.802-5.92Zm65.361.704c-1.418-2.016-3.674-3.296-6.22-3.296-4.77 0-8.798 3.745-8.798 8.512 0 4.768 4.028 8.512 8.798 8.512 2.546 0 4.802-1.276 6.22-3.296V24h2.901V0h-2.9v10.784Zm0 5.216c0 3.424-2.45 5.952-6.22 5.952-3.352 0-5.898-2.4-5.898-5.952s2.546-5.952 5.898-5.952c3.77 0 6.22 2.529 6.22 5.952Zm5.798 8V0h2.901v24h-2.901Zm21.885-6.879c0-5.28-2.675-9.6-8.25-9.6-4.866 0-8.637 3.873-8.637 8.48s3.77 8.48 8.637 8.48c3.868 0 6.735-2.432 7.831-4.896h-3.126c-1.16 1.76-2.706 2.656-4.705 2.656-2.9 0-5.221-2.017-5.672-5.12h13.922Zm-8.25-7.36c3.094 0 5.35 2.496 5.35 5.12H90.079c.45-3.1 2.772-5.12 5.672-5.12Z" transform="matrix(2.4 0 0 2.4 .94 .83)" vectorEffect="non-scaling-stroke"/></svg>
                            
                        </div>
                    </div>
                </section>
                <section className="box-border relative w-full font-sans leading-6 text-gray-700 bg-white border-0 border-gray-200 border-solid">
                    <div className="box-border flex flex-col items-center px-8 py-20 mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center md:py-24" id="features">
                        <div className="relative pb-10">
                            <h5 className="w-full mx-0 mt-0 mb-4 font-sans font-bold text-center text-purple-700 border-0 border-gray-200" data-primary="purple-700">
                                Features
                            </h5>
                            <h2 className="w-full m-0 font-sans text-4xl font-black leading-loose tracking-wide text-center text-gray-700 border-0 border-gray-200 sm:text-5xl">
                                Amazing Features
                            </h2>
                            <p className="w-full max-w-xl mx-0 mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-gray-400 border-0 border-gray-200 lg:text-lg md:text-base">
                                Jam packed full of all the best features for all of the best small businesses
                            </p>
                        </div>
                    </div>

                    <div className="z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-9">
                        <Feature 
                            name="Instagram integration"
                            description="Full compatiblity with all of Instagram: Reels, posts, comments and more."
                            svg={<svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-400 align-middle stroke-current w-7 h-7" viewBox="0 0 2476 2476"><path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"/></svg>}
                        />
                        <Feature
                            name="Youtube integration"
                            description="Full Youtube compatiblity with all features such as community posts, videos, shorts and comments."
                            svg={<svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-400 align-middle stroke-current w-7 h-7" viewBox="5.368 5.414 53.9 53.9"><path fill="#FFF" d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"/><path fill="#E8E0E0" d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"/><path d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"/></svg>}
                        />
                        <Feature
                            name="TikTok integration"
                            description="Complete compatiblity with all TikTok features. You get the jist."
                            svg={<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" className="leading-6 text-center text-gray-400 align-middle stroke-current w-7 h-7 opacity-100 stroke-none stroke-1 [stroke-dasharray:none] [strokeLinecap:butt] [stroke-dashoffset:0] [stroke-linejoin:miter] [stroke-miterlimit:4] [fill:#000] [fill-rule:nonzero] stroke-0 [fill-rule:evenodd]" viewBox="0 0 500 500"><path d="M0 6.643C0 2.974 3 0 6.699 0c3.7 0 6.699 2.974 6.699 6.643 0 3.669-3 6.643-6.699 6.643-3.7 0-6.699-2.974-6.699-6.643z" transform="matrix(1.98 0 0 1.98 295.454 417.633)" vectorEffect="non-scaling-stroke"/><path d="M161.167 81.186c10.944 7.819 24.352 12.42 38.832 12.42V65.755a39.26 39.26 0 0 1-8.155-.853v21.923c-14.479 0-27.885-4.601-38.832-12.42v56.835c0 28.432-23.06 51.479-51.505 51.479-10.613 0-20.478-3.207-28.673-8.707C82.187 183.57 95.23 189.5 109.66 189.5c28.447 0 51.508-23.047 51.508-51.48V81.186zm10.06-28.098c-5.593-6.107-9.265-14-10.06-22.726V26.78h-7.728c1.945 11.09 8.58 20.565 17.788 26.308zm-80.402 99.107a23.445 23.445 0 0 1-4.806-14.256c0-13.004 10.548-23.547 23.561-23.547a23.6 23.6 0 0 1 7.147 1.103V87.022a51.97 51.97 0 0 0-8.152-.469v22.162a23.619 23.619 0 0 0-7.15-1.103c-13.013 0-23.56 10.543-23.56 23.548 0 9.195 5.272 17.157 12.96 21.035z" transform="matrix(2.84 0 0 2.84 -105.003 -47.468)" vectorEffect="non-scaling-stroke"/><path d="M153.012 74.405c10.947 7.819 24.353 12.42 38.832 12.42V64.902c-8.082-1.72-15.237-5.942-20.617-11.814-9.208-5.743-15.843-15.218-17.788-26.308H133.14v111.239c-.046 12.968-10.576 23.468-23.561 23.468-7.652 0-14.45-3.645-18.755-9.292-7.688-3.878-12.96-11.84-12.96-21.035 0-13.005 10.547-23.548 23.56-23.548 2.493 0 4.896.388 7.15 1.103V86.553c-27.945.577-50.42 23.399-50.42 51.467 0 14.011 5.597 26.713 14.68 35.993 8.195 5.5 18.06 8.707 28.673 8.707 28.445 0 51.505-23.048 51.505-51.479z" transform="matrix(2.84 0 0 2.84 -105.02 -47.48)" vectorEffect="non-scaling-stroke"/><path d="M191.844 64.902v-5.928a38.84 38.84 0 0 1-20.617-5.887 38.948 38.948 0 0 0 20.617 11.815zM153.439 26.78a39.524 39.524 0 0 1-.427-3.198V20h-28.028v111.24c-.045 12.967-10.574 23.467-23.56 23.467-3.813 0-7.412-.904-10.6-2.512 4.305 5.647 11.103 9.292 18.755 9.292 12.984 0 23.515-10.5 23.561-23.468V26.78zm-44.864 59.773v-6.311a51.97 51.97 0 0 0-7.067-.479C73.06 79.763 50 102.811 50 131.24c0 17.824 9.063 33.532 22.835 42.772-9.083-9.28-14.68-21.982-14.68-35.993 0-28.067 22.474-50.889 50.42-51.466z" transform="matrix(2.84 0 0 2.84 -105.023 -47.508)" vectorEffect="non-scaling-stroke"/></svg>}
                        />
                        <Feature
                            name="Secure"
                            description="Through the use of API's we do not require the password to any of your accounts."
                            svg={<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" className="leading-6 text-center text-gray-400 align-middle stroke-current w-7 h-7 opacity-100 stroke=none stroke-1 [stroke-dasharray:none] [strokeLinecap:butt] [stroke-dashoffset:0] [stroke-linejoin:miter] [stroke-miterlimit:4] [fill:#000] [fill-rule:nonzero]" viewBox="0 0 500 500"><path d="M505.17 227.5v-72.332C504.002 68.832 435.17-.002 350-.002c-85.17 0-154 68.832-154 154v72.332c-21 0-37.332 16.332-37.332 37.332v257.83c0 21 16.332 37.332 37.332 37.332h309.17c21 0 37.332-16.332 37.332-37.332v-256.66c-1.168-21-17.5-37.332-37.332-37.332zM385 462h-70l10.5-64.168c-9.332-7-15.168-18.668-15.168-31.5 0-22.168 18.668-40.832 40.832-40.832s40.832 18.668 40.832 40.832c0 12.832-5.832 24.5-15.168 31.5zm70-234.5H245v-72.332c0-57.168 46.668-105 105-105 57.168 0 105 46.668 105 105z" transform="matrix(.82 0 0 .82 -37.004 20.314)" vectorEffect="non-scaling-stroke"/></svg>}
                        />
                        <Feature
                            name="Fast"
                            description="Saves you tons of time so you can get back to doing what you love."
                            svg={<svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none" /><path d="M13 3v7h6l-8 11v-7H5l8-11" /></svg>}
                        />
                        <Feature
                            name="Manage employees"
                            description="Stop giving passwords to your employees. Instead, give them permissions to do only what you allow"
                            svg={<svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none" /><rect x="3" y="4" width="18" height="8" rx="3" /><rect x="3" y="12" width="18" height="8" rx="3" /><path d="M7 8v.01M7 16v.01" /></svg>}
                        />
                    </div>

                    <div className="absolute top-0 left-0 -ml-56 opacity-25 w-96 h-96">
                        <svg className="text-pink-500 opacity-50 fill-current w-88 h-88" data-primary="pink-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5,-24.7C35.8,-15.2,48.9,-7.6,50.6,1.7C52.3,11,42.6,22,32.3,31.2C22,40.4,11,47.8,-1.9,49.8C-14.9,51.7,-29.7,48.1,-41.1,38.9C-52.5,29.7,-60.5,14.9,-60.3,0.3C-60,-14.3,-51.5,-28.6,-40,-38.1C-28.6,-47.6,-14.3,-52.3,-3.4,-48.9C7.6,-45.5,15.2,-34.2,25.5,-24.7Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                    <div className="absolute top-0 right-0 -mb-56 opacity-25 w-96 h-96 -mr-72">
                        <svg className="w-full h-full text-yellow-500 opacity-50 fill-current" data-primary="yellow-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.3,-48.3C55.3,-33.4,60.4,-16.7,62.2,1.8C64,20.3,62.5,40.6,51.6,55.3C40.6,70,20.3,79,2.3,76.7C-15.7,74.4,-31.4,60.7,-46.7,46C-62,31.4,-76.9,15.7,-78.5,-1.6C-80,-18.8,-68.2,-37.6,-52.9,-52.5C-37.6,-67.5,-18.8,-78.5,-1.1,-77.5C16.7,-76.4,33.4,-63.3,44.3,-48.3Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </section>
                <section className="py-16 bg-white md:py-20 lg:py-24">
                    <div className="max-w-5xl px-12 mx-auto xl:px-0">

                        <h2 className="text-3xl font-black md:text-4xl lg:text-6xl xl:text-7xl">Frequently Asked Questions</h2>
                        <p className="mt-4 text-xl font-thin text-gray-700 lg:text-2xl">Here are some of the most common frequently asked questions</p>

                        <div className="relative mt-12 space-y-3">
                            <FAQ 
                                question = "Which social media platforms do you support?"
                                answer = "We support Tiktok, Instagram, Youtube (+ Youtube Shorts) currently and are working on increasing the amount of supported platforms soon!"
                            />
                            <FAQ
                                question = "What if I like making shortform content for my company in Tiktok's built in editor?"
                                answer = "You can clone any video posted to any of your social media platforms to accounts on other platforms. Say you edit and post a Tiktok, with the press of a few buttons it can be automatically reposted on Instagram Reels, Youtube Shorts, etc."
                            />
                            <FAQ
                                question = "Do you have a mobile app?"
                                answer = "We currently do not have a mobile app, but it's in the works"
                            />
                        </div>
                    </div>
                </section>


                <div id="pricing" className="relative">

                    <div className="relative z-20 px-8 pb-8 mx-auto max-w-7xl xl:px-5">
                        <div className="w-full text-left sm:text-center">
                            <h2 className="pt-12 text-4xl font-extrabold text-gray-900 lg:text-5xl">Example Pricing</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrontPage
