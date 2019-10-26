function near_hundred(n){
    return (200 - n <= 10) || (100 - n <= 10)
}

//or
function near_hundred(n){
    return (n >= 90||n <= 100)||(n >= 190||n <= 200)
}
