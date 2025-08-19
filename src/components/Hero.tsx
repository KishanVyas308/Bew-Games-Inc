import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star } from "lucide-react";
import banner from "@/assets/banner.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pixel-grid opacity-20" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary rounded-sm animate-glow-pulse opacity-60"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 pixel-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="">BEW</span>
              <br />
              <span className="text-primary">GAMES</span>
            </h1>
            <div className="flex gap-1">
              <div className="h-1 w-32 bg-gradient-primary rounded-full" />
              <div className="h-1 w-2 bg-secondary rounded-full" />
              <div className="h-1 w-2 bg-secondary rounded-full" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary">
              Survival RPG Games
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
              Combine adventure, exploration, RPG and survival skills in immersive
              <span className="text-accent font-semibold"> 2D retro pixel worlds</span>.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 items-center">
            <div className="text-center">
              <div className="text-4xl text-secondary font-bold ">18M+</div>
              <div className="text-muted-foreground font-medium">Downloads</div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-game-stat text-game-stat" />
                ))}
              </div>
              <div className="text-muted-foreground font-medium">All Games Rated</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="pixel-button group">
              Explore Games
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="pixel-button">
              <Download className="mr-2 w-4 h-4" />
              Download Now
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative game-card rounded-2xl p-8 ">
            <img
              src={banner}
              alt="Survival RPG Game Scene"
              className="w-full h-auto rounded-xl"
            />

            {/* Overlay Glow Effect */}
            <div className="absolute inset-0 bg-gradient-glow rounded-2xl pointer-events-none" />
          </div>

          {/* Floating Game Stats */}
          <div className="absolute -top-6 -right-6 game-card rounded-xl p-4 animate-slide-up">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Epic Games</div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 game-card rounded-xl p-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">RPG</div>
              <div className="text-sm text-muted-foreground">Adventure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;