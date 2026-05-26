const channels = [
  { label: "GitHub", href: "https://github.com/zhoushui521-alt" },
  { label: "Email", href: "mailto:zhoushui521@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-6">
        <div className="flex flex-wrap gap-6">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <span className="mr-1.5 text-text-secondary/30">&gt;</span>
              {ch.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-text-secondary/60">
          © {new Date().getFullYear()} — Built with AI
        </p>
      </div>
    </footer>
  );
}
