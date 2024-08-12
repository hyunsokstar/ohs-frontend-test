import Link from 'next/link'
import React from 'react'

type Props = {}

const About = async (props: Props) => {
    // 로딩 상태를 시뮬레이션하기 위한 인위적인 지연
    await new Promise(resolve => setTimeout(resolve, 2000))

    return (
        <div className="p-4">
            <div className="mb-4">
                <Link href={'/'} className="text-blue-500 hover:underline">Main</Link>
            </div>
            <div className="text-3xl font-bold">About Page</div>
            <p className="mt-2">This is the about page content.</p>
        </div>
    )
}

export default About