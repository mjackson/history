import expect from "expect";
import execSteps from "./execSteps";
import { REPLACE } from "../../constants";

export default (history, done) => {
  const steps = [
    location => {
      expect(location).toMatchObject({
        pathname: "/"
      });

      history.replace("/home?the=query#the-hash", { the: "state" });
    },
    (location, action) => {
      expect(action).toBe(REPLACE);
      expect(location).toMatchObject({
        pathname: "/home",
        search: "?the=query",
        hash: "#the-hash",
        state: { the: "state" }
      });
    }
  ];

  execSteps(steps, history, done);
};
