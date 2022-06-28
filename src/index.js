module.exports = function toReadable (number) {
    let fromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let fromTwentyToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let firstArray = [];

    let Arr = number.toString().split('');

    let counter = Arr.length;
    for(let i = 0; i < counter; i++) {
        if(Arr.length === 3) {
            firstArray.push(fromZeroToNine[Arr[0]] + ' hundred');
            Arr.shift();
        } else if (Arr.length === 2) {
            if (Arr[0] === '1') {
                firstArray.push(fromTenToNineteen[Arr[1]]);
                break;
            } else if (Arr[0] === '0') {
                Arr.shift();
            } else {
                firstArray.push(fromTwentyToNinety[Arr[0]]);
                Arr.shift();
            }

        } else if (Arr.length === 1) {
            if(Arr[0] === '0' && counter > 1) {
                firstArray.push();
            } else {
                firstArray.push(fromZeroToNine[Arr[0]]);
            }
        }
    }
    return firstArray.join(' ').trim();
}

