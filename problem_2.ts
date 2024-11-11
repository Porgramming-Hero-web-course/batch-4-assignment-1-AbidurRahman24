
{

    function removeDuplicates(num:number[]):number[] {
        const newArray:number[] = [];
        
        for (let i = 0; i < num.length; i++) {
          let isDuplicate = false;
          
          for (let j = 0; j < newArray.length; j++) {
            if (num[i] === newArray[j]) {
              isDuplicate = true;
              break; 
            }
          }
          if (!isDuplicate) {
            newArray.push(num[i]);
          }
        }
        
        return newArray;
      }
      
      
    //   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}