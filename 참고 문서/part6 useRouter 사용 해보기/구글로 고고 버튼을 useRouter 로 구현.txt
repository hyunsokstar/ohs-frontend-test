'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function TodoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()

    const handleGoToGoogle = () => {
        router.push('https://www.google.com')
    }

    const handleRandomPage = () => {
        const pages = ['/todo/list', '/todo/add', '/todo/read/1', '/todo/modify/1']
        const randomPage = pages[Math.floor(Math.random() * pages.length)]
        router.push(randomPage)
    }

    return (
        <>
            <div className="w-full flex m-2 p-2 ">
                <Link href="/todo/list" className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">
                    LIST
                </Link>
                <Link href="/todo/add" className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">
                    ADD
                </Link>
                <button
                    onClick={handleGoToGoogle}
                    className="text-xl m-1 p-2 w-40 font-bold text-center bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    구글로 고고
                </button>
                <button
                    onClick={handleRandomPage}
                    className="text-xl m-1 p-2 w-40 font-bold text-center bg-green-500 text-white rounded hover:bg-green-600"
                >
                    랜덤 페이지
                </button>
            </div>
            <div className="flex flex-wrap w-full">
                {children}
            </div>
        </>
    )
}