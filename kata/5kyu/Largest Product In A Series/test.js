import { TestData, getTestDescribe } from "../../../lib/testHelper";
import { greatestProduct } from "./solution";

const example = [
  new TestData(["123834539327238239583"], 3240),
  new TestData(["92494737828244222221111111532909999"], 5292),
  new TestData(["9581207584378021250244"], 5376),
  new TestData(["593833080828336530594991"], 14580)
];
const edgeCases = [
  new TestData(["02494037820244202221011110532909999"], 0)
];

getTestDescribe(greatestProduct, { example, edgeCases });
