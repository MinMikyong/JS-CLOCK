function seconds_with_leading_zeros(a)
{
    return (a.getSeconds() < 10 ? '0' : '') + a.getSeconds();
}

let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() =>
{
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + `:` + a.getMinutes() + `:` + seconds_with_leading_zeros(a);
    document.getElementById('time').innerHTML = time + "<br>On " + date;
}, 1000);

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl)
{
    return new bootstrap.Collapse(collapseEl)
})
