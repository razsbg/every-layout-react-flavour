import * as React from "react";

import "./Stack.css";

export function Stack({ children, space = "var(--space)", recursive = false, splitAfter = null }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const id = `Stack-${space}${recursive}${splitAfter}`;
    ref.current.dataset.i = id;

    if (!document.getElementById(id)) {
      injectStyleElement();
    }

    function injectStyleElement() {
      const styleElement = document.createElement("style");
      styleElement.id = id;
      styleElement.innerHTML = `
        [data-i="${id}"] ${recursive ? "" : " >"} * + *{
          margin-top: ${space};
        }

        ${
          splitAfter
            ? `
          [data-i="${id}"]:only-child {
            height: 100%;
          }

          [data-i="${id}"] > :nth-child(${splitAfter}) {
            margin-bottom: auto;
          }
        `
            : ``
        }
      `
        .replace(/\s\s+/g, " ")
        .trim();

      document.head.appendChild(styleElement);
    }
  }, []);

  return (
    <div ref={ref} className="stack">
      {children}
    </div>
  );
}
