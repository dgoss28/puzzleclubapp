import { FaceSmileIcon } from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  HeartIcon,
  ArrowPathIcon,
} from "@heroicons/react/20/solid";

const links = [
  { name: "Keep Tahoe Blue", href: "#" },
  { name: "Habitat for Humanity", href: "#" },
  { name: "Completing the Puzzle", href: "#" },
  { name: "Learn about the tech of the site", href: "#" },
];

const values = [
  {
    icon: FaceSmileIcon,
    name: "Were in the happiness delivery business. And cousin business is aboomin",
    value: "Deliver Happiness",
  },
  {
    icon: FaceSmileIcon,
    name: "Got some volunteering to do? Need to help out the family? No worries",
    value: "Work Less, Impact More",
  },
  { icon: FaceSmileIcon, name: "We are what you put out", value: "Positive Vibes" },
  {
    icon: FaceSmileIcon,
    name: "Without that thing below our feet, PuzzleClub aint much",
    value: "Eco-Maniacs",
  },
];
const features = [
  {
    name: "Waste from existing puzzles.",
    description:
      "I have no idea to do with all of these extra puzzles, do you? Ive tried donations and libraries but they always stack up.",
    icon: ArrowPathIcon,
  },
  {
    name: "Expense of new games.",
    description:
      "Scratching the itch of fun with the balance of budget is never a fun task.",
    icon: BanknotesIcon,
  },
  {
    name: "A passion to share what we love with others.",
    description:
      "For those with a section of floor or table that always needs a puzzle, this ones for you!",
    icon: HeartIcon,
  },
];

export default function About() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1539209741642-df00eae40690?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#FFB612] to-[#56739a] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#FFB612] to-[#ff80b5] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              From Tahoe's North Shore to Your Front Door
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We're an employee-owned, family company on a mission to revamp
              Game Night with new puzzles and games.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Meet the team
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  A marketer and an engineer by trade, and jigsaw puzzle
                  enthusiasts by passion. If you're anything like us, you've got
                  a devoted section of floor that seems to always be filled with
                  a working jigsaw puzzle. We decided to start PuzzleClub for a
                  few reasons:
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-yellow-700"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="./us.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-700">What motivates us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our values
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {values.map((feature) => (
              <div key={feature.value} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-700">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.value}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#56739a] to-[#688cba] py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-3xl">
              Here's some other things we're passionate about
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
