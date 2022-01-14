if (num_pages <= 7) {
    let inner_html = '<ul class="pagination">';
    for (let i = 1; i <= num_pages; i++) {
        inner_html += '<li class="page-item"><a class="page-link" href="/?page=' + String(i) + '">' + String(i) + '</a></li>';
    }
    inner_html += '</ul>';
    $(".pagination").html(inner_html);
} else {
    if (message_page_number - 1 < 3) {
        let inner_html = '<ul class="pagination">';
        for (let i = 1; i <= 5; i++) {
            inner_html += '<li class="page-item"><a class="page-link" href="/?page=' + String(i) + '">' + String(i) + '</a></li>';
        }
        inner_html += '<li class="page-item"><a class="page-link" href="/?page=' + String(num_pages) + '">' + String(num_pages) + '</a></li>';
        inner_html += '</ul>';
        $(".pagination").html(inner_html);
    } else if (num_pages - message_page_number < 3) {
        let inner_html = '<ul class="pagination">';
        inner_html += '<li class="page-item"><a class="page-link" href="/?page=' + String(1) + '">' + String(1) + '</a></li>';
        for (let i = num_pages - 4; i <= num_pages; i++) {
            inner_html += '<li class="page-item"><a class="page-link" href="/?page=' + String(i) + '">' + String(i) + '</a></li>';
        }
        inner_html += '</ul>';
        $(".pagination").html(inner_html);
    } else {
        let inner_html = '<ul class="pagination">';
        inner_html += '<li class="page-item"><a class="page-link" href="/?page=' + String(1) + '">' + String(1) + '</a></li>';
        for (let i = message_page_number - 2; i <= message_page_number + 2; i++) {
            inner_html += '<li class="page-item"><a class="page-link" href="/?page=' + String(i) + '">' + String(i) + '</a></li>';
        }
        inner_html += '<li class="page-item"><a class="page-link" href="/?page=' + String(num_pages) + '">' + String(num_pages) + '</a></li>';
        inner_html += '</ul>';
        $(".pagination").html(inner_html);
    }
    let inner_html = '<li class="page-item">\n' +
        '                <a class="page-link" href="#" aria-label="Previous">\n' +
        '                    <span aria-hidden="true">&laquo;</span>\n' +
        '                    <span class="sr-only">Previous</span>\n' +
        '                </a>\n' +
        '            </li>\n' +
        '            <li class="page-item"><a class="page-link" href="/?page=1">1</a></li>\n' +
        '            <li class="page-item"><a class="page-link" href="/?page=2">2</a></li>\n' +
        '            <li class="page-item"><a class="page-link" href="/?page=3">3</a></li>\n' +
        '            <li class="page-item">\n' +
        '                <a class="page-link" href="#" aria-label="Next">\n' +
        '                    <span aria-hidden="true">&raquo;</span>\n' +
        '                    <span class="sr-only">Next</span>\n' +
        '                </a>\n' +
        '            </li>'
}