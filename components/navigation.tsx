import React from "react";
import Link from 'next/link'

interface NavigationProps {
  permissionsLevel: number,
}

const Navigation = ({permissionsLevel}: NavigationProps) => {

  return (
    <nav>
      <style jsx>{`
        nav {
          height: 100vh;
          padding: 1rem;
          background: var(--background)
        }
        
        ul {
          padding: 0;
          list-style: none;
        }
        
        ul a {
          color: var(--white);
        }
        `}</style>
      <ul>
        <li>
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
