"use client";

import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import newer from "../components/new";
// import about from "../components/about";
// import More from "../components/More";

const land = () => {
  const navigation = [
    { name: "Why Decolab?", href: "/about" },
    { name: "Features", href: "features" },
    { name: "Integrations", href: "integrations" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                //  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/homepage"
              className="rounded-full bg-main bg-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join Our Waitlist
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/homepage"
                    className="rounded-full bg-main bg-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Join Our Waitlist
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="bg-black">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-1xl py-32 sm:py-48 lg:py-26">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-900 sm:text-6xl">
                Blockchain-Powered Project
              </h1>
              <div className="text-4xl mt-6 text-lg leading-8 text-white-600 font-bold">
                Management{" "}
                <a href="#" className="font-semibold text-main-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  For Web3.0 Pioneers! <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {/* Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. */}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/homepage"
                  className="rounded-full bg-main bg-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join Our Waitlist
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div text-gray>
            30,000+ Web3.0 Teams utilize Decolab for their Team and project
          </div>
          {/* <div className="h-64 grid grid-cols-3 gap-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div> */}
          <div className="flex justify-center">
            <div className="h-64 grid grid-cols-3 gap-4">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <div className="w-full flex flex-col items-center bg-black border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
          <div class="w-full flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
              Efficient Task Management
            </h5>
            <p className="mb-3 font-normal text-white-700 dark:text-gray-400">
              Decolab optimizes task assignment and team coordination through
              blockchain-enabled smart contracts, streaming task allocation,
              precise timeline tracking, and automated payments, enhancing
              developer productivity compared to traditional web2 project
              management tools
            </p>
            <a
              href="#"
              className="rounded-full bg-main bg-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore
            </a>
          </div>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="data:image/png;base64,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"
            alt="logo"
          />
        </div>
      </div>

      <div class="h-auto grid grid-cols-2 gap-1">
        {/* first  */}
        <div className="flex justify-center p-5">
          <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://africabusinesscommunities.com/Images/Key%20Logos/celo.png"
                alt=""
              />
            </a>

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
                  Empowering Collaborative Decision-Making
                </h5>
              </a>
              <p className="mb-3 font-normal text-white-700 dark:text-gray-400">
                By employing decentralized voting and governance mechanisms.
                Decolab empowers both teams and stakeholders to participate in
                crucial decision-making processes, fostering consensus and
                transparency
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Explore
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* end of first */}

        {/* second */}
        <div className="flex justify-center p-5">
          <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://africabusinesscommunities.com/Images/Key%20Logos/celo.png"
                alt=""
              />
            </a>

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
                  Empowering Collaborative Decision-Making
                </h5>
              </a>
              <p className="mb-3 font-normal text-white-700 dark:text-gray-400">
                By employing decentralized voting and governance mechanisms.
                Decolab empowers both teams and stakeholders to participate in
                crucial decision-making processes, fostering consensus and
                transparency
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Explore
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* end of second */}
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="text-center">
          <div className="font-bold text-48px mb-5">Experience The Innovation</div>
          <div className="font-normal mb-5">
            Cutting-edge web3.0 project management Saas that leverage blockchain
            technology to revolutioize project collaboration and management
          </div>
          <a
            href="/homepage"
            className="mt-5 rounded-full bg-main bg-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join Our Waitlist
          </a>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between rounded-lg border">
              <div className="m-5 flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">Mar 16, 2020</time>
              </div>
              <div className="m-5 group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white-600">
                  Cutting-edge web3.0 project management Saas that leverages
                  blockchain technology to revolutionize project collaboration
                  and managementCutting-edge web3.0 project management Saas that
                  leverages project collaboration and management
                </p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between rounded-lg border">
              <div className="m-5 flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">Mar 16, 2020</time>
              </div>
              <div className=" m-5 group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white-600">
                  Cutting-edge web3.0 project management Saas that leverages
                  blockchain technology to revolutionize project collaboration
                  and managementCutting-edge web3.0 project management Saas that
                  leverages project collaboration and management
                </p>
              </div>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between rounded-lg border">
              <div className="m-5 flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">Mar 16, 2020</time>
              </div>
              <div className="m-5 group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white-600">
                  Cutting-edge web3.0 project management Saas that leverages
                  blockchain technology to revolutionize project collaboration
                  and managementCutting-edge web3.0 project management Saas that
                  leverages project collaboration and management
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Netflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
      {/* <newer /> */}
      {/* <about /> */}
      {/* <More /> */}
    </>
  );
};

export default land;
