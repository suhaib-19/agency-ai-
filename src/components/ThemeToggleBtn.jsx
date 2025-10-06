import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
            document.documentElement.classList.toggle('dark', savedTheme === 'dark')
        } else {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = prefersDarkMode ? 'dark' : 'light'
            setTheme(initialTheme)
            document.documentElement.classList.toggle('dark', prefersDarkMode)
        }
    }, [])

    useEffect(() => {
        if (!theme) return
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <>
            <button>
                {theme === 'dark' ? (
                    <img
                        onClick={() => setTheme('light')}
                        src={assets.sun_icon}
                        className='size-8.5 p-1.5 border border-gray-500 rounded-full'
                    />
                ) : (
                    <img
                        onClick={() => setTheme('dark')}
                        src={assets.moon_icon}
                        className='size-8.5 p-1.5 border border-gray-500 rounded-full'
                    />
                )}
            </button>
        </>
    )
}

export default ThemeToggleBtn
