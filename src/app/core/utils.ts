export class TreeUtil {

    static build(srcArr: Array<any>, srcKey: string, srcText: string,
                 parentKey: string, targetKey: string, targetText: string, childrenKey: string): Array<any> {

        const totalMap = {}, retArr = [];

        let item, newItem, parentNode;

        for (let index = 0, length = srcArr.length; index < length; index++) {
            item = srcArr[index];
            newItem = {};
            newItem[targetKey] = item[srcKey];
            newItem[targetText] = item[srcText];
            newItem.parentNo = item[parentKey];
            totalMap[item[srcKey]] = newItem;
        }
        for (let iterator in totalMap) {
            if (!totalMap[iterator]) {
                return;
            } else {
                iterator = totalMap[iterator];
                if (iterator['parentNo']) {
                    if (parentNode = totalMap[iterator['parentNo']]) {
                        parentNode[childrenKey] = parentNode[childrenKey] || [];
                        parentNode[childrenKey].push(iterator);
                        delete iterator['parentNo'];
                    } else {
                        retArr.push(iterator);
                    }
                } else {
                    delete iterator['parentNo'];
                    retArr.push(iterator);
                }
            }

        }
        console.log(retArr);
        return retArr;

    }
}
