window.addEventListener('DOMContentLoaded', function () {
    $(function () {
        $(".catalogue__accordion").accordion({
            heightStyle: "content",
            collapsible: true,
            active: 0,
        });
        $(".catalogue__accordion").accordion("refresh");
    })
})