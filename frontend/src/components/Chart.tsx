import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  XYChart,
  Tooltip
} from '@visx/xychart';
import { Accessors, BBChartData } from '../types';
import { getAnimatedLineSeries } from '../utils';

interface TooltipData {
  nearestDatum?: { key?: string; datum: string };
}
interface Tooltip {
  tooltipData: TooltipData;
}

interface Props {
  data: BBChartData[];
  width: number;
}

const accessors: Accessors = {
  xAccessor: (d) => d.x,
  yAccessor: (d) => d.y
};

const Chart = ({ data, width }: Props) => {
  const animatedLineSeries = getAnimatedLineSeries(data, accessors);
  return (
    <XYChart
      height={300}
      width={width}
      xScale={{ type: 'band' }}
      yScale={{ type: 'linear' }}
    >
      <AnimatedAxis orientation="bottom" />
      <AnimatedGrid columns={false} numTicks={4} />

      {animatedLineSeries.map((renderComponent) => renderComponent())}

      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div
              style={{
                color:
                  colorScale &&
                  tooltipData?.nearestDatum?.key &&
                  colorScale(tooltipData?.nearestDatum?.key)
              }}
            >
              {tooltipData?.nearestDatum?.key}
            </div>

            {tooltipData?.nearestDatum?.datum &&
              // @ts-expect-error - no ts support for visx
              accessors.xAccessor(tooltipData.nearestDatum.datum)}
            {', '}
            {
              // @ts-expect-error - no ts support for visx
              accessors.yAccessor(tooltipData.nearestDatum.datum)
            }
          </div>
        )}
      />
    </XYChart>
  );
};

export default Chart;
