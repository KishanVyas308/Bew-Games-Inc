import { Button } from "@/components/ui/button";
import { Mail, Youtube, Gamepad2, Heart, Facebook, Instagram } from "lucide-react";
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
              <h3 className="text-2xl font-bold">Bew Games Inc</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Creating immersive 2D survival RPG experiences with pixel-perfect art and
              engaging gameplay mechanics.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="stat-counter text-lg">19M+</span>
              <span className="text-muted-foreground">players worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Games", href: "#games" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Connect With Us</h4>
            <div className="space-y-4">
              <Button variant="outline" onClick={() => window.location.href = 'mailto:support@bewgames.com'} className="w-full justify-start pixel-button">
                <Mail className="mr-2 w-4 h-4" />
                support@bewgames.com
              </Button>

              <Button variant="outline" onClick={() => window.open("https://www.youtube.com/channel/UC1-5-Hd4wAT5mTd6K6kthzg", "_blank")} className="w-full justify-start pixel-button">
                <Youtube className="mr-2 w-4 h-4" />
                YouTube Channel
              </Button>

              <Button variant="outline" onClick={() => window.open("https://www.facebook.com/survivaladventurethegame", "_blank")} className="w-full justify-start pixel-button">
                <Facebook className="mr-2 w-4 h-4" />
                Facebook
              </Button>

              <Button variant="outline" onClick={() => window.open("https://www.instagram.com/bewgames/", "_blank")} className="w-full justify-start pixel-button">
                <Instagram className="mr-2 w-4 h-4" />
                Instagram
              </Button>

              <Button variant="outline" onClick={() => window.open("https://discord.gg/GPs7NhYbHS", "_blank")} className="w-full justify-start pixel-button">
                <svg className="mr-2 w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
                Discord
              </Button>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Bew Games Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>by</span>
            <a href="https://kishanvyas.tech" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Kishan Vyas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;