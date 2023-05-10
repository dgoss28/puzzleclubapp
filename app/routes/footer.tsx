import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { createUser, getUserByEmail } from "~/models/user.server";
import { validateEmail } from "~/utils";

export default function Footer() {
  return (
    <footer className="relative">
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
      <div
        id="join-now"
        className="relative isolate overflow-hidden bg-gradient-to-tr from-[#ff80b5] to-[#FFB612] py-16 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join our waitlist.
              </h2>
              <p className="mt-4 text-lg leading-8 text-white">
                We're building out PuzzleClub right now, but by joining our
                waitlist you'll receive access to our free launch group
              </p>
              <Join></Join>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </div>
                <dt className="mt-2 font-bold text-white">Stay in the loop</dt>
                <dd className="mt-2 leading-7 text-white">
                  Keep your ear to the grindstone. Hear all about what we're
                  working on and when to expect it.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                    />
                  </svg>
                </div>
                <dt className="mt-2 font-bold text-white">Free gamin'</dt>
                <dd className="mt-2 leading-7 text-white">
                  Because of your early commitment, we'll get you started on the
                  right foot. Sign-up for your first month of PuzzleClub for
                  free.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#FFB612] opacity-30"></div>
        </div>
      </div>
    </footer>
  );
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const data: { message?: string; errors?: { email?: string } } = {};

  // const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    data.errors = { email: "Email is invalid" };
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    data.errors = { email: "Email already subscribed" };
  }

  if (data.errors) {
    return json(data.errors, { status: 422 });
  }

  await createUser(email);

  return json({
    message: `You're all set! Welcome to the Club, we'll be in touch!`,
  });
};

export function Join() {
  const data = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data?.errors?.email) {
      emailRef.current?.focus();
    }
  }, [data]);

  return (
    <Form reloadDocument method="post" className="space-y-6">
      <div className="mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          ref={emailRef}
          name="email"
          required
          type="email"
          autoComplete="email"
          aria-describedby="email-error"
          aria-invalid={data?.errors?.email ? true : undefined}
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        ></input>
        {data?.errors?.email ? (
          <div className="pt-1 text-red-700" id="email-error">
            {data?.errors.email}
          </div>
        ) : null}
        <button
          type="submit"
          className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
        >
          Join
        </button>
      </div>
      {data?.message ? (
        <div
          className="inline-block rounded-md px-3 py-2 text-xs font-semibold tracking-widest"
          style={{
            border: "solid green",
            background: "#2da44e33",
            color: "white",
          }}
        >
          {data?.message}
        </div>
      ) : null}
    </Form>
  );
}

