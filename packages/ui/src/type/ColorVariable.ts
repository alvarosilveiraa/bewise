import { ColorScale } from "./ColorScale";

export type ColorVariable =
  | "$accent"
  | "$accent.f"
  | `$accent.${ColorScale}`
  | "$background"
  | "$background.f"
  | `$background.${ColorScale}`
  | "$danger"
  | "$danger.f"
  | `$danger.${ColorScale}`
  | "$default"
  | "$default.f"
  | `$default.${ColorScale}`
  | "$divider"
  | "$divider.f"
  | `$divider.${ColorScale}`
  | "$foreground"
  | "$foreground.f"
  | `$foreground.${ColorScale}`
  | "$primary"
  | "$primary.f"
  | `$primary.${ColorScale}`
  | "$secondary"
  | "$secondary.f"
  | `$secondary.${ColorScale}`
  | "$success"
  | "$success.f"
  | `$success.${ColorScale}`
  | "$warning"
  | "$warning.f"
  | `$warning.${ColorScale}`;
