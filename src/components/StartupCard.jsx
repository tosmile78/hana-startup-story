import { Link } from 'react-router-dom';

function StartupCard({ startup }) {
  return (
    <article className="group overflow-hidden rounded-card border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
        {startup.category}
      </div>
      <h3 className="text-2xl font-semibold text-primary">{startup.name}</h3>
      <p className="mt-3 text-sm leading-6 text-tertiary">{startup.description}</p>
      <p className="mt-4 text-base font-medium text-secondary">{startup.highlight}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {startup.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-section px-3 py-1 text-xs font-medium text-tertiary">
            {tag}
          </span>
        ))}
      </div>
      <Link
        to={`/startups/${startup.id}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-strong"
      >
        자세히 보기 →
      </Link>
    </article>
  );
}

export default StartupCard;
