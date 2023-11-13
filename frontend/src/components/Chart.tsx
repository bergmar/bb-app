import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  XYChart,
  Tooltip
} from '@visx/xychart';
import { Accessors, BBChartData } from '../types';
import { getAnimatedLineSeries } from '../utils';

interface TooltipData {
  nearestDatum: { key: string };
}
interface Tooltip {
  tooltipData: TooltipData;
}

interface Props {
  data: BBChartData;
}

const accessors: Accessors = {
  xAccessor: (d) => d.x,
  yAccessor: (d) => d.y
};

const Chart = ({ data }: Props) => {
  const animatedLineSeries = getAnimatedLineSeries(data, accessors);
  return (
    <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
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
                color: colorScale && colorScale(tooltipData.nearestDatum.key)
              }}
            >
              {tooltipData.nearestDatum.key}
            </div>
            {accessors.xAccessor(tooltipData.nearestDatum.datum)}
            {', '}
            {accessors.yAccessor(tooltipData.nearestDatum.datum)}
          </div>
        )}
      />
    </XYChart>
  );
};

export default Chart;