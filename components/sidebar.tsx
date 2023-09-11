"use client"

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon, Upload } from "lucide-react";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from 'react';

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    href: '/image',
  },
  {
    label: 'Replicate',
    icon: ImageIcon,
    color: "text-pink-700",
    href: '/replicate',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: "text-emerald-500",
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    href: '/code',
  },
  {
    label: 'Uploads',
    icon: Upload,
    color: "text-blue-700",
    href: '/upload',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];


export const Sidebar = () => {
  useEffect(() => {
    // @ts-ignore
    import('preline');
  }, []);

  const pathname = usePathname();

  return ( 

    <div className="flex items-center p-4">
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
            <span className="sr-only">Toggle Navigation</span>
            <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>

          <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
            
            <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">

            </li>
          </ol>
        </div>
      </div>

      <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
        <div className="px-6">
          <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
        </div>

        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">

            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
              >
                <li className={cn(
                  "space-y-1 flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 ",
                  pathname === route.href ? "bg-gray-100 hover:bg-gray-100 dark:bg-gray-900 dark:text-white" : "text-zinc-400",
                )}>
                  <route.icon className={cn("h-5 w-5", route.color)} />
                  {route.label}
                </li>

              </Link>
            ))}

          </ul>
        </nav>
      </div>
    </div>
   );
};

