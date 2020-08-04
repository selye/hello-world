const bookFilter = val => {
    if (!val) return val
    let map = new Map();
    map.set("01", "西游记")
    map.set("02", "三国演义")
    map.set("03", "红楼梦")
    map.set("04", "水浒传")
    let res = map.get(val)
    return res ? res : val
}
export {
    bookFilter
}