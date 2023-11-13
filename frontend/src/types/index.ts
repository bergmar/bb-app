

interface AccessorsDataPoint {
  x: number;
  y: number;
}

export interface Accessors {
  xAccessor: (d: AccessorsDataPoint) => number;
  yAccessor: (d: AccessorsDataPoint) => number;
  // Add other accessors if needed
}
export interface BBChartData {
  t?: string;
  v1?: number;
  v2?: number;
  v3?: number;
  v4?: number;
}