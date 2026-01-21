import { Lightbulb, Target, Users, GraduationCap, Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 border-t border-border bg-gradient-to-b from-transparent to-primary/[0.02]">
      <div className="container max-w-5xl">
        
        {/* Author Introduction Section */}
        <div className="mb-24 px-4 text-center">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">About the Author</span>
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Hi, I'm Nithya!
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a DSP researcher currently based in Germany. For the past 8 years, I have worked on various signal processing projects with industry leaders like Airbus Defence and Space GmbH and renowned research institutes like Fraunhofer IIS. I've always believed that learning is best through teaching. I love breaking complex systems down into simple signal processing concepts, 
              and that is the inspiration for this blog - to share my work and knowledge with everyone who is as passionate about signal processing as I am.
            </p>
          </div>
          
        </div>

        {/* Blog Pillars Section */}
        <div className="text-center mb-12">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4">
            My Philosophy
          </h2>
          <div className="h-1.5 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="group bg-background p-8 rounded-3xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Intuition First</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
               I believe the best explanations start with intuition, not equations. Math is a tool, not a barrier. 
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group bg-background p-8 rounded-3xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Signal vs. Noise</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
               Breaking down complex systems into ideas that actually make sense, helping you find the signal in the noise.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group bg-background p-8 rounded-3xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">For the Curious</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Whether you're an engineering student, a developer or someone who wants to know how things work, you're in the right place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;