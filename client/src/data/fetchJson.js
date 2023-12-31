import qudsi from '../data/json/qudsi.json';
import nawawi from '../data/json/nawawi.json';
import shahwaliullah from '../data/json/shahwaliullah.json';
import bulugh_almaram from '../data/json/bulugh_almaram.json';
import riyad_assalihin from '../data/json/riyad_assalihin.json';
import tirmidhi from '../data/json/tirmidhi.json';



export const fetchDb = (name) => {
    if (name === 'qudsi') {
        return qudsi
    }
    if (name === 'shahwaliullah') {
        return shahwaliullah
    }
    if (name === 'bulugh_almaram') {
        return bulugh_almaram
    }
    if (name === 'riyad_assalihin') { return riyad_assalihin }
    if (name === 'nawawi') { return nawawi }
    if (name === 'tirmidhi') { return tirmidhi }

}