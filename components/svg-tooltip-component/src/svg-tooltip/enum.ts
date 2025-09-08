/**
 * Defines the available shapes for tooltip markers.
 * These shapes are used to visually represent data points in tooltips.
 */
export type TooltipShape =
  /** Renders a circular marker. */
  | 'Circle'
  /** Renders a rectangular marker. */
  | 'Rectangle'
  /** Renders a triangular marker. */
  | 'Triangle'
  /** Renders a diamond-shaped marker. */
  | 'Diamond'
  /** Renders a cross-shaped marker. */
  | 'Cross'
  /** Renders a plus-shaped marker. */
  | 'Plus'
  /** Renders a horizontal line marker. */
  | 'HorizontalLine'
  /** Renders a vertical line marker. */
  | 'VerticalLine'
  /** Renders a pentagon-shaped marker. */
  | 'Pentagon'
  /** Renders an inverted triangle marker. */
  | 'InvertedTriangle'
  /** Renders a custom image as a marker. */
  | 'Image'
  /** Renders a star-shaped marker. */
  | 'Star'
  /** No marker is rendered. */
  | 'None';

/**
 * Defines the available themes for tooltips.
 * These themes control the visual styling of tooltips to match various design languages.
 */
export type TooltipTheme =
  /** Material 3 design theme. */
  | 'Material3'
  /** Dark variant of Material 3 design theme. */
  | 'Material3Dark';

/**
 * Defines the placement options for tooltips.
 * These options control where the tooltip appears relative to its target.
 */
export type TooltipPlacement =
  /** Places the tooltip to the left of the target. */
  'Left' |
  /** Places the tooltip to the right of the target. */
  'Right' |
  /** Places the tooltip at the top of the target. */
  'Top' |
  /** Places the tooltip at the bottom of the target. */
  'Bottom';
