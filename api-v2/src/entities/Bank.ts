import { JunoEntity } from "./JunoEntity";
import { Link } from "./Link";

export interface Bank extends JunoEntity {
  number?: string;
  name?: string;
  _links?: {
    self?: Link
  };
}
