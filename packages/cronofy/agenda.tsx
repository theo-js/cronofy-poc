import type { FC } from "react";
import { CronofyElementWrapper } from "./element-wrapper";
import * as CronofyElements from "cronofy-elements";

export const Agenda: FC<{ options: { id: string; accessToken: string } }> = ({
  options,
}) => (
  <CronofyElementWrapper
    id={options.id}
    loadElement={() =>
      CronofyElements.Agenda({
        target_id: options.id,
        element_token: `{${options.accessToken}}`,
      })
    }
  />
);
