import * as React from "react";
import * as RTL from "@testing-library/react";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

function customRender(ui: React.ReactElement, options: RTL.RenderOptions = {}) {
  function Providers({ children }: { children?: React.ReactNode }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  return RTL.render(ui, { wrapper: Providers, ...options });
}

export * from "@testing-library/react";

export { customRender as render };
