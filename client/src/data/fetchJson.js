import qudsi from '../data/json/qudsi.json';
import nawawi from '../data/json/nawawi.json';
import shahwaliullah from '../data/json/shahwaliullah.json';
import bulugh_almaram from '../data/json/bulugh_almaram.json';
import riyad_assalihin from '../data/json/riyad_assalihin.json';
import tirmidhi from '../data/json/tirmidhi.json';
import abudawud from '../data/json/abudawud.json';
import ahmed from '../data/json/ahmed.json';
import aladab_almufrad from '../data/json/aladab_almufrad.json';
import bukhari from '../data/json/bukhari.json';
import ibnmajah from '../data/json/ibnmajah.json';
import malik from '../data/json/malik.json';
import mishkat_almasabih from '../data/json/mishkat_almasabih.json';
import muslim from '../data/json/muslim.json';
import nasai from '../data/json/nasai.json';
import shamail_muhammadiyah from '../data/json/shamail_muhammadiyah.json';


export const fetchDb = (name) => {
    if (name === 'qudsi') { return qudsi }
    if (name === 'shahwaliullah') { return shahwaliullah }
    if (name === 'bulugh_almaram') { return bulugh_almaram }
    if (name === 'riyad_assalihin') { return riyad_assalihin }
    if (name === 'nawawi') { return nawawi }
    if (name === 'tirmidhi') { return tirmidhi }
    if (name === 'abudawud') { return abudawud }
    if (name === 'ahmed') { return ahmed }
    if (name === 'aladab_almufrad') { return aladab_almufrad }
    if (name === 'bukhari') { return bukhari }
    if (name === 'ibnmajah') { return ibnmajah }
    if (name === 'malik') { return malik }
    if (name === 'muslim') { return muslim }
    if (name === 'nasai') { return nasai }
    if (name === 'shamail_muhammadiyah') { return shamail_muhammadiyah }
    if (name === 'mishkat_almasabih') { return mishkat_almasabih }

}