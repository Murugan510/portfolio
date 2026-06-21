import { useViewMode } from "../../context/ViewModeContext";

interface TokenProps {
  type: string;
  children: React.ReactNode;
}

function T({ type, children }: TokenProps) {
  return <span className={`tok tok--${type}`}>{children}</span>;
}

export function HeroSyntax() {
  const { viewMode } = useViewMode();
  if (viewMode !== "vscode") return null;

  return (
    <div className="syntax-block" aria-hidden="true">
      <pre className="syntax-pre">
        <code>
          <T type="comment">/** README.md — Senior Frontend Engineer */</T>
          {"\n"}
          <T type="keyword">export const</T> <T type="name">engineer</T> = {"{"}
          {"\n  "}
          <T type="prop">name</T>: <T type="string">"Murugan Ramakrishnan"</T>,
          {"\n  "}
          <T type="prop">role</T>: <T type="string">"Senior Frontend Engineer"</T>,
          {"\n  "}
          <T type="prop">location</T>: <T type="string">"Bangalore, India"</T>,
          {"\n  "}
          <T type="prop">experience</T>: <T type="string">"3.5+ years"</T>,
          {"\n  "}
          <T type="prop">stack</T>: [<T type="string">"React Native"</T>, <T type="string">"React"</T>, <T type="string">"Next.js"</T>, <T type="string">"TypeScript"</T>],
          {"\n  "}
          <T type="prop">impact</T>: <T type="string">"100K+ daily active users"</T>,
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
  const { viewMode } = useViewMode();
  if (viewMode !== "vscode") return null;

  return (
    <div className="syntax-block" aria-hidden="true">
      <pre className="syntax-pre">
        <code>
          <T type="comment"># about.md</T>
          {"\n\n"}
          <T type="heading">## Building products that scale</T>
          {"\n\n"}
          Senior Frontend Engineer with <T type="bold">3.5+ years</T> shipping at product companies.
          {"\n\n"}
          <T type="keyword">Specializations:</T>
          {"\n"}
          - <T type="string">Performance optimization</T>
          {"\n"}
          - <T type="string">Reusable architecture</T>
          {"\n"}
          - <T type="string">Video streaming</T>
          {"\n"}
          - <T type="string">Analytics & SEO</T>
          {"\n"}
          - <T type="string">100K+ DAU production apps</T>
        </code>
      </pre>
    </div>
  );
}
