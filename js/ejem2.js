var año, edad;
año = parseInt(prompt(`ingrese año de nacimiento`))
edad = 2024 - año;
if (edad >= 18) {

    alert(`es mayor de edad`);

} else {
    alert(`menor de edad`);
}

var dia;
dia = parseInt(prompt(`ingrese un dia entre 1 y 7:`));
switch (dia) {
    case 1:
        alert(`lun`);
        break;
    case 2:
        alert(`mar`);
        break;
    case 3:
        alert(`mie`);
        break;
    case 4:
        alert(`jue`);
        break;
    case 5:
        alert(`vie`);
        break;
    case 6:
        alert(`sab`);
        break;
    case 7:
        alert(`dom`);
        break;
    default:
        alert(`fuera de rango`);
}