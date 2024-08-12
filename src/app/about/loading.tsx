// src\app\about\loading.tsx
import React from 'react'

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
        </div>
    )
}