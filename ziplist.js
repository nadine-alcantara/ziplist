const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(alpha, nums) {
  const temp = [];
  for (let i = 0; i < alpha.length; i++) {
    temp.push(alpha[i], nums[i]);
  }
  return temp;
}
console.log(zipList(list1, list2));

function zipListTheSimpleWay(alpha, nums) {
  return _.flatten(_.zip(alpha, nums));
}
console.log(zipListTheSimpleWay(list1, list2));
