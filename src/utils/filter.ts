export const multipleFilter = (filterState: string, value: string) => {
        let kindArr : string[];
        let kindStr;
        filterState === "" ? (kindArr = []) : (kindArr = filterState.split(","));
        if (kindArr.includes(value)) {
          const valueIndex = kindArr.indexOf(value);
          if (valueIndex > -1) {
            kindArr.splice(valueIndex, 1);
          }
          kindStr = kindArr.join(",");
        } else {
          kindArr.push(value);
        }
        kindStr = kindArr.join(",");
        console.log(kindStr);
        return (kindStr);
}
