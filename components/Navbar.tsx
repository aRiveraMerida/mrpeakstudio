"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              Mr.Peak<span className="text-primary">Studio</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground/60 hover:text-foreground transition-colors">
                Consultoría
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/consultoria/ia">Inteligencia Artificial</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/consultoria/seo">SEO</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/implementacion" className="text-foreground/60 hover:text-foreground transition-colors">
              Implementación
            </Link>
            <Link href="/blog" className="text-foreground/60 hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
              About
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-screen bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2 font-medium">Consultoría</div>
            <Link
              href="/consultoria/ia"
              className="block px-6 py-2 text-foreground/60 hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Inteligencia Artificial
            </Link>
            <Link
              href="/consultoria/seo"
              className="block px-6 py-2 text-foreground/60 hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              SEO
            </Link>
            <Link
              href="/implementacion"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Implementación
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="px-3 py-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar