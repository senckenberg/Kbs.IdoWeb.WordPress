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
    kendo.cultures["kab"] = {
        name: "kab",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "",
                abbr: "",
                pattern: ["-n$","n$"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "DA"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Yanass","Sanass","Kraḍass","Kuẓass","Samass","Sḍisass","Sayass"],
                    namesAbbr: ["Yan","San","Kraḍ","Kuẓ","Sam","Sḍis","Say"],
                    namesShort: ["Yan","San","Kraḍ","Kuẓ","Sam","Sḍis","Say"]
                },
                months: {
                    names: ["Yennayer","Fuṛar","Meɣres","Yebrir","Mayyu","Yunyu","Yulyu","Ɣuct","Ctembeṛ","Tubeṛ","Nunembeṛ","Duǧembeṛ"],
                    namesAbbr: ["Yen","Fur","Meɣ","Yeb","May","Yun","Yul","Ɣuc","Cte","Tub","Nun","Duǧ"]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd d MMMM yyyy",
                    F: "dddd d MMMM yyyy h:mm:ss tt",
                    g: "d/M/yyyy h:mm tt",
                    G: "d/M/yyyy h:mm:ss tt",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 6
            }
        }
    }
})(this);
}));