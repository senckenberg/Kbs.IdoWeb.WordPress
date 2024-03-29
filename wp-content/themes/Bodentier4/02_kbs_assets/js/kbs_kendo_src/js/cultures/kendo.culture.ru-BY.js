/** 
 * Kendo UI v2018.3.1017 (http://www.telerik.com/kendo-ui)                                                                                                                                              
 * Copyright 2018 Telerik EAD. All rights reserved.                                                                                                                                                     
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["ru-BY"] = {
        name: "ru-BY",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Belarusian Ruble",
                abbr: "BYN",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "Br"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],
                    namesAbbr: ["вс","пн","вт","ср","чт","пт","сб"],
                    namesShort: ["вс","пн","вт","ср","чт","пт","сб"]
                },
                months: {
                    names: ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],
                    namesAbbr: ["янв.","февр.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."]
                },
                AM: ["ДП","дп","ДП"],
                PM: ["ПП","пп","ПП"],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, d MMMM yyyy 'г'.",
                    F: "dddd, d MMMM yyyy 'г'. H:mm:ss",
                    g: "dd.MM.yyyy H:mm",
                    G: "dd.MM.yyyy H:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy 'г'.",
                    Y: "MMMM yyyy 'г'."
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
}));