import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import Auth from "@/app/_components/auth";
// import { Icons } from "@/components/icons";

export function SiteHeader() {
  return (
    <>
      {/* <div className="utility-bar color-background-1 gradient utility-bar--bottom-border">
      <div className="page-width utility-bar__grid"><div className="announcement-bar" role="region" aria-label="Announcement"><a href="https://twitter.com/jhekub" className="announcement-bar__link link link--text focus-inset animate-arrow"><p className="announcement-bar__message h5">
        <span>Connect on X</span><svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" className="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
          </path></svg>

      </p></a></div>
      </div>
    </div> */}

      <header
        data-sticky-type="on-scroll-up"
        className="flex header-wrapper color-accent-1 gradient header-wrapper--border-bottom items-end justify-end p-2 border-b"
      >
        <div className="header header--middle-left header--mobile-center page-width header--has-menu header--has-social ">
          <div className="connect">
            <Auth />
          </div>
        </div>
      </header>
    </>
  );
}
