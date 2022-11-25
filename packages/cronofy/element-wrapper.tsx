import { FC, ReactNode, useEffect, useState } from "react";

export const CronofyElementWrapper: FC<{
  id: string;
  loadElement: () => any;
  children?: ReactNode;
}> = ({ id, loadElement, children }) => {
  //Attributes
  const [element, setElement] = useState(null);

  //Effects
  useEffect(() => {
    if (!element) setElement(loadElement());
  }, []);

  //Render
  return <div id={id}>{children}</div>;
};
