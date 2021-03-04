$(document).ready(function() {
    // active tab
    $(".course-detail-sub-menu ul.menu li:first-child a").addClass('active');
    $(".course-detail-sub-menu ul.menu li a").click(function() {
        $(".course-detail-sub-menu ul.menu li a").removeClass('active');
        $(this).addClass('active');
    });

    // back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});