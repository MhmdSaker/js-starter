function printerError(s) {
    let errorRate = 0
    let result = errorRate + "/" + s.length

    for(let char of s) {
        if(s.charCodeAt(char) < 96 && s.charCodeAt(char) > 109) {
            errorRate++
        }else {
            errorRate = 0
        }
    }

    console.log(result)
}



printerError('aaabbbbhaijjjm')
printerError('aaaxbbbbyyhwawiwjjjwwm')