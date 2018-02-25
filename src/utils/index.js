/**
 * Given some array:
 *    [
 *      {brand: 'Nike', name: 'AirMax'},
 *      {brand: 'Nike', name: 'Cortez'},
 *      {brand: 'Adidas', name: 'Ultra Boost'}
 *    ]
 *
 * This function will return a new array that groups by a specific
 * key and returns a count for each key:
 *
 *    [
 *      {brand: 'Nike', count: 2},
 *      {brand: 'Adidas', count: 1}
 *    ]
 * @param arr An array of objects
 * @param key A string of the object property
 */
export function countByKey(arr, key) {

    var list = arr.filter(item => item.brand.includes(key))

    var grouping = {
        brand: "",
        count: 0
    };
    for (var i = 0; i < list.length; i++) {
        var brand = list[i].brand;
        if (!grouping[brand]) {
        }
        grouping.brand = brand;
        grouping.count++;
    }

    var finalGrouping = [];

    finalGrouping.push(grouping)

    finalGrouping.sort(compare);

    return finalGrouping;

}

function compare(a, b) {
    if (a.count < b.count) 
        return -1;
    if (a.count > b.count) 
        return 1;
    return 0;
}