import {ChangeEvent} from "react";

export function allowOnlyNumber(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        return e.target.value.replace(/[^0-9]/g, '')
}

export function addThousandSeparator(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    let num =  e.target.value.replace(/[^0-9]/g, '');
    if ( num.length == 0 ) return '';
    if( num[0] == '0' ) return '$0';
    return '$' + num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function allowOnlyText(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    return e.target.value.replace(/\d/g, '')
}

export function allowAll(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    return e.target.value.replace(/ /g, '')
}

