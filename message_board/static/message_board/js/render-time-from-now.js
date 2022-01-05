moment.locale('en');
$('.message-time').each(function () {
    let from_now = moment($(this).text().replace("T", " ")).fromNow()
    $(this).text(from_now);
});