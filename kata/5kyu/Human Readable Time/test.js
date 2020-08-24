import { TestData, getTestDescribe } from "../../../lib/testHelper";
import { humanReadable } from "./solution";

const example = [
  new TestData(['5'], '00:00:05'),
  new TestData(['60'], '00:01:00'),
  new TestData(['86399'], '23:59:59'),
];
const edgeCases = [
  new TestData(['0'], '00:00:00'),
];

getTestDescribe(humanReadable, { example, edgeCases });
