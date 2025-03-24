"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-10 px-6 max-w-6xl mx-auto">
      {/* Sticky header for mobile scroll marker */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>

      {/* Visible title */}
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold uppercase tracking-wide text-foreground">
          About Me
        </h2>
        <hr className="mt-2 border-slate-600" />
      </div>

      {/* Paragraphs */}
      <div className="flex flex-col gap-4 text-muted-foreground">
        <p>
          A data storyteller, analyst, and lifelong learner passionate about transforming raw data into powerful
          business insights. With a solid foundation in SQL, Python, Power BI, and Tableau, I bring a hybrid of
          analytical expertise and strategic thinking to every project I work on. I am currently pursuing my MS in
          Information Systems at the University of Texas at Arlington, where I also serve as a Graduate Teaching
          Assistant, helping students master real-world data skills.
        </p>

        <p>
          Beyond academics, I led cross-functional teams in the tech industry, driven marketing optimization through
          BI dashboards, and built predictive models to solve real-world problems like job fraud detection. My
          experience spans Wipro, Shree Venkateshwara Foams, and academia—each sharpening my ability to simplify
          complexity and drive decision-making.
        </p>

        <p>
          I am also a former student government board member, volunteer during COVID relief efforts, and a competitive
          basketball player, which has fueled my collaborative spirit and resilience. Off the clock, I love exploring
          user-centric design and building clean, scrollable portfolio experiences—just like this one.
        </p>

        <p>
          Whether it is through code, design, or storytelling, I am driven to make an impact—data-first, people-always.
        </p>
      </div>
    </section>
  );
}
