$(document).ready(function () {
    $(document.getElementById('start')).click(function () {
        $(this).hide(1000);
        $(document.getElementById('myForm')).show(800);

    });
    $(document.getElementById('cancelar')).click(function () {
        $(document.getElementById('myForm')).hide(800);
        $(document.getElementById('start')).show(1000);

    });
});