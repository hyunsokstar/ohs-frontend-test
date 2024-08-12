'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const TodoList = () => {
    const searchParams = useSearchParams()
    const page = searchParams.get('page') || '1'
    const search = searchParams.get('search') || ''

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <p className="mb-2">Current Page: {page}</p>
            <p className="mb-4">Search Query: {search ? `"${search}"` : 'None'}</p>

            <div className="mt-4">
                <p>Todo items would be listed here based on the page and search query.</p>
            </div>
        </div>
    )
}

export default TodoList