"use client";
import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
export default function Navbar({ footerItems }: { footerItems: any[] }) {
  return (
    <>
      {footerItems.map((item) => (
        <footer key={item.id} className="bg-black border-t border-gray-400/30">
          <div className="container mx-auto px-6 md:px-8 xl:px-0 py-10 max-w-7xl">
            <div className="grid xl:grid-cols-3 gap-8">
              {/* Brand & Socials */}
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-white">
                  <Image src="/devopsfarm-logo.png" alt="DevOpsFarm Logo" width={64} height={64} className="w-16" />
                  <span>{item.title}</span>
                </Link>
                <p className="text-gray-400 max-w-md text-sm">
                  {item.brand.address}
                  <br />
                  {item.brand.email}
                  <br />
                  {item?.brand?.phone?.join(", ")}
                </p>
                <div className="flex space-x-3">
                  {item.socials.map((social: { url: string | undefined; icon: { url: string | StaticImport; alt: any; }; }, index: React.Key | null | undefined) => (
                    // <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <Link key={index} href={social.url ?? "#"} target="_blank" rel="noopener noreferrer">
                      {/* <Image
                        width={40}
                        height={40}
                        src={social.icon.url}
                        alt={social.icon.alt || "Social Icon"}
                        className="w-8 transition-all duration-300 hover:brightness-125 hover:drop-shadow-lg"
                      /> */}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Links Sections */}
              <div className="grid grid-cols-3 gap-8 xl:col-span-2">
                {item.sections.map((section: { title: string; links: any[]; }, index: React.Key | null | undefined) => (
                  <FooterSection key={index} title={section.title} links={section.links} />
                ))}
              </div>
            </div>
            {/* Copyright */}
            <div className="mt-10 border-t border-gray-400/30 pt-6 text-center text-white">
              <p>{item.copyright}</p>
            </div>
          </div>
        </footer>
      ))}
    </>
  );
}

const FooterSection = ({ title, links }: { title: string; links: any[] }) => (
  <div>
    <h3 className="text-md font-semibold text-white">{title}</h3>
    <ul className="mt-4 space-y-3">
      {links.map((link, index) => (
        <FooterLink key={index} href="#" label={link.label} />
      ))}
    </ul>
  </div>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link href={href} className="text-gray-300 hover:text-gray-50 text-md leading-6">
      {label}
    </Link>
  </li>
);