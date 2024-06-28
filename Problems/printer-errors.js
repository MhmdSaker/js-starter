function printerError(s) {
    let errorRate = 0

    for(let i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) > 109 && s.charCodeAt(i) < 123) {
            errorRate = errorRate + 1
        }

    }


    console.log(errorRate + "/" + s.length)
}



printerError('aaabbbbhaijjjm')
printerError('aaaxbbbbyyhwawiwjjjwwm')



