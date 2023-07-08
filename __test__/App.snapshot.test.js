import renderer from "react-test-renderer";
import TestComp from "../src/TestComp";


test("renders learn react link", () => {
  const tree = renderer.create(<TestComp />).toJSON();
  expect(tree).toMatchInlineSnapshot(`null`);
});