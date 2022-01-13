if (num_pages <= 7) {
    let inner_html = '<ul class="pagination">';
    let i = 0;
    for(i; i < num_pages; i++) {
        inner_html += '<li class="page-item"><a class="page-link" href="/?page=' + String(i + 1) + '">1</a></li>';
    }
    inner_html += '</ul>'
    $(".pagination").html(inner_html)
} else {
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