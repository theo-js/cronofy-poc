import type { FC } from "react";
import { CronofyElementWrapper } from "./element-wrapper";
import { useGetCronofyAccessToken } from "./utils/getCronofyAccessToken";

export const Agenda: FC<{ options: { id: string } }> = ({ options }) => {
  //Attributes
  const { cronofyAccessToken, isLoadingCronofyAccessToken } =
    useGetCronofyAccessToken();

  //Render
  if (isLoadingCronofyAccessToken) return <>{"Chargement de l'agenda..."}</>;

  return (
    <CronofyElementWrapper
      id={options.id}
      loadElement={async () => {
        const CronofyElements = await import("cronofy-elements");
        return CronofyElements.Agenda({
          target_id: options.id,
          element_token: `{${cronofyAccessToken}}`,
          // demo: true,
        });
      }}
    />
  );
};
