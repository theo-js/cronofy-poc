import type { FC } from "react";
import { Agenda } from "../../packages/cronofy/agenda";

const AgendaPage: FC = () => (
  <div>
    <h1>Bienvenue sur votre agenda Cronofy</h1>
    <Agenda options={{ id: "cronofy-agenda" }} />
  </div>
);

export default AgendaPage;
