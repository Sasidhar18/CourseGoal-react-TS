import { type ReactNode } from "react";

type InfoHintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type InfoWarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

export default function InfoBox(props: InfoHintBoxProps | InfoWarningBoxProps) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <h2>{mode}</h2>
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>{mode}</h2>
      <p>{children}</p>
    </aside>
  );
}
