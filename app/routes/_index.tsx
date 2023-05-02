import type { V2_MetaFunction } from "@remix-run/node";
import { Link, useNavigation } from "@remix-run/react";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { createUser, getUserByEmail } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Puzzle Club" }];

export default function Index() {
  const user = useOptionalUser();
  const polyDeclaration = {'clipPath': 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'};
  // const maxWidthStyle: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> = {'max-width': '180px'};
  return (
    <div className="">
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-4 lg:px-12"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Puzzle Club</span>
              <img
                className="h-20 w-50"
                src="./puzzle-club-2023.png"
                alt=""
              ></img>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12"></div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            {user ? (
              <Link
                to="/notes"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </Link>
            ) : (
              <div className="items-right justify-end flex gap-x-6 max-h-10">
                <HashLink
                  to="#joinNow"
                  smooth={true}
                  className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                  Join
                </HashLink>
              </div>
            )}
          </div>
        </nav>
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
        </div>
      </header>

      <div className="relative overflow-hidden bg-white">
        
  <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Puzzles to your door, every month</h1>
        <p className="mt-4 text-xl text-gray-500">All the latest puzzles and board games, all on a monthly subscription. </p>
      </div>
      <div>
        <div className="mt-10">
          <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" className="h-full w-full object-cover object-center"></img>
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://y.yarn.co/325e635c-bc50-4b2c-bebb-45a9b2a8039d_text.gif" alt="" className="h-full w-full object-cover object-center"></img>
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" className="h-full w-full object-cover object-center"></img>
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" className="h-full w-full object-cover object-center"></img>
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" className="h-full w-full object-cover object-center"></img>
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="h-full w-full object-cover object-center"></img>
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="h-full w-full object-cover object-center"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HashLink
                  to="#joinNow"
                  smooth={true}
                  className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                  Join the waitlist
                </HashLink>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="bg-white py-24 sm:py-32">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu translate-x-3 overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#FFB612] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8" id="learn-more">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-yellow-600">
              Awww shit did someone say Puzzles!?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All the puzzles, every month
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're working on creating PuzzleClub, your fun subscription. Here's how it works:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600 text-white">
                   1
                  </div>
                  You tell us what you like
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  500 or 1000? Portraits or landscapes? Infographics or art? So many options!
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600 text-white">
                    2
                  </div>
                  We send you a puzzle
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Our puzzles ship as soon as you make the request. All puzzles are clean and verified by our awesome team of Puzzle-eyes.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600 text-white">
                    3
                  </div>
                  You enjoy it!
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Enjoy the building of your new puzzle! Share with family, keep it in your own corner, toss it on the ground like a maniac, who cares! If you have any issues with your puzzle no worries, we'll swap it out ASAP.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600 text-white">
                    4
                  </div>
                  You send it back
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Use the included shipping label and send it on home to Mount Puzzle and we'll send you a fresh one once it's all good and verified
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple no-tricks pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              25 a month, it's that easy.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Monthly membership
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Membership into an ultimate community of bros.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-yellow-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Vibes
                </li>

                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Puzzles
                </li>

                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Investors???
                </li>

                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Annual member meetup in Madison
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Pay every month, or we'll bust knee caps
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      $25
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD/month
                    </span>
                  </p>
                  <HashLink
                    to="#joinNow"
                    smooth
                    className="mt-10 block w-full rounded-md bg-yellow-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                  >
                    Join the waitlist
                  </HashLink>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts billed on the 15th
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  {/* This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ``` */}
<div id="joinNow" className="relative isolate overflow-hidden bg-yellow-600 py-16 sm:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div className="max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join our waitlist.</h2>
        <p className="mt-4 text-lg leading-8 text-white">We're building out PuzzleClub right now, but by joining our waitlist you'll receive access to our free launch group</p>
        <Join></Join>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
          </div>
          <dt className="mt-4 font-bold text-white">Stay in the loop</dt>
          <dd className="mt-2 leading-7 text-white">Keep your ear to the grindstone. Hear all about what we're working on and when to expect it.</dd>
        </div>
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
</svg>

          </div>
          <dt className="mt-4 font-bold text-white">Free gamin'</dt>
          <dd className="mt-2 leading-7 text-white">Because of your early commitment, we'll get you started on the right foot. Sign-up for your first month of PuzzleClub for free.</dd>
        </div>
      </dl>
    </div>
  </div>
  <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
</div>
    </div>
  );
}

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const data: { message?: string, errors?: { email?: string } } = {};

  // const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    data.errors = { email: "Email is invalid"};
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    data.errors = { email: "Email already subscribed"};
  }

  if (data.errors) {
    return json(data.errors, { status: 422 });
  }

  await createUser(email);

  return json({ message: `You're all set! Welcome to the Club, we'll be in touch!` });
};

export function Join() {
  const data = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data?.errors?.email) {
      emailRef.current?.focus();
    } else {
      emailRef.current?.blur();
    }
  }, [data]);

  return (

        <Form reloadDocument method="post" className="space-y-6">
        <div className="mt-6 flex max-w-md gap-x-4">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input id="email" ref={emailRef} name="email" required autoFocus={true} type="email" autoComplete="email" aria-describedby="email-error" aria-invalid={data?.errors?.email ? true : undefined} className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 text-white placeholder:text-white" placeholder="Enter your email"></input>
          {data?.errors?.email ? (
            <div className="pt-1 text-red-700" id="email-error">
            {data?.errors.email}
          </div>
          ) : null}
          <button type="submit" className="flex-none rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Join</button>
          </div>
          {data?.message ? (
            <div className="inline-block rounded-md px-3 py-2 tracking-widest text-xs font-semibold" style={{'border':'solid green', background:'#2da44e33', 'color':'white'}}>{data?.message}</div>
          ) : null}
        </Form>

  );
}

