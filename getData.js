import { csv } from 'd3';

// const csvUrl = 'https://gist.githubusercontent.com/evarun22/39d2fdb26f358c0171aa87b989b4d816/raw/e52963e5791313311781b8e42e4623280d6d1754/vgsales.csv';
 const csvUrl ='https://gist.githubusercontent.com/doanphung0402/42b93451cd07d87ba113961b44b7d13f/raw/33795356a4b012bfb118e1b3e703dc0aa4707c07/game-sale-analysis-data.csv'; 

export const getData = async () => {
  const data = await csv(csvUrl);
  console.log("🚀 ~ file: getData.js ~ line 8 ~ getData ~ data", data[0])
  
  // Have a look at the attributes available in the console!
  return data;
};