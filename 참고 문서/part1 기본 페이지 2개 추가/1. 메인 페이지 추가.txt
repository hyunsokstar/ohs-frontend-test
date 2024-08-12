import Link from 'next/link';
import React from 'react'

type Props = {}

const MainPage = (props: Props) => {
  return (
    <div>
      <div className="flex">
        <Link href="/about">
          About
        </Link>
      </div>
      <div className="text-3xl">Main Page</div>
    </div>
  );
}

export default MainPage
