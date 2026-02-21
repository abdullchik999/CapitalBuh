'use client'

import { useEffect } from 'react'
import { useSiteContext } from '@/context/SiteContext'

export default function DarkBgc() {
  const { isSidebarOpen, isModalOpen, closeSidebar, closeModal } = useSiteContext()

  const isActive = isSidebarOpen || isModalOpen

  const handleClick = () => {
    if (isModalOpen) {
      closeModal()
    } else {
      closeSidebar()
    }
  }

  // Управление overflow на body
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isActive])

  // Закрытие по Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isModalOpen) closeModal()
        else closeSidebar()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, isSidebarOpen, closeSidebar, closeModal])

  return (
    <div
      className={`dark-bgc${isActive ? ' active' : ''}`}
      id="dark-bgc"
      onClick={handleClick}
    />
  )
}
