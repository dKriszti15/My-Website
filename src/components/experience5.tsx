import React from "react";
interface ExperienceItem {
  title: string;
  details: string;
  period: string;
  company: string;
  logo?: string;
  descriptions: string[];
}
interface Experience5Props {
  title?: string;
  experience?: ExperienceItem[];
}
const Experience5 = ({
  title = "Work Experience",
  experience = [
    {
      title: "Software Developer Intern",
      details: "Part-Time • On-site • Cluj-Napoca, CJ",
      period: "Oct 2024 - Feb 2025",
      company: "Codespring",
      descriptions: [
      "Developed, as part of a Scrum team, a full-stack application which controls a robotic arm, to automatically execute tests on different devices",
      "Created and labeled images to extend existing dataset",
      "Implemented frontend features like theme changing, authentication via Keycloak",
      "Created a test-presenting dashboard, which loads the existing tests and the recently executed ones, in real time"
    ],},
    {
      title: "Software Developer Intern",
      details: "Full-Time • Remote • Cluj-Napoca, CJ",
      period: "Aug 2024 - Sep 2024",
      company: "Babes-Bolyai University",
      descriptions: [
      "Worked on the frontend part of a webpage dedicated for teachers, helping them organize materials",
      "Developed REST API by adding multiple endpoints, implementing CRUD operations"
    ]}
  ],
}: Experience5Props) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-medium leading-tight md:text-7xl text-center">
            {title}
          </h2>
          <div className="space-y-8">
            {experience.map(
              ({ title, details, period, company, logo, descriptions }, idx) => (
                <div
                  key={idx}
                  className="border-border border-b pb-6 last:border-b-0"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="md:w-2/3">
                      <div className="mb-2 flex items-center gap-3">
                        <img
                          src={logo}
                          alt={``}
                          className="h-5 object-contain"
                        />
                        <h3 className="text-xl">{title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3 text-sm">
                        {details}
                      </p>
                      <ul className="text-muted-foreground text-md leading-relaxed list-disc list-inside space-y-1">
                        {descriptions.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-right md:w-1/3 md:text-right">
                      <p className="mb-1 text-sm font-medium">{period}</p>
                      <p className="text-muted-foreground text-sm">{company}</p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export { Experience5 };