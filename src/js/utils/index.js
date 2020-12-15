export const makeObj = (fields) => {
    const obj = {};
        Object.keys(fields).forEach(key => {
            obj[key] = fields[key];
            obj.componentType = key;
        })
    return obj;
}
