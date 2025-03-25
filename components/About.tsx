"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-10 px-6 max-w-6xl mx-auto">

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
        I’m a data storyteller and analyst passionate about turning raw data into actionable insights. 
        With a strong foundation in SQL, Python, Power BI, and Tableau, I blend technical expertise 
        with strategic thinking to solve real-world problems.
        </p>

        <p>
        Currently pursuing my MS in Information Systems at UTA and working as a Graduate Teaching Assistant, 
        I’ve also gained hands-on experience at Wipro and Shree Venkateshwara Foams—leading BI dashboards, 
        predictive models, and cross-functional teams to drive business outcomes.
        </p>

        <p>
        Beyond analytics, I’ve served in student government, volunteered during COVID relief, and competed 
        as a basketball player—experiences that shaped my leadership, collaboration, and creative mindset.
        </p>

        <p>
        Whether through code, design, or data, I’m driven to create impact—data-first, people-always.
        </p>
      </div>
    </section>
  );
}
