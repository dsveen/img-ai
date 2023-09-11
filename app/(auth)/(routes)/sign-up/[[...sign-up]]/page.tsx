import { SignUp } from "@clerk/nextjs";
import {Empty} from "@/components/ui/empty";

export default function Page() {
  return (
<div className="min-h-screen flex items-center justify-center">
        <div className="container">
            <div >
                <div className="bg-white  rounded mb-6">
                    <div className="grid md:grid-cols-12">
                        <div className="bg-white p-12 rounded-s xl:col-span-5 md:col-span-6">
                            <SignUp />
                        </div>
                        <div className="hidden md:block xl:col-span-7 md:col-span-6">
                            <div className="max-w-[80%] mx-auto">
                                <div className="my-12 py-12">
                                    <div className="flex items-center justify-center h-full">
                                        <div className="swiper" id="swiper_one">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="swiper-slide-content">
                                                        <div className="text-center w-3/5 mx-auto">
                                                            <img src="assets/images/hero/saas1.png" className="w-full" />
                                                        </div>
                                                        <div className="text-center my-6 pb-12">
                                                            <h5 className="font-medium text-base/[1.6] text-gray-600 my-2.5">Manage your saas business with ease</h5>
                                                            <p className="text-sm/[1.6] text-gray-500 mb-4">Make your saas application
                                                                stand out with high-quality landing page
                                                                designed and developed by
                                                                professional.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="swiper-slide-content">
                                                        <div className="text-center w-3/5 mx-auto">
                                                            <img src="assets/images/hero/saas2.png" className="w-full" />
                                                        </div>
                                                        <div className="text-center my-6 pb-12">
                                                            <h5 className="font-medium text-base/[1.6] text-gray-600 my-2.5">The best way to showcase your mobile app</h5>
                                                            <p className="text-sm/[1.6] text-gray-500">
                                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="swiper-slide-content">
                                                        <div className="text-center w-3/5 mx-auto">
                                                            <img src="assets/images/hero/saas3.png" className="w-full" />
                                                        </div>
                                                        <div className="text-center my-6 pb-12">
                                                            <h5 className="font-medium text-base/[1.6] text-gray-600 my-2.5">Smart Solution that convert Lead to Customer</h5>
                                                            <p className="text-sm/[1.6] text-gray-500">
                                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-pagination !bottom-0"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center">
                    <p className="text-gray-500 leading-6 text-base">Have an account? <a href="/sign-in" className="text-primary font-semibold ms-1">Sign In</a></p>
                </div>
            </div>
        </div>
    </div>
  );
}
