import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Mail, Gamepad2 } from "lucide-react";
import bewGamesLogo from "@/assets/bew-games-official-logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Games", href: "#games", icon: Gamepad2 },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={bewGamesLogo} 
              alt="BEW Games" 
              className="h-12 w-auto rounded-lg"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">BEW GAMES</h1>
              <p className="text-xs text-muted-foreground">Pixel Adventures</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
            <Link target="_blank" to="https://play.google.com/store/apps/dev?id=6670339010912734522">
              <Button className="pixel-button  flex items-center space-x-2">
              
              <span>Play Store</span>
              </Button>
            </Link>
            <Link target="_blank" to="https://apps.apple.com/us/developer/bew-games-inc/id1228652600">
              <Button className="pixel-button flex items-center space-x-2">
             
              <span>App Store</span>
              </Button>
            </Link>
            </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-up">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full pixel-button">
                  Play Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;