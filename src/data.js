import { Trans } from "react-i18next";
import bonus1 from "./images/bonus1.png";
import bonus2 from "./images/bonus2.png";
import bonus3 from "./images/bonus3.png";

export const data = [
  {
    id: 1,
    image: bonus1,
    title: <Trans i18nKey="bonuses.bonus_1.title" />,
    description: <Trans i18nKey="bonuses.bonus_1.description" />,
  },
  {
    id: 2,
    image: bonus2,
    title: <Trans i18nKey="bonuses.bonus_2.title" />,
    description: <Trans i18nKey="bonuses.bonus_2.description" />,
  },
  {
    id: 3,
    image: bonus3,
    title: <Trans i18nKey="bonuses.bonus_3.title" />,
    description: <Trans i18nKey="bonuses.bonus_3.description" />,
  },
];
