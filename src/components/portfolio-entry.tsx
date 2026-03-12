import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div className="flex flex-col gap-6">
      {portfolio.imageUrl && (
        <div className="w-full min-w-[160px] relative">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            width={960}
            height={480}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
      <div className="flex flex-row gap-4 items-center mb-2">
          {portfolio.award && (
            <div className="group flex px-2 py-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-md items-center shadow-md border border-amber-100/50 relative overflow-hidden hover:rotate-1 transition-all duration-300">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
              <p className="text-xs text-amber-700 font-medium relative">
                {portfolio.award}
              </p>
            </div>
          )}
        </div>
        <h3 className="font-serif text-md mb-3">
          {portfolio.title}
        </h3>

        {portfolio.technologies && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-zinc-600 px-2 py-1 bg-zinc-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {portfolio.links && (
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {portfolio.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              >
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        )}
        <p className="text-sm text-zinc-600 mb-4 mt-4 italic">
          {portfolio.description}
        </p>
      </div>
    </div>
  );
}
