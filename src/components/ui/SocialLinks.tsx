import { Icon } from "@/components/ui/Icon";
import { profile } from "@/content";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {profile.socialLinks
        .filter((link) => ["github", "linkedin", "email"].includes(link.kind))
        .map((link) => (
          <a
            key={link.kind}
            href={link.href}
            target={link.kind === "email" ? undefined : "_blank"}
            rel={link.kind === "email" ? undefined : "noreferrer"}
            className="focus-ring rounded-sm text-neutral-700 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
            aria-label={link.label}
          >
            <Icon
              name={link.kind as "github" | "linkedin" | "email"}
              className="size-5"
            />
          </a>
        ))}
    </div>
  );
}
