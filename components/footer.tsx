"use client";

export const Footer = () => {

  return (<section className="bg-white py-6 start-0 end-0">
        <div className="container">
            <div className="flex items-center flex-wrap">
                <div className="grow">
                    <div className="flex items-center gap-3">
                        <div className="inline-flex items-center"><a href="/legal/privacy">Privacy</a></div>  <i className="fa-solid fa-minus text-sm"></i>
                        <div className="inline-flex items-center"><a href="/legal/terms">Terms</a></div>
                    </div>
                </div>
                <div className="shrink md:text-end mt-4 lg:mt-0">
                    <p className="text-sm mb-0">2023 © Prompt. All rights reserved. </p>
                </div>
            </div>
        </div>
    </section>
)};