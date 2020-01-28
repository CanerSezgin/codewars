import { TestData, getTestDescribe } from "../../../lib/testHelper";
import { calculateDamage } from "./solution";

const example = [
  new TestData(["fire", "water", 100, 100], 25),
  new TestData(["grass", "water", 100, 100], 100),
  new TestData(["electric", "fire", 100, 100], 50),
  new TestData(["grass", "electric", 57, 19], 150),
  new TestData(["grass", "water", 40, 40], 100),
  new TestData(["grass", "fire", 35, 5], 175),
  new TestData(["fire", "electric", 10, 2], 250)
]
const edgeCases = [
  new TestData(["electric", "electric", 57, 19], 75),
  new TestData(["water", "water", 85, 5], 425),
  new TestData(["electric", "electric", 0, 19], 0)
]
const extra = [
  new TestData(["water", "electric", 92, 2], 1150),
     
]



getTestDescribe(calculateDamage, {example, edgeCases, extra})