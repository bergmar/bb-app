import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import clsx from 'clsx';

interface Props {
  isValid: boolean;
}
function ValidIndicator({ isValid }: Props) {
  return (
    <div className="inline-flex items-center gap-1 rounded-md bg-bb-sand-base p-1 px-4">
      {isValid ? 'Is valid!' : `Has errors`}
      <div
        className={clsx(
          'pb-[.1rem]',
          isValid ? 'text-green-400' : 'text-red-400'
        )}
      >
        {isValid ? (
          <CheckCircleIcon fontSize="small" />
        ) : (
          <ErrorIcon fontSize="small" />
        )}
      </div>
    </div>
  );
}

export default ValidIndicator;
