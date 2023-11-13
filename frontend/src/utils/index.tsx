import { LegacyRef } from 'react';
import imgSmith from '../assets/smith.png';
import { Accessors, BBChartData } from '../types';
import { AnimatedLineSeries } from '@visx/xychart';

export const isStartPage = (location: { pathname: string }): boolean =>
  location.pathname === '/';

export interface ValidationResult {
  isValid: boolean;
  item: string;
  errorAt?: number;
  got?: string;
  expected?: string;
}
interface VisXChartData {
  x: string;
  y: number;
}

type VKey = 'v1' | 'v2' | 'v3' | 'v4';

export const forceNumber = (input: number | undefined) => Number(input) || 0;

export const getAnimatedLineSeries = (
  inputData: BBChartData[],
  accessors: Accessors
): (() => JSX.Element)[] => {
  const output: (() => JSX.Element)[] = [];
  inputData.forEach((data) => {
    const vKeys = Object.keys(data).filter((name) =>
      name.startsWith('v')
    ) as VKey[];

    vKeys.forEach((vKey) => {
      const thisVData: VisXChartData[] = inputData.map((data2) => {
        // Create a Date object from the original date string
        const originalDate = new Date(data2.t || Date.now());

        // Format the date using Intl.DateTimeFormat
        const formatter = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        });
        const formattedDate = formatter.format(originalDate);
        return {
          x: formattedDate,
          y: forceNumber(data2[vKey])
        };
      });

      output.push(() => (
        <AnimatedLineSeries
          dataKey={`${data.t}${vKey}`}
          key={`${data.t}${vKey}`}
          data={thisVData}
          {...accessors}
        />
      ));
    });
  });
  return output;
};

export const validateChunksData = (chunk: string): ValidationResult => {
  const allowedBrackets = ['[]', '<>', '{}', '()'];

  const isCorresponding = (a: string, b: string): boolean =>
    allowedBrackets.includes(`${a}${b}`);

  const getCorresponding = (start: string): string | undefined =>
    allowedBrackets.find((item) => item.startsWith(start));

  const isOpener = (input: string): boolean => openers.includes(input);

  const openers: string[] = ['[', '<', '{', '('];
  const chunkArray: string[] = chunk.split('');
  let opened: string[] = [];

  for (let i = 0; i < chunkArray.length; i++) {
    const currentBracket: string = chunkArray[i];
    const lastNonClosed: string | undefined = opened[opened.length - 1];

    /* If it's a "start bracket" */
    if (isOpener(currentBracket)) {
      opened = isOpener(currentBracket) ? [...opened, currentBracket] : opened;
    } else if (
      /* If it's an "end bracket" */
      lastNonClosed &&
      isCorresponding(lastNonClosed, currentBracket)
    ) {
      opened.pop();
    } else {
      /* If it's a forbidden bracket" */
      return {
        isValid: false,
        item: chunk,
        errorAt: i,
        got: currentBracket,
        expected: getCorresponding(lastNonClosed)
      };
    }
  }
  return { isValid: true, item: chunk };
};

export const highlight = (
  text: string,
  index: number,
  errorRef?: LegacyRef<HTMLSpanElement>,
  atWill?: boolean
): JSX.Element => {
  return (
    <>
      {text.substring(0, index)}
      {atWill ? (
        <span
          ref={errorRef}
          className="drop-shadow-white relative mx-1 rounded bg-bb-red-base px-1 font-bold text-white drop-shadow-md"
        >
          {text.charAt(index)}

          <img
            src={imgSmith}
            alt="Will holding up his hands like hie's presenting something"
            className="absolute -left-[7rem] -top-[2rem] z-10 w-24 max-w-none animate-move-will"
          />
        </span>
      ) : (
        text.charAt(index)
      )}

      {text.substring(index + 1)}
    </>
  );
};

type VParam = 'v1' | 'v2' | 'v3' | 'v4';
interface VCounter {
  v1?: number;
  v2?: number;
  v3?: number;
  v4?: number;
  count?: number;
}

interface ValuesTotal {
  [date: string]: VCounter;
}

export const getAverageValues = (input: BBChartData[]) => {
  if (!input) return [];
  const params: VParam[] = ['v1', 'v2', 'v3', 'v4'];
  const counter: VCounter = params.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {} as VCounter);

  const valuesTotal: ValuesTotal = input.reduce((acc, curr) => {
    const date = curr.t?.substring(0, 10) || '';
    acc[date] = { ...acc[date] } ?? {};
    params.forEach((param) => {
      acc[date][param] =
        forceNumber(acc[date]?.[param]) + forceNumber(curr[param]);
      counter[param] = (counter[param] || 0) + 1;
    });
    acc[date].count = forceNumber(acc[date].count) + 1;
    return acc;
  }, {} as ValuesTotal);

  const valuesAverage: BBChartData[] = Object.keys(valuesTotal).reduce(
    (acc, curr) => {
      const values = valuesTotal[curr];
      params.forEach((param) => {
        values[param] = Math.round(
          forceNumber(values[param]) / forceNumber(values.count)
        );
      });
      const { v1, v2, v3, v4 } = values || {};
      acc = [...acc, { t: curr, v1, v2, v3, v4 }];
      return acc;
    },
    [] as BBChartData[]
  );

  return valuesAverage;
};
