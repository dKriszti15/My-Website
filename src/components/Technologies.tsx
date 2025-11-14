import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import technologiesData from "../_data/technologies.json";

export default function Technologies() {
  const { categories } = technologiesData;

  return (
    <section className="min-h-screen flex items-center justify-center py-16">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-medium leading-tight md:text-7xl text-center">
            Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {categories.map((category) => (
              <div key={category.name} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl items font-medium mb-6 text-center">{category.name}</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {category.technologies.map((tech) => (
                    <TooltipProvider key={tech.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="bg-background border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tech.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}