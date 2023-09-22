import React from 'react'

export default function Ann({ params }) {
    return (
        <>
            {
                params.map((key) => (
                    <>
                    <div class="bg-white py-6 sm:py-8 lg:py-12">
                        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <div class="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
                                <div>
                                    <h2 class="text-xl font-bold text-indigo-500 md:text-2xl">{key.an}</h2>
                                    <p class="text-gray-600">{key.author}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    </>
                ))
            }
        </>
    )
}
