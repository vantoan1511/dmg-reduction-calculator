$(document).ready(function () {
    $('#submitBtn').click(function () {
        var input = $('#input').val();
        if(isNaN(parseInt(input)) || input < 0) {
            alert("Giáp/kháng phép phải số > 0");
        } else {
            var result = 0.0;
            result = Math.round((1 - (100 / (100 + parseFloat(input))))*100);
            console.log(result);
            const output = $('#result');
            output.val(result);

        }
    });
});