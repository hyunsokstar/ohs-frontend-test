// src\app\components\menus\BasicMenu\index.tsx
import Link from 'next/link';
import React from 'react';

const BasicMenu: React.FC = () => {
    return (
        <nav id='navbar' className="flex bg-blue-300">
            <div className="w-4/5 bg-gray-500">
                <ul className="flex p-4 text-white font-bold">
                    <li className="pr-6 text-2xl">
                        <Link href="/">Main</Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link href="/about">About</Link>
                    </li>

                    {/* 추가 */}
                    <li className="pr-6 text-2xl"><Link href={'/todo/'}>Todo</Link></li>
                </ul>
            </div>
            <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
                <div className="text-white text-sm m-1 rounded cursor-pointer">
                    Login
                </div>
            </div>
        </nav>
    );
}

export default BasicMenu;