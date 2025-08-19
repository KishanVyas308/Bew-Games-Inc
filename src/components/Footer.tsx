import { Button } from "@/components/ui/button";
import { Mail, Youtube, Gamepad2, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">BEW GAMES</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Creating immersive 2D survival RPG experiences with pixel-perfect art and
              engaging gameplay mechanics.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="stat-counter text-lg">18M+</span>
              <span className="text-muted-foreground">players worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Games", href: "#games" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#privacy" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Connect With Us</h4>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start pixel-button">
                <Mail className="mr-2 w-4 h-4" />
                Contact Us
              </Button>

              <Button variant="outline" onClick={() => window.open("https://www.youtube.com/channel/UC1-5-Hd4wAT5mTd6K6kthzg", "_blank")} className="w-full justify-start pixel-button">
                <Youtube className="mr-2 w-4 h-4" />
                YouTube Channel
              </Button>

            </div>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest game releases and development updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 BEW Games. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>for pixel game lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;