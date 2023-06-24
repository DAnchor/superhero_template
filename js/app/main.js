//loading screen
$(function () {
    $(window).ready(function () {
        $(".loading").fadeOut(2500);
    });
});

//menu images transformation
$(function () {
    $('#choice-01').on('click', function () {
        document.getElementById("01").style.width = "100%";
    })
})

$(function () {
    $('#choice-02').on('click', function () {
        document.getElementById("02").style.width = "100%";
    })
})

$(function () {
    $('#choice-03').on('click', function () {
        document.getElementById("03").style.width = "100%";
    })
})

$(function () {
    $('#choice-04').on('click', function () {
        document.getElementById("04").style.width = "100%";
    })
})

$(function () {
    $('#choice-05').on('click', function () {
        document.getElementById("05").style.width = "100%";
    })
})

function closeNav() {
    var choice_05 = document.getElementById("05"),
        choice_04 = document.getElementById("04"),
        choice_03 = document.getElementById("03"),
        choice_02 = document.getElementById("02"),
        choice_01 = document.getElementById("01");
    if (choice_05 == document.getElementById("05")) {
        document.getElementById("05").style.width = "0%"
    }
    if (choice_04 == document.getElementById("04")) {
        document.getElementById("04").style.width = "0%"
    }
    if (choice_03 == document.getElementById("03")) {
        document.getElementById("03").style.width = "0%"
    }
    if (choice_02 == document.getElementById("02")) {
        document.getElementById("02").style.width = "0%"
    }
    if (choice_01 == document.getElementById("01")) {
        document.getElementById("01").style.width = "0%"
    } else { 'ERROR' }
}

//range values
var sliderValues =
    {
        '1': ' Negative',
        '2': ' Neutral',
        '3': ' Positive'
    };

$(function () {
    $('.slider_value').text(sliderValues[$('.slider').val()]);
    $('.slider').on('input change', function () {
        $('.slider_value').text(sliderValues[$(this).val()]);
    });
});
