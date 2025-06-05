import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MobileSocialLinks, SocialLinks } from '@/components/header/social/SocialLinks';
import { MobileNavigation, Navigation } from '@/components/header/navigation/Navigation';
import { DevPortfolio } from '@/components/shared/dev-portfolio/DevPortfolio';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
            }`}
        >
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <DevPortfolio spacing="none" />

                    <Navigation />

                    <SocialLinks />

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-slate-200" onClick={toggleMenu}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="py-4 md:hidden bg-slate-800">
                    <div className="container px-4 mx-auto">
                        <MobileNavigation />

                        <MobileSocialLinks />
                    </div>
                </div>
            )}
        </header>
    );
};
