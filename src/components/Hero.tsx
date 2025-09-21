import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star } from "lucide-react";
import srpg5Icon from "@/assets/srpg-5-official-icon.png";

const Hero = () => {
  
  return (
    <section id="home" className="relative min-h-screen flex items-center mt-20 md:mt-20 lg:mt-6 justify-center overflow-hidden px-6 py-10">
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
              <div className="text-4xl text-secondary font-bold ">19M+</div>
              <div className="text-muted-foreground font-medium">Downloads</div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-game-stat text-game-stat" />
                ))}
                <Star className="w-6 h-6 fill-game-stat/50 text-game-stat" />
              </div>
              <div className="text-muted-foreground font-medium">4.5+ Stars Rated</div>
            </div>
          </div>

          {/* CTAs - Removed as requested */}
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center items-center min-h-[500px]">
          <div className="relative game-card w-80 md:w-96 rounded-2xl p-10 shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="relative z-10 flex justify-center">
              <img
                src={srpg5Icon}
                alt="Survival RPG 5: Pirate Adventure"
                className="w-56 h-56 mx-auto rounded-xl shadow-md animate-float"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-glow opacity-80 rounded-2xl animate-pulse-slow pointer-events-none" />
          </div>

          {/* Floating Game Stats - Better positioned */}
          <div className="absolute top-8 right-4 md:right-8 game-card rounded-xl p-4 shadow-lg animate-slide-up backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer border border-primary/20" 
               onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="text-center min-w-[60px]">
              <div className="text-2xl font-bold text-primary mb-1">+5</div>
              <div className="text-xs font-medium text-muted-foreground leading-tight">Epic<br/>Games</div>
            </div>
          </div>

          <div className="absolute bottom-8 left-4 md:left-8 game-card rounded-xl p-4 shadow-lg animate-slide-up backdrop-blur-sm hover:bg-card/80 transition-all  cursor-pointer border border-secondary/20" 
               style={{ animationDelay: '0.2s' }} 
               onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="text-center min-w-[60px]">
              <div className="text-2xl font-bold text-secondary mb-1">Latest</div>
              <div className="text-xs font-medium text-muted-foreground leading-tight">Game</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;