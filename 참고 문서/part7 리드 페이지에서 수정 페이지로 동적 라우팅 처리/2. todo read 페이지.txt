'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'

const ReadTodo = () => {
    const params = useParams()
    const router = useRouter()
    const id = params.id

    const handleModify = () => {
        router.push(`/todo/modify/${id}`)
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Read Todo</h1>
            <p className="text-lg mb-4">Todo ID:
                <span
                    className="text-blue-500 cursor-pointer hover:underline"
                    onClick={handleModify}
                >
                    {id}
                </span>
            </p>
            <button
                onClick={handleModify}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Modify Todo
            </button>
        </div>
    )
}

export default ReadTodo