import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-stone-100 shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div
        className={cn(
          'container mx-auto px-4 flex items-center',
          isScrolled ? 'justify-between' : 'justify-end'
        )}
      >
        {/* Logo - Only visible when scrolled */}
        {isScrolled && (
          <a
            href="#page-top"
            className="font-semibold text-xl text-black transition-colors"
          >
            David Delgado
          </a>
        )}

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className={cn('md:hidden', isScrolled ? 'text-black' : 'text-white')}
          onClick={toggleMenu}
        >
          Menu
        </Button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {['About', 'Projects', 'Photography'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'hover:opacity-75 transition-opacity',
                isScrolled ? 'text-black' : 'text-white'
              )}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden">
            {['About', 'Projects', 'Photography'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-black hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
