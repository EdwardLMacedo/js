var x, dig, s;
x = parseInt(prompt(`x:`));
s = 0;


while (x != 0) {
    dig = x % 10;
    x = parseInt(x / 10);
    s = s + dig;
}

alert(s);