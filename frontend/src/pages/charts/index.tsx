import { useQuery } from 'react-query';
import { fetchFromBackend } from '../../api';
import Chart from '../../components/Chart';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import TextContent from '../../components/TextContent';
import Button from '../../components/Button';
import { forceNumber, getAverageValues } from '../../utils';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

function Charts() {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['charts'],
    queryFn: async () => await fetchFromBackend('data-series'),
    staleTime: Infinity
  });
  const parentDiv = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [availableWidth] = useDebounce(parentWidth, 300);

  useEffect(() => {
    setParentWidth(forceNumber(parentDiv?.current?.clientWidth));
  }, [parentDiv]);

  useEffect(() => {
    const handle = () =>
      setParentWidth(forceNumber(parentDiv?.current?.clientWidth));
    // Attach the debounced handler to the window resize event
    window.addEventListener('resize', handle);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handle);
    };
  }, []);

  const averageData = getAverageValues(data);

  return (
    <>
      <div className="relative z-10" ref={parentDiv}>
        <Heading>Charts</Heading>
        <TextContent>
          <Paragraph>
            Welcome to the V1, V2, V3, V4 circus! We don't know what they stand
            for either, but here they are—doing chart acrobatics just for you.
            Enjoy the mystery ride!
          </Paragraph>
          <Paragraph>
            Each date in this chart displays the average value of each v-point
            of that day.
          </Paragraph>
          <div className="flex justify-center">
            <Button
              onClick={() => refetch()}
              isDisabled={isRefetching}
              className="my-5"
            >
              Get the latest of stats
            </Button>
          </div>
          <Paragraph>{isLoading && 'Loading data...'}</Paragraph>
        </TextContent>
        {data && <Chart data={averageData} width={availableWidth} />}
      </div>
    </>
  );
}

export default Charts;
