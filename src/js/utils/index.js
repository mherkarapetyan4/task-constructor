export const makeObj = (mainKey,fields) => {
    const obj = {};
    Object.keys(fields).forEach(key => {
        obj[key] = fields[key];

    });
    obj.componentType = mainKey;
    obj.id = generateID();
    obj.editable = false
    return obj;
};

export const generateID = () => "_" + Math.random().toString(36).substr(2, 9);
export const findObject = (arr, key, value) => arr.find(el => el[key] === value) || null
export const findIndex = (arr, key, value) => arr.findIndex(el => el[key] === value)
export const switchInArray = (arr, a, b) => {
    const buffArr = [...arr];
    let temp = buffArr[a];
    buffArr[a] = buffArr[b];
    buffArr[b] = temp;
    return buffArr;
}
