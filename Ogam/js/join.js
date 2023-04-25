$(function() {
    $('input#birth_year').attr("oninput","this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');");
    $('input#birth_month').attr("oninput","this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');");
    $('input#birth_day').attr("oninput","this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');");
});

