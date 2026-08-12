import { SITE } from "../../data/portfolio";

interface TokenProps {
  type: string;
  children: React.ReactNode;
}

function T({ type, children }: TokenProps) {
  return <span className={`tok tok--${type}`}>{children}</span>;
}

export function HeroSyntax() {
  return (
    <div className="syntax-block" aria-hidden="true">
      <pre className="syntax-pre">
        <code>
          <T type="comment">/** README.md — Senior Frontend Engineer */</T>
          {"\n"}
          <T type="keyword">export const</T> <T type="name">engineer</T> = {"{"}
          {"\n  "}
          <T type="prop">name</T>: <T type="string">"{SITE.name}"</T>,
          {"\n  "}
          <T type="prop">role</T>: <T type="string">"{SITE.title}"</T>,
          {"\n  "}
          <T type="prop">location</T>: <T type="string">"{SITE.location}"</T>,
          {"\n  "}
          <T type="prop">experience</T>: <T type="string">"{SITE.experience.toLowerCase()}"</T>,
          {"\n  "}
          <T type="prop">stack</T>: [<T type="string">"React Native"</T>, <T type="string">"React"</T>, <T type="string">"Next.js"</T>, <T type="string">"TypeScript"</T>],
          {"\n  "}
          <T type="prop">impact</T>: <T type="string">"1M+ downloads · 600K MAU"</T>,
          {"\n  "}
          <T type="prop">openToWork</T>: <T type="bool">true</T>,
          {"\n"}
          {"}"} <T type="keyword">as const</T>;
        </code>
      </pre>
    </div>
  );
}

export function AboutSyntax() {
  return (
    <div className="syntax-block" aria-hidden="true">
      <pre className="syntax-pre">
        <code>
          <T type="comment"># about.md</T>
          {"\n\n"}
          <T type="heading">## Building products that scale</T>
          {"\n\n"}
          Frontend engineer with <T type="bold">5+ years</T> professional experience.
          {"\n\n"}
          <T type="keyword">Focus:</T>
          {"\n"}
          - <T type="string">React.js · Next.js · React Native</T>
          {"\n"}
          - <T type="string">Offline-first & SSR/SEO</T>
          {"\n"}
          - <T type="string">Payments · media · i18n</T>
          {"\n"}
          - <T type="string">1M+ downloads · 600K MAU</T>
          {"\n"}
          - <T type="string">11 Indian languages</T>
        </code>
      </pre>
    </div>
  );
}
