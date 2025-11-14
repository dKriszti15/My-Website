import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center py-25">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center justify-center gap-8 w-full">
              <Avatar className="w-60 h-60 border-2 border-border hidden md:block transform transition-transform duration-300 hover:scale-105">
                <AvatarImage src="/profile.jpg" alt="DK" />
                <AvatarFallback>DK</AvatarFallback>
              </Avatar>

              <div className="text-center space-y-5">
                <h1 className="text-5xl font-bold mb-2">Dácz Krisztián</h1>
                <p className="text-xl text-muted-foreground">Software Developer & Bug Creator</p>
                  
                  <div className="text-center space-y-1">
                      <p className="text-muted-foreground">📧 krisztiandacz18@gmail.com</p>
                      <p className="text-muted-foreground">📍 Cluj-Napoca, Romania</p>
                  </div>
              </div>

              <Avatar className="w-60 h-60 border-2 border-border hidden md:block transform transition-transform duration-300 hover:scale-105">
                <AvatarImage src="https://github.com/dKriszti15.png" alt="DK" />
                <AvatarFallback>DK</AvatarFallback>
              </Avatar>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 space-y-6 max-w-2xl">
              <p className="text-lg leading-relaxed">
                👋 Hi there! I'm a software developer who likes to spend time perfectioning the details. I love to style my React components, experimenting with different looks.
              </p>
              
              <p className="text-lg leading-relaxed">
                🎓 Currently pursuing my Bachelor's degree at Babeș-Bolyai University, where I've mastered the art of 
                fixing bugs.
              </p>

              <p className="text-lg leading-relaxed">
                Fueled by 🥤 and pure determination.
              </p>

            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}