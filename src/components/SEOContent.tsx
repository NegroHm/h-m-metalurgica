import Section from "./Section";

const SEOContent = () => {
  return (
    <Section id="about" className="py-20 bg-background" addNavbarPadding={true}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nosotros
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Más de dos décadas creando arte en acero con calidad y transparencia en cada soldadura
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Tradición Familiar en Herrería
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  En Héctor Medina creemos que la herrería excepcional comienza con calidad sin compromisos y transparencia total en cada aspecto de nuestro oficio. Por más de dos décadas, nuestro taller familiar se ha especializado en crear herrería personalizada, parrillas artesanales y portones de hierro forjado que perduran en el tiempo.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Arte y Funcionalidad
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cada pieza es meticulosamente elaborada usando materiales premium y técnicas tradicionales transmitidas por generaciones. Nuestro compromiso con la soldadura de calidad y la fabricación de metales va más allá de la funcionalidad: creamos arte en acero.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Enfoque Colaborativo
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lo que nos distingue es nuestro enfoque colaborativo. Escuchamos las visiones de nuestros clientes y las traducimos en realidad a través de técnicas expertas de fabricación de metales. Ya sea una parrilla tradicional o herrería contemporánea, aportamos décadas de experiencia a cada proyecto.
                </p>
              </div>
            </div>

            {/* Stats/Features */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-secondary/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div className="text-center p-6 bg-secondary/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Proyectos Completados</div>
                </div>
                <div className="text-center p-6 bg-secondary/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Garantía de Calidad</div>
                </div>
                <div className="text-center p-6 bg-secondary/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Soporte</div>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "La calidad no es un acto, es un hábito. En cada pieza que creamos, ponemos nuestra pasión y experiencia para superar las expectativas."
                </blockquote>
                <cite className="text-foreground font-semibold">- Héctor Medina, Maestro Herrero</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SEOContent;