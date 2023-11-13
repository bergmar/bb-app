import { useQuery } from 'react-query';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import { fetchFromBackend } from '../../api';
import TextContent from '../../components/TextContent';
import Button from '../../components/Button';
import { validateChunksData } from '../../utils';
import BracketsBox from '../../components/BracketsBox';

function Brackets() {
  const { data, refetch } = useQuery({
    queryKey: ['brackets'],
    queryFn: async () => await fetchFromBackend('brackets'),
    staleTime: Infinity
  });

  return (
    <TextContent>
      <div className="relative z-10">
        <Heading>Brackets</Heading>
        <div>
          <Paragraph>
            Enter the world of Brackets – both allies and adversaries in the
            punctuation realm. Some will play by the rules, while others may
            stray.
          </Paragraph>
          <Paragraph>
            Fear not, for we're here to guide you through the maze guishing the
            validated from the rogue, ensuring clarity in the midst of
            punctuation's dance.
          </Paragraph>
          <Paragraph>Let's meet our candidates.</Paragraph>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <Button onClick={() => refetch()}>
          Update the list of candidates!
        </Button>
      </div>

      {data &&
        data.map((chunkItem, index) => {
          const validation = chunkItem && validateChunksData(chunkItem);
          return (
            <BracketsBox
              key={chunkItem.substring(0, 20)}
              chunkItem={chunkItem}
              validation={validation}
              no={index + 1}
            />
          );
        })}
    </TextContent>
  );
}

export default Brackets;
