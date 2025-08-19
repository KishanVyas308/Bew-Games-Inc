import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Download, Star } from "lucide-react";
import srpg5Icon from "@/assets/srpg-5-official-icon.png";
import srpgOpenWorldIcon from "@/assets/srpg-open-world-official-icon.png";
import srpg1Icon from '@/assets/srpg1icon.jpg'
import srpg2Icon from '@/assets/sprg2icon.png'
import srpg3Icon from '@/assets/srpg3icon.png'
import srpg4Icon from '@/assets/srpg4icon.png'
import { Link } from "react-router-dom";

const games = [
  {
    id: 1,
    title: "Survival RPG: Open World",
    description: "Retro 2D pixel RPG where you explore a medieval world, craft houses, tools, and armor, mine dungeons, fight dragons and dinosaurs, and unlock recipes in an offline adventure.",
    icon: srpgOpenWorldIcon,
    features: ["Medieval Open World", "Crafting & Mining", "Dragon & Dinosaur Fights", "Offline Retro RPG"],
    rating: 4.5,
    downloads: "1M+",
    color: "from-purple-500 to-pink-400",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.bewgames.openworld",
    appStoreLink: "https://apps.apple.com/us/app/survival-rpg-open-world-pixel/id1583465544"
  },
  {
    id: 2,
    title: "Survival RPG 1: Lost Treasure",
    description: "Stranded on a mysterious island, you must survive by exploring dungeons, crafting tools, solving puzzles, and discovering hidden treasures in this pixel retro RPG.",
    icon: srpg1Icon,
    features: ["Island Survival", "40+ Tools to Craft", "Dungeons & Treasures", "Offline Pixel RPG"],
    rating: 4.5,
    downloads: "5M+",
    color: "from-green-500 to-emerald-400",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.bewgames.survivaladventure",
    appStoreLink: "https://apps.apple.com/us/app/survival-rpg-1-treasure-hunt/id1228652601"
  },
  {
    id: 3,
    title: "Survival RPG 2: Ruins of Lost Temple",
    description: "Sequel to Lost Treasure. Explore deserts, jungles, forests, and ancient temples, craft tools, solve puzzles, and fight monsters while uncovering hidden treasures.",
    icon: srpg2Icon,
    features: ["7 Story Chapters", "180 Items to Collect", "Treasure Maps & Hidden Objects", "Fight 35+ Monsters"],
    rating: 4.6,
    downloads: "1M+",
    color: "from-yellow-500 to-orange-400",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.bewgames.templeruins",
    appStoreLink: "https://apps.apple.com/us/app/survival-rpg-2-temple-ruins-2d/id1330199727"
  },
  {
    id: 4,
    title: "Survival RPG 3: Lost in Time",
    description: "Travel through Medieval, Jurassic, and Future timelines. Explore castles, dungeons, and fortresses, craft armors, and fight monsters in this retro time-travel RPG.",
    icon: srpg3Icon,
    features: ["3 Timelines (Past, Jurassic, Future)", "50+ Dungeons", "85 Crafting Recipes", "40+ Monsters"],
    rating: 4.6,
    downloads: "1M+",
    color: "from-red-500 to-rose-400",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.bewgames.lostintime",
    appStoreLink: "https://apps.apple.com/us/app/survival-rpg-3-lost-time-warp/id1491950193"
  },
  {
    id: 5,
    title: "Survival RPG 4: Haunted Manor",
    description: "Unravel the mystery of a haunted manor by exploring spooky places, solving puzzles, traveling through time, and finding a magical artifact in this eerie pixel RPG.",
    icon: srpg4Icon,
    features: ["Haunted House Mystery", "7 Story Chapters", "Time Travel", "Hidden Objects & Puzzles"],
    rating: 4.7,
    downloads: "100K+",
    color: "from-gray-700 to-gray-500",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.bewgames.hauntedmanor",
    appStoreLink: "https://apps.apple.com/us/app/survival-rpg-4-haunted-manor/id1624256421"
  },
  {
    id: 6,
    title: "Survival RPG 5: Pirate Adventure",
    description: "Set sail in a pirate-themed world. Explore islands, ships, and caves, complete quests, fight monsters with swords and spells, and discover epic treasures.",
    icon: srpg5Icon,
    features: ["Pirate Adventure", "Ocean & Island Exploration", "Combat with Swords & Spells", "Quests & Crafting"],
    rating: 4.8,
    downloads: "50K+",
    color: "from-blue-500 to-cyan-400",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.bewgames.pirate",
    appStoreLink: "https://apps.apple.com/us/app/survival-rpg-pirate-adventure/id6468485843"
  }
];

const GameShowcase = () => {
  return (
    <section id="games" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-primary ">Epic Games</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into immersive 2D pixel worlds where adventure awaits at every corner
          </p>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto" />
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {games.map((game) => (
            <Card key={game.id} className="game-card-detail border-0 overflow-hidden group">
              <CardContent className="p-0">
                <div className="p-8">
                  {/* Game Icon & Title */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <img
                        src={game.icon}
                        alt={game.title}
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity"
                        style={{ background: `linear-gradient(to bottom right, ${game.color.split(' ')[1]}, ${game.color.split(' ')[3]})` }} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {game.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-game-stat text-game-stat" />
                          <span className="font-semibold">{game.rating}</span>
                        </div>
                        <div className="text-muted-foreground">
                          <Download className="w-4 h-4 inline mr-1" />
                          {game.downloads}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {game.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-secondary">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {game.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-sm" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex w-full gap-3">
                    <Link className="w-full" target="_blank" to={game.playStoreLink}>
                      <Button className="pixel-button w-full flex items-center space-x-2">
                        <span>Play Store</span>
                      </Button>
                    </Link>
                    <Link className="w-full" target="_blank" to={game.appStoreLink}>
                      <Button className="pixel-button w-full flex items-center space-x-2">
                        <span>App Store</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* YouTube Section */}
        <div className="text-center game-card rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Watch Our Game Trailers</h3>
          <p className="text-muted-foreground mb-6">
            Experience the adventure before you play
          </p>

          {/* YouTube Video Embed */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/8SLYVW3XkFk"
                title="Survival RPG: Open World Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <Button
            variant="outline"
            className="pixel-button"
            onClick={() => window.open('https://www.youtube.com/channel/UC1-5-Hd4wAT5mTd6K6kthzg', '_blank')}
          >
            <ExternalLink className="mr-2 w-4 h-4" />
            Visit Our YouTube Channel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;