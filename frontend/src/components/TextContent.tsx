import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function TextContent({ children }: Props) {
  return <div className="px-5 sm:px-[11rem]">{children}</div>;
}
export default TextContent;
