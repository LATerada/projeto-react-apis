export function progressBarColor (value) {
    if(value > 100){
        return 'blue'
    }
    if(value === 100){
        return 'green'
    }
    if(value > 50){
        return 'yellow'
    }
    else{
        return 'baseStyle'
    }
}