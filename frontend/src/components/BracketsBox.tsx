import Code from './Code';
import MessageBar from './MessageBar';
import ValidIndicator from './ValidIndicator';
import { ValidationResult, highlight } from '../utils';
import { useRef, useState } from 'react';
import Button from './Button';

interface Props {
  chunkItem: string;
  validation: ValidationResult;
  no: number;
}
function BracketsBox({ chunkItem, validation, no }: Props) {
  const { isValid, errorAt, got, expected } = validation;
  const boxRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLSpanElement>(null);
  const [atWill, setAtWill] = useState(false);

  return (
    <div className="relative mb-8 flex flex-col items-center rounded-2xl rounded-br-lg rounded-tl-lg bg-bb-blue-dark p-5">
      <div className="font-heading absolute -left-1 -top-2 flex h-12 w-12 items-center justify-center transform rotate-3 rounded-full border-4 border-bb-blue-dark bg-white text-2xl font-black text-bb-blue-dark">
        {no}
      </div>
      <div className="mb-2 flex flex-col items-center gap-2">
        <ValidIndicator isValid={isValid} />
        {!isValid && (
          <>
            <MessageBar type="error">
              Things turned sideways at index <b>{errorAt}</b>. Got:
              <Code>{got}</Code>, but expected{' '}
              {(expected && <Code>{expected}</Code>) || ' a start bracket'}.
            </MessageBar>
            <Button onClick={() => setAtWill(!atWill)}>
              {!atWill
                ? 'Let Will find the mistake'
                : 'Keep Will Smith out of this F*$&%"#* BOX!'}
            </Button>
          </>
        )}
      </div>
      <div
        ref={boxRef}
        className="relative border-2 border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.1)] p-3 font-code text-bb-sand-base"
      >
        {isValid
          ? chunkItem
          : highlight(chunkItem, errorAt || 0, errorRef, atWill)}
      </div>
    </div>
  );
}

export default BracketsBox;
