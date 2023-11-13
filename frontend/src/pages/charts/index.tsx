import { useQuery } from 'react-query';
import { fetchFromBackend } from '../../api';
import Chart from '../../components/Chart';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import TextContent from '../../components/TextContent';
import Button from '../../components/Button';
import { getAverageValues } from '../../utils';

function Charts() {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['charts'],
    queryFn: async () => await fetchFromBackend('data-series'),
    staleTime: Infinity
  });

  const averageData = getAverageValues(data);

  return (
    <>
      <div className="relative z-10">
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
        {data && <Chart data={averageData} />}
      </div>
    </>
  );
}

export default Charts;
