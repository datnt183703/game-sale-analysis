import vega from 'vega';
import vegaLite from 'vega-lite';
import vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';
import { config } from './config';
import { getData } from './getData';
import { viz } from './vizTotal/viz';

//doanh thu game qua cac nam 
import {SalePerYear} from "./vizTotal/phung/SalePerYear";  

// danh thu qua cac nam cua top 5 nhà phát hành có doanh số cao nhất 
import {PublisherSale} from '././vizTotal/phung//PublisherSale';

//số lượng game qua các năm 
import {gameLaunchedPerYearLine} from '././vizTotal/phung/GameLaunchedPerYear'

//tổng doanh số jp qua các năm 
import {SaleJapanPerYear} from './vizTotal/phung/SaleAreaPerYear'


//số game được chơi trên flatform qua các năm 
import {gameOfPlatformPerYear} from '././vizTotal/phung/gameOfPlatformPerYear'


//doanh thu global_sale của DS 
import {SaleGameNitendo} from './vizTotal/phung/SaleGameNitendo'

vl.register(vega, vegaLite, {
  view: { renderer: 'svg' },
  init: view => { view.tooltip(new Handler().call); }
});

// const run = async () => {
//   const marks = viz
//     .data(await getData())
//     .width(window.innerWidth)
//     .height(300)
//     .autosize({ type: 'fit', contains: 'padding' })
//     .config(config);
    
//   document.body.appendChild(await marks.render()); 
  
// };




// run();