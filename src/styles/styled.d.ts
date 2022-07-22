// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Record<string, string | Record<string, string>>;
  }
}
