/*
Time Complexity:
The time complexity of this algorithm is O(n + k^2). 
Length n grows linearly as the application scales because it only has to iterate over "items" one
time O(n) to create the new object (itemsObj). The new object (itemsObj) contains the colors
required by "order" as properties and the number the color appears in "items" as keys.

The second iteration occurs over "order" which then does an inner loop of "itemsObj" O(k^2).

Space Complexity:
The space complexity of the algorithm is O(n). The new object (itemsObj) is proportional to the
number of colors "order" has. Essentially, a new object (itemsObj) is created from "items" based
on the colors required from the "order". The new object (itemsObj) makes it way faster to
iterate over as "items" scales up.

itemsObj = {
  blue: 2,
  red: 2,
  green: 1
}
*/

let items = ["red", "blue", "red", "green", "blue"]; // Length = n
let order = ["blue", "red", "black"]; // Length = k

function orderArray(items, order) {
  const [itemsObj, newArr] = [{}, []];
  items.forEach((itemEl) => {
    itemsObj[itemEl] ? (itemsObj[itemEl] += 1) : (itemsObj[itemEl] = 1);
  });

  order.forEach((orderEl) => {
    let count = itemsObj[orderEl];
    if (orderEl in itemsObj) {
      for (let i = 0; i < count; i++) newArr.push(orderEl);
    }
  });
  return newArr;
}

console.log(orderArray(items, order));

test("Return ordered array", () => {
  expect(orderArray(items, order)).toStrictEqual([
    "blue",
    "blue",
    "red",
    "red",
  ]);
});
