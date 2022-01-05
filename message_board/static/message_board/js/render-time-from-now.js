moment.locale('en');

function render_time_from_now() {
    $('.message-time').each(function () {
        let from_now = moment($(this).data("timestamp").replace("T", " ")).fromNow()
        $(this).text(from_now);
    });
}

function periodically_render_time_from_now() {
    $.ajax({
        url: '/',
        success: function () {
            render_time_from_now();
            console.log(1);
        }
    });
    setTimeout(periodically_render_time_from_now, 60000);
}

$(document).ready(function () {
    render_time_from_now();
    setTimeout(periodically_render_time_from_now, 60000);
})