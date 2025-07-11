import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Ubuntu African Resources</h3>
            <p className="text-gray-300">Powering global trade with sustainable minerals</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact</h3>
            <p className="mb-2">
              Office 211 Management House 38 Mell
              <br />
              Johannesburg
              <br />
              Gauteng, 2000
              <br />
              South Africa
            </p>
            <a className="mb-2" href="mailto:puleng@ubutuafrican.co.za">
              Email: <span className="text-sky-500">puleng@ubutuafrican.co.za</span>
            </a>
            <br />
            <a href="tel:0603095359">
              Phone: <span className="text-sky-500">060 309 5359</span>
            </a>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Commodities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm">Stay updated with our latest news and offers.</p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-700 text-white" />
              <Button type="submit" className="bg-orange-600 text-white hover:bg-orange-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between space-y-4 border-t border-gray-700 pt-8 sm:flex-row sm:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ubuntu African Resources. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <p>
              Built for maximum Impact by Ayabonga Qwabi (
              <a href="https://ayabonga.com" className="text-sky-500">
                ayabonga.com
              </a>
              ){" "}
            </p>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
