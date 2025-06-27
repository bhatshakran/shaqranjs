import ProjectCard from './projectCard';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full flex flex-col justify-center items-center mt-60 md:mt-64 px-4 lg:px-0"
    >
      <h4 className="gradient-text font-inter font-semibold">CURATED WORK</h4>
      <h1 className="text-3xl font-pockota mt-4">My Personal Projects</h1>
      <div className="mt-24 space-y-40">
        <ProjectCard
          title="Aiisle"
          image="/aiisle.png"
          features={[
            'Platform Overview: A comprehensive repository/database of 20,000+ AI tools with advanced semantic search capabilities and intelligent categorization.',
            'Advanced Search(NLP + Vector): Natural language processing enables queries like "find 5 affordable high-quality video generators" with vector-based semantic matching.',
            'MVP Status: Production-ready application built for public launch, planned releases on Product Hunt and major tech directories.',
            'Tech Stack: Python, Redis, Sqlite, PLG(prometheus, loki, grafana) + Celery distributed processing, Cloudlfare R2 for object storage, FastAPI backend, Next.js frontend, Milvus db for vector storage, Helicone for observability and monitoring, containerized with Docker and Terraform-managed AWS infrastructure.',
          ]}
          link="https://aiisle.vercel.app"
        />
        <ProjectCard
          title="Lisani"
          image="/lisani.png"
          features={[
            'Platform Overview: An online e-tutoring platform designed for seamless, interactive learning experiences.',
            'Active User Base: Successfully serving 20+ engaged learners, with consistent growth and positive feedback.',
            'Interactive Learning:: Offers personalized 1:1 live lectures in Arabic language, Quranic studies, and Islamic calligraphy, ensuring tailored learning for each student.',
            'Tech Stack: Built with Next.js for frontend performance, PostgreSQL for reliable data management, AWS for scalable cloud infrastructure, and Express.js for robust backend operations.',
          ]}
          link="https://lisani.org"
        />
      </div>
    </section>
  );
};
