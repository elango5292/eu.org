"use client"
import { UilLetterEnglishA } from '@iconscout/react-unicons'
import { HiOutlineDocumentText, HiOutlineQuestionMarkCircle} from "react-icons/hi2";
import { HiOutlineGlobe} from "react-icons/hi";

import { MdOutlineDns} from "react-icons/md";


import Lang from "../components/language"
import Carso from "../components/carasol"


export default function Home() {

    const features = [

        {
            name: 'Check Availability',
            description:
                'Discover domains available for registration.',
            icon: HiOutlineQuestionMarkCircle,
            url:'https://nic.eu.org/opendomains.html'
        },

        {

            name: 'Policy',
            description:
                "Discover EU.org's overarching policies.",
            icon: HiOutlineDocumentText,
            url:'https://nic.eu.org/policy.html'
        },
        {
            name: 'DNS settings',
            description:
                'Technical information on the DNS.',
            icon: MdOutlineDns,
            url:'https://nic.eu.org/info.html'
        },
        {
            name: 'Internet Access Providers',
            description:
                'Browse Internet access providers willing to host EU.org domains',
            icon: HiOutlineGlobe,
            url:'https://nic.eu.org/iap.html'
        },

        // {
        //     name: 'Mailing List',
        //     description:
        //         'To subscribe, simply send "subscribe freedns-users" to majordomo@lists.EU.org.',
        //     icon: CloudArrowUpIcon,
        // },
       
    ]

    return (

<main className="py-5 ">

    <div className="flex items-center justify-center">

<div className="navbar w-3/4 flex items-center justify-between px-6 lg:px-8 py-4">
    <a className="btn btn-ghost text-xl text-black">EU.org</a>

    <Lang/>

</div>



</div>


<>


                
<div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a680ff] to-[#fcb795] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(35% 2%, 55% 23%, 17% 42%, 15% 70%, 59% 77%, 91% 58%, 44% 51%, 93% 13%, 96% 49%, 66% 6%)',
            }}
          />
        </div>




<div className="relative px-6 lg:px-8 pb-16  pt-8 sm:pb-24 sm:pt-12 lg:pb-20 lg:pt-14">

    <div className="mx-auto max-w-2xl">
        <div className="hidden sm:flex sm:mb-8 sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                EU.org invites you to sign the petition at savedotorg.org against .ORG sale to private fund.
            </div>
        </div>
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
               <u>EU.org,</u> free domain names since 1996
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                The main goal of EU.org is to provide free subdomain registration to users or non-profit organizations who cannot afford the fees demanded by some NICs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="https://nic.eu.org/arf/"
                    className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Get started
                </a>
                <a href="https://nic.eu.org/policy.html" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    </div>
    
</div>
</>





<section className="relative overflow-hidden bg-transparent px-6 py-12 sm:py-9 lg:px-8">
    <div className="mx-auto max-w-2xl">
        <figure className="mt-10">
            <blockquote className="text-center text-l font-light leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                    “Companies have voted with their feet [on the issue of domains], they want to have domain names that are international or at least country neutral. The same freedom should apply to individuals; all individuals should be able to have and own their own domain names”
                </p>
            </blockquote>
            <figcaption className="mt-10">
                <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Paul_Mockapetris.JPG/640px-Paul_Mockapetris.JPG"
                    alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Paul Mockapetris</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600">creator of the DNS</div>
                </div>
            </figcaption>
        </figure>
    </div>
</section>

<div className="bg-white py-9 sm:py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-semibold leading-7 text-black">Quick Links</h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <a href={feature.url} target="_black">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        
                                        {feature.name} &#x2197;
                                        </a>
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
            </dl>
        </div>
    </div>
</div>




<div className="flex-col text-center">
<h2 className="font-semibold leading-7 text-black my-5">Powered by</h2>
<div className="flex justify-center">

<Carso />
</div>
</div>


<div className="flex bg-gray-100 mt-16 justify-center">
<div className=" p-8 py-16">
  <h2 className="text-3xl font-bold text-black tracking-tight sm:text-4xl mb-4">Subscribe to our newsletter.</h2>
  <p className="text-gray-600 mb-2">To subscribe, simply send <span><i>"subscribe freedns-users"</i></span> to majordomo@lists.EU.org.</p>
  <p className="text-gray-600">Contact: <u><a href="mailto:webmaster@eu.org" className="text-blue-600 hover:underline">webmaster@eu.org</a></u></p>
</div>
</div>



</main>



    )
}
