import { FC, ReactNode, useEffect, useState } from "react";

export const CronofyElementWrapper: FC<{
  id: string;
  loadElement: () => Promise<any>;
  children?: ReactNode;
}> = ({ id, loadElement, children }) => {
  //Attributes
  const [element, setElement] = useState(null);

  //Effects
  useEffect(() => {
    if (!element) {
      loadElement().then((element) => setElement(element));
    }
  }, []);

  //Render
  return <div id={id}>{children}</div>;
};
