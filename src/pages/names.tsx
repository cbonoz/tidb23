import { EXAMPLE_NAMES, generateNames, validateData } from '@/api';
import Header from '@/components/Header'
import NameRow from '@/components/NameRow';
import { NameResult, NamingForm } from '@/model'
import { DEFAULT_FORM, STRIPE_PUBLISHABLE_KEY } from '@/util/constants';
import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head'
import React, { useRef, useState } from 'react'

// https://stripe.com/docs/payments/accept-a-payment-charges?platform=web
// const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export default function Names() {
    const [data, setData] = React.useState<NamingForm>({ ...DEFAULT_FORM })
    const [showForm, setShowForm] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string | null>(null)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [results, setResults] = React.useState<NameResult[]>([])

    const resultRef = useRef<null | HTMLDivElement>(null)

    const updateData = (key: string, value: any) => {
        setData({
            ...data,
            [key]: value
        })
    }

    const clearForm = () => {
        setData({ ...DEFAULT_FORM })
        setResults([])
    }

    // Function to scroll to the element
    const scrollToResult = () => {
        if (resultRef?.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const generate = async () => {
        setLoading(true)
        setError(null)
        console.log("Generating names...")

        const dataError = validateData(data)

        if (dataError) {
            console.error('Invalid data', data)
            alert(dataError)
            setLoading(false)
            return
        }

        try {
            const res = await generateNames(data)
            let response = res.data.data.names;
            console.log("Got results", res)
            if (!Array.isArray(response)) {
                try {
                    const parsed = JSON.parse(response)
                    setResults(parsed)
                    scrollToResult()
                } catch (e) {
                    setError(response)
                }
            }
        } catch (e) {
            console.error('Error generating names', e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex max-w-6xl mx-auto flex-col py-2 min-h-screen">
            <Head>
                <title>Babynaming.pro | Generate</title>
            </Head>
            <main className="flex flex-1 w-full flex-col x-4 mt-12 sm:mb-0 mb-8">
                <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
                    Generate your <span className="text-orange-600">dream</span> baby name
                </h1>

                {/* <label className='text-white'>Enter last name</label> */}
                <input
                    className="bg-slate-900 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 transition"
                    type="text"
                    placeholder="Enter your family last name"
                    value={data.lastName}
                    onChange={(e) => updateData('lastName', e.target.value)}
                />
                <input
                    className="bg-slate-900 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 transition"
                    type="text"
                    value={data.attributes?.join(',')}
                    onChange={(e) => updateData('attributes', e.target.value?.split(',').map((s) => s.trim()))}
                    placeholder="Enter desired character attributes separated by commas (ex: strong, smart, kind)"
                />
                <input
                    className="bg-slate-900 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 transition"
                    type="text"
                    value={data.description}
                    onChange={(e) => updateData('description', e.target.value)}
                    placeholder="Add additional information about what you want your child to achieve. Use complete sentences (ex: I want my child to be a doctor or an entrepreneur.)"

                />

                <input
                    className="bg-slate-900 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 transition"
                    type="text"
                    value={data.gender}
                    onChange={(e) => updateData('gender', e.target.value)}
                    placeholder="Enter gender (male or female)"
                />

                <button
                    disabled={loading}
                    className="bg-orange-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-orange-500 transition"
                    onClick={() => generate()}
                >
                    <span>
                        {!loading && <span>Generate</span>}
                        {loading && <span role="status" className='justify-center text-center flex'>
                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </span>}
                        {/* Generate (you won't be charged yet) */}
                    </span>
                </button>

                {/* {showForm && (
                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm stripeTokenHandler={generate} />
                        </Elements>
                    </div>
                )} */}
                {error && <p className='text-red-500'>
                    {error}
                </p>}


                <div className='w-9/12 m-auto inline-block' ref={resultRef}>
                    {results && results.length > 0 && (
                        <div>
                            Last name: {data.lastName}<br />
                            Attributes: {data.attributes?.join(',')}<br />
                            Description: {data.description}<br />
                            Gender: {data.gender}<br />

                            <div className="mx-auto max-w-4xl font-display text-xl font-bold tracking-normal text-slate-100 sm:text-6xl my-2">
                                Your results
                            </div>
                            {results.map((result, index) => (
                                <div key={index}>
                                    <NameRow result={result} />
                                </div>
                            ))}
                            <br />
                            <a href="#" onClick={() => clearForm()} className='text-orange-600 underline hover:text-orange-500'>Reset</a>
                        </div>
                    )}
                </div>


            </main>


        </div>
    )
}
