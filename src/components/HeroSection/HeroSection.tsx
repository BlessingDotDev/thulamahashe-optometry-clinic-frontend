type HeroSectionProps = {
  title: string;
  subtitle: string;
}

function HeroSection({title, subtitle}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex px-8">

      <div className="absolute inset-0" >
        <img
          src='/bg-hero.png'
          alt='optometry clinic '
          className='w-full h-full object-cover'
        />
      </div>

      <div className='absolute inset-0 bg-black/60' />

      <div className='relative z-10 w-full flex flex-col items-center justify-center gap-24 '>
        <div>
          <h1>{title}</h1>
        </div>

        <div>
          <h2 className='text-center max-w-xl'>{subtitle}</h2>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;