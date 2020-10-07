// get data from input form
$(document).ready(function() {
    $("button").on("click", function() {
        x = $("#tasks").val();
        console.log(x);
        $("ul").append(`<li>${x}</li>`);
        $('li').on('click', function () {
            $(this).animate({
                opacity: 0.0,
                paddingLeft: '+=80'
            }, 500, function () {
                $(this).remove();
            });
        });
    });
});

    // $("button").on("click").append("#output").text(`
    // <input type="checkbox" id="task${i+1}" name="task${i+1}" value="${x}">
    // <label for="task${i+1}">${x}</label><br>
    // `);
    // console.log(button);


// document.addEventListener("click",getInput,false);




// // animation
// $(document).ready(function () {
//     $('li').on('click', function () {
//         $(this).animate({
//             opacity: 0.0,
//             paddingLeft: '+=80'
//         }, 500, function () {
//             $(this).remove();
//         });
//     });
// });