function generate_pagination_li(num){
    return '<li class="page-item ' + 'page-' + String(num) + '"><a class="page-link" href="/?page=' + String(num) + '">' + String(num) + '</a></li>';
}


if (num_pages <= 7) {
    let inner_html = '<ul class="pagination">';
    for (let i = 1; i <= num_pages; i++) {
        inner_html += generate_pagination_li(i);
    }
    inner_html += '</ul>';
    $(".pagination").html(inner_html);
} else {
    if (message_page_number - 1 < 3) {
        let inner_html = '<ul class="pagination">';
        for (let i = 1; i <= 5; i++) {
            inner_html += generate_pagination_li(i);
        }
        inner_html += '<li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">...</a></li>';
        inner_html += generate_pagination_li(num_pages);
        inner_html += '</ul>';
        $(".pagination").html(inner_html);
    } else if (num_pages - message_page_number < 3) {
        let inner_html = '<ul class="pagination">';
        inner_html += generate_pagination_li(1);
        inner_html += '<li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">...</a></li>';
        for (let i = num_pages - 4; i <= num_pages; i++) {
            inner_html += generate_pagination_li(i);
        }
        inner_html += '</ul>';
        $(".pagination").html(inner_html);
    } else {
        let inner_html = '<ul class="pagination">';
        inner_html += generate_pagination_li(1);
        inner_html += '<li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">...</a></li>';
        for (let i = message_page_number - 2; i <= message_page_number + 2; i++) {
            inner_html += generate_pagination_li(i);
        }
        inner_html += '<li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">...</a></li>';
        inner_html += generate_pagination_li(num_pages);
        inner_html += '</ul>';
        $(".pagination").html(inner_html);
    }
}


$('.page-' + String(message_page_number)).addClass('active');