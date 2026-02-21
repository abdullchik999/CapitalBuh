'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface SiteContextType {
  isSidebarOpen: boolean
  isModalOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
  openModal: () => void
  closeModal: () => void
}

const SiteContext = createContext<SiteContextType | null>(null)

export function SiteProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = useCallback(() => {
    setIsSidebarOpen(true)
  }, [])

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false)
  }, [])

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <SiteContext.Provider value={{ isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal }}>
      {children}
    </SiteContext.Provider>
  )
}

export function useSiteContext() {
  const ctx = useContext(SiteContext)
  if (!ctx) throw new Error('useSiteContext must be used within SiteProvider')
  return ctx
}
