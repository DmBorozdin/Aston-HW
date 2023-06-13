const timer = arr => {
    arr.forEach((element, index) => setTimeout(() => console.log(index), 3000));
}

const arr = [10, 12, 15, 21];
timer(arr);