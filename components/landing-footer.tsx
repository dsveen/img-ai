"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingFooter = () => {
  const { isSignedIn } = useAuth();

  return (
    <footer className="bg-gray-100">

        <div className="py-6">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center">
                    <div>
                        <h1 className="text-2xl font-medium mt-3 mb-2">Ready to get started?</h1>

                    </div>
                    <div className="flex flex-wrap items-center justify-start lg:justify-end gap-7 mt-5 lg:mt-0">
                        <button className="flex items-center">
                            <a href="#" className="bg-primary text-white rounded-full hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4">Get Started</a>
                        </button>
                        <a href="#" className="transition-all hover:text-primary">How It Works</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-b"></div>

        <div className="container">

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 py-6">
                <div>
                    <a href="index.html">
                        <img src="/assets/images/logo-dark.png" className="h-8" />
                    </a>
                    <p className="text-gray-500/80 mt-5 w-4/5">Make your web application stand out with high-quality landing page</p>
                </div>

                <div>
                    <div className="flex flex-col sm:flex-row gap-14 flex-wrap sm:flex-nowrap justify-between">

                        <div>
                            <div className="flex flex-col gap-3">
                                <h5 className="mb-3 uppercase">PLATFORM</h5>
                                <div className="text-gray-500/80"><a href="#">Demo</a></div>
                                <div className="text-gray-500/80"><a href="#">Pricing</a></div>
                                <div className="text-gray-500/80"><a href="#">Integrations</a></div>
                                <div className="text-gray-500/80"><a href="#">Status</a></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-3">
                                <h5 className="mb-3 uppercase">COMPANY</h5>
                                <div className="text-gray-500/80"><a href="#">About us</a></div>
                                <div className="text-gray-500/80"><a href="#">Career</a></div>
                                <div className="text-gray-500/80"><a href="#">Contact Us</a></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-3">
                                <h5 className="mb-3 uppercase">LEGAL</h5>
                                <div className="text-gray-500/80"><a href="#">Usage Policy</a></div>
                                <div className="text-gray-500/80"><a href="#">Privacy Policy</a></div>
                                <div className="text-gray-500/80"><a href="#">Terms of Service</a></div>
                                <div className="text-gray-500/80"><a href="#">Trust</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b"></div>

            <div className="flex justify-center gap-6 py-5">
                <p className="text-gray-500/80 text-sm">
                    <script>document.write(new Date().getFullYear())</script>© XXXXX. All rights reserved.
                </p>
            </div>
        </div>

    </footer>
      );
    };