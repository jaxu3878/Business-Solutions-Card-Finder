$("#submit-find").click(function() {
    (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Click_ShowCards') : null;
    $("#q1 .drop1").css("pointer-events", "none");
    $("#q2 .drop2").css("pointer-events", "none");
    $("#q3 .drop3").css("pointer-events", "none");
    $("#q4 .drop4").css("pointer-events", "none");
    $("#q5 .drop5").css("pointer-events", "none");
    $("#q6 .drop6").css("pointer-events", "none");
    /*=================== Scenario AAAAA =======================*/
    if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".aaaaa1").show();
        $(".aaaaa2").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== AAAAA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".aaaaa1").appendTo("#rec-cont ul");
            $(".aaaaa2").prependTo("#comp-cont ul");
            $(".aaaaa1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".aaaaa2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".aaaaa2").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== AAAAA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".aaaaa1").show();
            $(".aaaaa2").show();
            $(".aaaaa2").removeClass('jp-hidden');
            $(".aaaaa2").prependTo("#comp-cont ul");
            $(".aaaaa1").prependTo("#comp-cont ul");
            $(".aaaaa1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".aaaaa2").prependTo("#comp-cont ul");
                    $(".aaaaa1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".aaaaa1").show();
                    $(".aaaaa2").show();
                    $(".aaaaa2").prependTo("#comp-cont ul");
                    $(".aaaaa1").prependTo("#comp-cont ul");
                    $(".aaaaa1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario AAAAB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".aaaab1").show();
        $(".aaaab2").show();
        $(".aaaab3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== AAAAB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".aaaab1").appendTo("#rec-cont ul");
            $(".aaaab3").prependTo("#comp-cont ul");
            $(".aaaab2").prependTo("#comp-cont ul");
            $(".aaaab1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".aaaab3").prependTo("#comp-cont ul");
                    $(".aaaab2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".aaaab2").show();
                    $(".aaaab3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== AAAAB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".aaaab1").show();
            $(".aaaab2").show();
            $(".aaaab3").show();
            $(".aaaab2").removeClass('jp-hidden');
            $(".aaaab3").removeClass('jp-hidden');
            $(".aaaab3").prependTo("#comp-cont ul");
            $(".aaaab2").prependTo("#comp-cont ul");
            $(".aaaab1").prependTo("#comp-cont ul");
            $(".aaaab1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".aaaab3").prependTo("#comp-cont ul");
                    $(".aaaab2").prependTo("#comp-cont ul");
                    $(".aaaab1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".aaaab1").show();
                    $(".aaaab2").show();
                    $(".aaaab3").show();
                    $(".aaaab3").prependTo("#comp-cont ul");
                    $(".aaaab2").prependTo("#comp-cont ul");
                    $(".aaaab1").prependTo("#comp-cont ul");
                    $(".aaaab1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario AAAAC =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "no preference")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".aaaac1").show();
        $(".aaaac2").show();
        $(".aaaac3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== AAAAC Desktop =======================*/

        if ($(window).width() > 739) {
            $(".aaaac1").appendTo("#rec-cont ul");
            $(".aaaac3").prependTo("#comp-cont ul");
            $(".aaaac2").prependTo("#comp-cont ul");
            $(".aaaac1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".aaaac3").prependTo("#comp-cont ul");
                    $(".aaaac2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".aaaac2").show();
                    $(".aaaac3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== AAAAC Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".aaaac1").show();
            $(".aaaac2").show();
            $(".aaaac3").show();
            $(".aaaac2").removeClass('jp-hidden');
            $(".aaaac3").removeClass('jp-hidden');
            $(".aaaac3").prependTo("#comp-cont ul");
            $(".aaaac2").prependTo("#comp-cont ul");
            $(".aaaac1").prependTo("#comp-cont ul");
            $(".aaaac1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".aaaac3").prependTo("#comp-cont ul");
                    $(".aaaac2").prependTo("#comp-cont ul");
                    $(".aaaac1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".aaaac1").show();
                    $(".aaaac2").show();
                    $(".aaaac3").show();
                    $(".aaaac3").prependTo("#comp-cont ul");
                    $(".aaaac2").prependTo("#comp-cont ul");
                    $(".aaaac1").prependTo("#comp-cont ul");
                    $(".aaaac1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario AABBA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".aabba1").show();
        $(".aabba2").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== AABBA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".aabba1").appendTo("#rec-cont ul");
            $(".aabba2").prependTo("#comp-cont ul");
            $(".aabba1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".aabba2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".aabba").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== AABBA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".aaaac1").show();
            $(".aabba2").show();
            $(".aabba2").removeClass('jp-hidden');
            $(".aabba2").prependTo("#comp-cont ul");
            $(".aabba1").prependTo("#comp-cont ul");
            $(".aabba1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".aabba2").prependTo("#comp-cont ul");
                    $(".aabba1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".aabba1").show();
                    $(".aabba2").show();
                    $(".aabba2").prependTo("#comp-cont ul");
                    $(".aabba1").prependTo("#comp-cont ul");
                    $(".aabba1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario AABBB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".aabbb1").show();
        $(".aabbb2").show();
        $(".aabbb3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== AABBB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".aabbb1").appendTo("#rec-cont ul");
            $(".aabbb3").prependTo("#comp-cont ul");
            $(".aabbb2").prependTo("#comp-cont ul");
            $(".aabbb1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".aabbb3").prependTo("#comp-cont ul");
                    $(".aabbb2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".aabbb2").show();
                    $(".aabbb3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== AABBB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".aabbb1").show();
            $(".aabbb2").show();
            $(".aabbb3").show();
            $(".aabbb2").removeClass('jp-hidden');
            $(".aabbb3").removeClass('jp-hidden');
            $(".aabbb3").prependTo("#comp-cont ul");
            $(".aabbb2").prependTo("#comp-cont ul");
            $(".aabbb1").prependTo("#comp-cont ul");
            $(".aabbb1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".aabbb3").prependTo("#comp-cont ul");
                    $(".aabbb2").prependTo("#comp-cont ul");
                    $(".aabbb1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".aabbb1").show();
                    $(".aabbb2").show();
                    $(".aabbb3").show();
                    $(".aabbb3").prependTo("#comp-cont ul");
                    $(".aabbb2").prependTo("#comp-cont ul");
                    $(".aabbb1").prependTo("#comp-cont ul");
                    $(".aabbb1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario AABBC =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "no preference")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".aabbc1").show();
        $(".aabbc2").show();
        $(".aabbc3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== AABBC Desktop =======================*/

        if ($(window).width() > 739) {
            $(".aabbc1").appendTo("#rec-cont ul");
            $(".aabbc3").prependTo("#comp-cont ul");
            $(".aabbc2").prependTo("#comp-cont ul");
            $(".aabbc1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".aabbc3").prependTo("#comp-cont ul");
                    $(".aabbc2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".aabbc2").show();
                    $(".aabbc3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== AABBC Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".aabbc1").show();
            $(".aabbc2").show();
            $(".aabbc3").show();
            $(".aabbc2").removeClass('jp-hidden');
            $(".aabbc3").removeClass('jp-hidden');
            $(".aabbc3").prependTo("#comp-cont ul");
            $(".aabbc2").prependTo("#comp-cont ul");
            $(".aabbc1").prependTo("#comp-cont ul");
            $(".aabbc1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".aabbc3").prependTo("#comp-cont ul");
                    $(".aabbc2").prependTo("#comp-cont ul");
                    $(".aabbc1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".aabbc1").show();
                    $(".aabbc2").show();
                    $(".aabbc3").show();
                    $(".aabbc3").prependTo("#comp-cont ul");
                    $(".aabbc2").prependTo("#comp-cont ul");
                    $(".aabbc1").prependTo("#comp-cont ul");
                    $(".aabbc1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario AACAA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".aacaa1").show();
        $(".aacaa2").show();
        $(".aacaa3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== AACAA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".aacaa1").appendTo("#rec-cont ul");
            $(".aacaa3").prependTo("#comp-cont ul");
            $(".aacaa2").prependTo("#comp-cont ul");
            $(".aacaa1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".aacaa3").prependTo("#comp-cont ul");
                    $(".aacaa2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".aacaa2").show();
                    $(".aacaa3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== AACAA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".aacaa1").show();
            $(".aacaa2").show();
            $(".aacaa3").show();
            $(".aacaa2").removeClass('jp-hidden');
            $(".aacaa3").removeClass('jp-hidden');
            $(".aacaa3").prependTo("#comp-cont ul");
            $(".aacaa2").prependTo("#comp-cont ul");
            $(".aacaa1").prependTo("#comp-cont ul");
            $(".aacaa1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".aacaa3").prependTo("#comp-cont ul");
                    $(".aacaa2").prependTo("#comp-cont ul");
                    $(".aacaa1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".aacaa1").show();
                    $(".aacaa2").show();
                    $(".aacaa3").show();
                    $(".aacaa3").prependTo("#comp-cont ul");
                    $(".aacaa2").prependTo("#comp-cont ul");
                    $(".aacaa1").prependTo("#comp-cont ul");
                    $(".aacaa1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ABAAA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".abaaa1").show();
        $(".abaaa2").show();
        $(".abaaa3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ABAAA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".abaaa1").appendTo("#rec-cont ul");
            $(".abaaa3").prependTo("#comp-cont ul");
            $(".abaaa2").prependTo("#comp-cont ul");
            $(".abaaa1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".abaaa3").prependTo("#comp-cont ul");
                    $(".abaaa2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".abaaa2").show();
                    $(".abaaa3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ABAAA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".abaaa1").show();
            $(".abaaa2").show();
            $(".abaaa3").show();
            $(".abaaa2").removeClass('jp-hidden');
            $(".abaaa3").removeClass('jp-hidden');
            $(".abaaa3").prependTo("#comp-cont ul");
            $(".abaaa2").prependTo("#comp-cont ul");
            $(".abaaa1").prependTo("#comp-cont ul");
            $(".abaaa1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".abaaa3").prependTo("#comp-cont ul");
                    $(".abaaa2").prependTo("#comp-cont ul");
                    $(".abaaa1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".abaaa1").show();
                    $(".abaaa2").show();
                    $(".abaaa3").show();
                    $(".abaaa3").prependTo("#comp-cont ul");
                    $(".abaaa2").prependTo("#comp-cont ul");
                    $(".abaaa1").prependTo("#comp-cont ul");
                    $(".abaaa1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ABAAB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".abaab1").show();
        $(".abaab2").show();
        $(".abaab3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ABAAB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".abaab1").appendTo("#rec-cont ul");
            $(".abaab3").prependTo("#comp-cont ul");
            $(".abaab2").prependTo("#comp-cont ul");
            $(".abaab1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".abaab3").prependTo("#comp-cont ul");
                    $(".abaab2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".abaab2").show();
                    $(".abaab3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ABAAB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".abaab1").show();
            $(".abaab2").show();
            $(".abaab3").show();
            $(".abaab2").removeClass('jp-hidden');
            $(".abaab3").removeClass('jp-hidden');
            $(".abaab3").prependTo("#comp-cont ul");
            $(".abaab2").prependTo("#comp-cont ul");
            $(".abaab1").prependTo("#comp-cont ul");
            $(".abaab1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".abaab3").prependTo("#comp-cont ul");
                    $(".abaab2").prependTo("#comp-cont ul");
                    $(".abaab1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".abaab1").show();
                    $(".abaab2").show();
                    $(".abaab3").show();
                    $(".abaab3").prependTo("#comp-cont ul");
                    $(".abaab2").prependTo("#comp-cont ul");
                    $(".abaab1").prependTo("#comp-cont ul");
                    $(".abaab1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ABAAC =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "gradually over time" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "no preference")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".abaac1").show();
        $(".abaac2").show();
        $(".abaac3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ABAAC Desktop =======================*/

        if ($(window).width() > 739) {
            $(".abaac1").appendTo("#rec-cont ul");
            $(".abaac3").prependTo("#comp-cont ul");
            $(".abaac2").prependTo("#comp-cont ul");
            $(".abaac1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".abaac3").prependTo("#comp-cont ul");
                    $(".abaac2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".abaac2").show();
                    $(".abaac3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ABAAC Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".abaac1").show();
            $(".abaac2").show();
            $(".abaac3").show();
            $(".abaac2").removeClass('jp-hidden');
            $(".abaac3").removeClass('jp-hidden');
            $(".abaac3").prependTo("#comp-cont ul");
            $(".abaac2").prependTo("#comp-cont ul");
            $(".abaac1").prependTo("#comp-cont ul");
            $(".abaac1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".abaac3").prependTo("#comp-cont ul");
                    $(".abaac2").prependTo("#comp-cont ul");
                    $(".abaac1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".abaac1").show();
                    $(".abaac2").show();
                    $(".abaac3").show();
                    $(".abaac3").prependTo("#comp-cont ul");
                    $(".abaac2").prependTo("#comp-cont ul");
                    $(".abaac1").prependTo("#comp-cont ul");
                    $(".abaac1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ACAAA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".acaaa1").show();
        $(".acaaa2").show();
        $(".acaaa3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ACAAA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".acaaa1").appendTo("#rec-cont ul");
            $(".acaaa3").prependTo("#comp-cont ul");
            $(".acaaa2").prependTo("#comp-cont ul");
            $(".acaaa1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".acaaa3").prependTo("#comp-cont ul");
                    $(".acaaa2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".acaaa2").show();
                    $(".acaaa3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ACAAA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".acaaa1").show();
            $(".acaaa2").show();
            $(".acaaa3").show();
            $(".acaaa2").removeClass('jp-hidden');
            $(".acaaa3").removeClass('jp-hidden');
            $(".acaaa3").prependTo("#comp-cont ul");
            $(".acaaa2").prependTo("#comp-cont ul");
            $(".acaaa1").prependTo("#comp-cont ul");
            $(".acaaa1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".acaaa3").prependTo("#comp-cont ul");
                    $(".acaaa2").prependTo("#comp-cont ul");
                    $(".acaaa1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".acaaa1").show();
                    $(".acaaa2").show();
                    $(".acaaa3").show();
                    $(".acaaa3").prependTo("#comp-cont ul");
                    $(".acaaa2").prependTo("#comp-cont ul");
                    $(".acaaa1").prependTo("#comp-cont ul");
                    $(".acaaa1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ACAAB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".acaab1").show();
        $(".acaab2").show();
        $(".acaab3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ACAAB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".acaab1").appendTo("#rec-cont ul");
            $(".acaab3").prependTo("#comp-cont ul");
            $(".acaab2").prependTo("#comp-cont ul");
            $(".acaab1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".acaab3").prependTo("#comp-cont ul");
                    $(".acaab2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".acaab2").show();
                    $(".acaab3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ACAAB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".acaab1").show();
            $(".acaab2").show();
            $(".acaab3").show();
            $(".acaab2").removeClass('jp-hidden');
            $(".acaab3").removeClass('jp-hidden');
            $(".acaab3").prependTo("#comp-cont ul");
            $(".acaab2").prependTo("#comp-cont ul");
            $(".acaab1").prependTo("#comp-cont ul");
            $(".acaab1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".acaab3").prependTo("#comp-cont ul");
                    $(".acaab2").prependTo("#comp-cont ul");
                    $(".acaab1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".acaab1").show();
                    $(".acaab2").show();
                    $(".acaab3").show();
                    $(".acaab3").prependTo("#comp-cont ul");
                    $(".acaab2").prependTo("#comp-cont ul");
                    $(".acaab1").prependTo("#comp-cont ul");
                    $(".acaab1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ACAAC =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "no preference")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".acaac1").show();
        $(".acaac2").show();
        $(".acaac3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ACAAC Desktop =======================*/

        if ($(window).width() > 739) {
            $(".acaac1").appendTo("#rec-cont ul");
            $(".acaac3").prependTo("#comp-cont ul");
            $(".acaac2").prependTo("#comp-cont ul");
            $(".acaac1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".acaac3").prependTo("#comp-cont ul");
                    $(".acaac2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".acaac2").show();
                    $(".acaac3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ACAAC Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".acaac1").show();
            $(".acaac2").show();
            $(".acaac3").show();
            $(".acaac2").removeClass('jp-hidden');
            $(".acaac3").removeClass('jp-hidden');
            $(".acaac3").prependTo("#comp-cont ul");
            $(".acaac2").prependTo("#comp-cont ul");
            $(".acaac1").prependTo("#comp-cont ul");
            $(".acaac1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".acaac3").prependTo("#comp-cont ul");
                    $(".acaac2").prependTo("#comp-cont ul");
                    $(".acaac1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".acaac1").show();
                    $(".acaac2").show();
                    $(".acaac3").show();
                    $(".acaac3").prependTo("#comp-cont ul");
                    $(".acaac2").prependTo("#comp-cont ul");
                    $(".acaac1").prependTo("#comp-cont ul");
                    $(".acaac1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ACABA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "no preference")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".acaba1").show();
        $(".acaba2").show();
        $(".acaba3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ACABA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".acaba1").appendTo("#rec-cont ul");
            $(".acaba3").prependTo("#comp-cont ul");
            $(".acaba2").prependTo("#comp-cont ul");
            $(".acaba1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".acaba3").prependTo("#comp-cont ul");
                    $(".acaba2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".acaba2").show();
                    $(".acaba3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ACABA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".acaba1").show();
            $(".acaba2").show();
            $(".acaba3").show();
            $(".acaba2").removeClass('jp-hidden');
            $(".acaba3").removeClass('jp-hidden');
            $(".acaba3").prependTo("#comp-cont ul");
            $(".acaba2").prependTo("#comp-cont ul");
            $(".acaba1").prependTo("#comp-cont ul");
            $(".acaba1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".acaba3").prependTo("#comp-cont ul");
                    $(".acaba2").prependTo("#comp-cont ul");
                    $(".acaba1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".acaba1").show();
                    $(".acaba2").show();
                    $(".acaba3").show();
                    $(".acaba3").prependTo("#comp-cont ul");
                    $(".acaba2").prependTo("#comp-cont ul");
                    $(".acaba1").prependTo("#comp-cont ul");
                    $(".acaba1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ACABB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".acabb1").show();
        $(".acabb2").show();
        $(".acabb3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ACABB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".acabb1").appendTo("#rec-cont ul");
            $(".acabb3").prependTo("#comp-cont ul");
            $(".acabb2").prependTo("#comp-cont ul");
            $(".acabb1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".acabb3").prependTo("#comp-cont ul");
                    $(".acabb2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".acabb2").show();
                    $(".acabb3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ACABB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".acabb1").show();
            $(".acabb2").show();
            $(".acabb3").show();
            $(".acabb2").removeClass('jp-hidden');
            $(".acabb3").removeClass('jp-hidden');
            $(".acabb3").prependTo("#comp-cont ul");
            $(".acabb2").prependTo("#comp-cont ul");
            $(".acabb1").prependTo("#comp-cont ul");
            $(".acabb1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".acabb3").prependTo("#comp-cont ul");
                    $(".acabb2").prependTo("#comp-cont ul");
                    $(".acabb1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".acabb1").show();
                    $(".acabb2").show();
                    $(".acabb3").show();
                    $(".acabb3").prependTo("#comp-cont ul");
                    $(".acabb2").prependTo("#comp-cont ul");
                    $(".acabb1").prependTo("#comp-cont ul");
                    $(".acabb1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ACBAA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "no preference")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".acbaa1").show();
        $(".acbaa2").show();
        $(".acbaa3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ACBAA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".acbaa1").appendTo("#rec-cont ul");
            $(".acbaa3").prependTo("#comp-cont ul");
            $(".acbaa2").prependTo("#comp-cont ul");
            $(".acbaa1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".acbaa3").prependTo("#comp-cont ul");
                    $(".acbaa2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".acbaa2").show();
                    $(".acbaa3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ACBAA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".acbaa1").show();
            $(".acbaa2").show();
            $(".acbaa3").show();
            $(".acbaa2").removeClass('jp-hidden');
            $(".acbaa3").removeClass('jp-hidden');
            $(".acbaa3").prependTo("#comp-cont ul");
            $(".acbaa2").prependTo("#comp-cont ul");
            $(".acbaa1").prependTo("#comp-cont ul");
            $(".acbaa1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".acbaa3").prependTo("#comp-cont ul");
                    $(".acbaa2").prependTo("#comp-cont ul");
                    $(".acbaa1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".acbaa1").show();
                    $(".acbaa2").show();
                    $(".acbaa3").show();
                    $(".acbaa3").prependTo("#comp-cont ul");
                    $(".acbaa2").prependTo("#comp-cont ul");
                    $(".acbaa1").prependTo("#comp-cont ul");
                    $(".acbaa1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ACBAB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin")) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".acbab1").show();
        $(".acbab2").show();
        $(".acbab3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ACBAB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".acbab1").appendTo("#rec-cont ul");
            $(".acbab3").prependTo("#comp-cont ul");
            $(".acbab2").prependTo("#comp-cont ul");
            $(".acbab1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".acbab3").prependTo("#comp-cont ul");
                    $(".acbab2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".acbab2").show();
                    $(".acbab3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ACBAB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".acbab1").show();
            $(".acbab2").show();
            $(".acbab3").show();
            $(".acbab2").removeClass('jp-hidden');
            $(".acbab3").removeClass('jp-hidden');
            $(".acbab3").prependTo("#comp-cont ul");
            $(".acbab2").prependTo("#comp-cont ul");
            $(".acbab1").prependTo("#comp-cont ul");
            $(".acbab1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".acbab3").prependTo("#comp-cont ul");
                    $(".acbab2").prependTo("#comp-cont ul");
                    $(".acbab1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".acbab1").show();
                    $(".acbab2").show();
                    $(".acbab3").show();
                    $(".acbab3").prependTo("#comp-cont ul");
                    $(".acbab2").prependTo("#comp-cont ul");
                    $(".acbab1").prependTo("#comp-cont ul");
                    $(".acbab1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ACBBA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".acbba1").show();
        $(".acbba2").show();
        $(".acbba3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ACBBA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".acbba1").appendTo("#rec-cont ul");
            $(".acbba3").prependTo("#comp-cont ul");
            $(".acbba2").prependTo("#comp-cont ul");
            $(".acbba1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".acbba3").prependTo("#comp-cont ul");
                    $(".acbba2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".acbba2").show();
                    $(".acbba3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ACBBA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".acbba1").show();
            $(".acbba2").show();
            $(".acbba3").show();
            $(".acbba2").removeClass('jp-hidden');
            $(".acbba3").removeClass('jp-hidden');
            $(".acbba3").prependTo("#comp-cont ul");
            $(".acbba2").prependTo("#comp-cont ul");
            $(".acbba1").prependTo("#comp-cont ul");
            $(".acbba1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".acbba3").prependTo("#comp-cont ul");
                    $(".acbba2").prependTo("#comp-cont ul");
                    $(".acbba1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".acbba1").show();
                    $(".acbba2").show();
                    $(".acbba3").show();
                    $(".acbba3").prependTo("#comp-cont ul");
                    $(".acbba2").prependTo("#comp-cont ul");
                    $(".acbba1").prependTo("#comp-cont ul");
                    $(".acbba1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ACBBB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".acbbb1").show();
        $(".acbbb2").show();
        $(".acbbb3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ACBBB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".acbbb1").appendTo("#rec-cont ul");
            $(".acbbb3").prependTo("#comp-cont ul");
            $(".acbbb2").prependTo("#comp-cont ul");
            $(".acbbb1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".acbbb3").prependTo("#comp-cont ul");
                    $(".acbbb2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".acbbb2").show();
                    $(".acbbb3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ACBBB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".acbbb1").show();
            $(".acbbb2").show();
            $(".acbbb3").show();
            $(".acbbb2").removeClass('jp-hidden');
            $(".acbbb3").removeClass('jp-hidden');
            $(".acbbb3").prependTo("#comp-cont ul");
            $(".acbbb2").prependTo("#comp-cont ul");
            $(".acbbb1").prependTo("#comp-cont ul");
            $(".acbbb1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".acbbb3").prependTo("#comp-cont ul");
                    $(".acbbb2").prependTo("#comp-cont ul");
                    $(".acbbb1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".acbbb1").show();
                    $(".acbbb2").show();
                    $(".acbbb3").show();
                    $(".acbbb3").prependTo("#comp-cont ul");
                    $(".acbbb2").prependTo("#comp-cont ul");
                    $(".acbbb1").prependTo("#comp-cont ul");
                    $(".acbbb1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario ACBBC =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "under $2 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5One .drop5 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "no preference")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".acbbc1").show();
        $(".acbbc2").show();
        $(".acbbc3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== ACBBC Desktop =======================*/

        if ($(window).width() > 739) {
            $(".acbbc1").appendTo("#rec-cont ul");
            $(".acbbc3").prependTo("#comp-cont ul");
            $(".acbbc2").prependTo("#comp-cont ul");
            $(".acbbc1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".acbbc3").prependTo("#comp-cont ul");
                    $(".acbbc2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".acbbc2").show();
                    $(".acbbc3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== ACBBC Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".acbbc1").show();
            $(".acbbc2").show();
            $(".acbbc3").show();
            $(".acbbc2").removeClass('jp-hidden');
            $(".acbbc3").removeClass('jp-hidden');
            $(".acbbc3").prependTo("#comp-cont ul");
            $(".acbbc2").prependTo("#comp-cont ul");
            $(".acbbc1").prependTo("#comp-cont ul");
            $(".acbbc1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".acbbc3").prependTo("#comp-cont ul");
                    $(".acbbc2").prependTo("#comp-cont ul");
                    $(".acbbc1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".acbbc1").show();
                    $(".acbbc2").show();
                    $(".acbbc3").show();
                    $(".acbbc3").prependTo("#comp-cont ul");
                    $(".acbbc2").prependTo("#comp-cont ul");
                    $(".acbbc1").prependTo("#comp-cont ul");
                    $(".acbbc1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario BAAAB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".baaab1").show();
        $(".baaab2").show();
        $(".baaab3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== BAAAB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".baaab1").appendTo("#rec-cont ul");
            $(".baaab3").prependTo("#comp-cont ul");
            $(".baaab2").prependTo("#comp-cont ul");
            $(".baaab1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".baaab3").prependTo("#comp-cont ul");
                    $(".baaab2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".baaab2").show();
                    $(".baaab3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== BAAAB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".baaab1").show();
            $(".baaab2").show();
            $(".baaab3").show();
            $(".baaab2").removeClass('jp-hidden');
            $(".baaab3").removeClass('jp-hidden');
            $(".baaab3").prependTo("#comp-cont ul");
            $(".baaab2").prependTo("#comp-cont ul");
            $(".baaab1").prependTo("#comp-cont ul");
            $(".baaab1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".baaab3").prependTo("#comp-cont ul");
                    $(".baaab2").prependTo("#comp-cont ul");
                    $(".baaab1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".baaab1").show();
                    $(".baaab2").show();
                    $(".baaab3").show();
                    $(".baaab3").prependTo("#comp-cont ul");
                    $(".baaab2").prependTo("#comp-cont ul");
                    $(".baaab1").prependTo("#comp-cont ul");
                    $(".baaab1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario BABBB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas")) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".babbb1").show();
        $(".babbb2").show();
        $(".babbb3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== BABBB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".babbb1").appendTo("#rec-cont ul");
            $(".babbb3").prependTo("#comp-cont ul");
            $(".babbb2").prependTo("#comp-cont ul");
            $(".babbb1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".babbb3").prependTo("#comp-cont ul");
                    $(".babbb2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".babbb2").show();
                    $(".babbb3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== BABBB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".babbb1").show();
            $(".babbb2").show();
            $(".babbb3").show();
            $(".babbb2").removeClass('jp-hidden');
            $(".babbb3").removeClass('jp-hidden');
            $(".babbb3").prependTo("#comp-cont ul");
            $(".babbb2").prependTo("#comp-cont ul");
            $(".babbb1").prependTo("#comp-cont ul");
            $(".babbb1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".babbb3").prependTo("#comp-cont ul");
                    $(".babbb2").prependTo("#comp-cont ul");
                    $(".babbb1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".babbb1").show();
                    $(".babbb2").show();
                    $(".babbb3").show();
                    $(".babbb3").prependTo("#comp-cont ul");
                    $(".babbb2").prependTo("#comp-cont ul");
                    $(".babbb1").prependTo("#comp-cont ul");
                    $(".babbb1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario BACBB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "in full each month" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".bacbb1").show();
        $(".bacbb2").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== BACBB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".bacbb1").appendTo("#rec-cont ul");
            $(".bacbb2").prependTo("#comp-cont ul");
            $(".bacbb1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".bacbb2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".bacbb2").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== BACBB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".bacbb1").show();
            $(".bacbb2").show();
            $(".bacbb2").removeClass('jp-hidden');
            $(".bacbb2").prependTo("#comp-cont ul");
            $(".bacbb1").prependTo("#comp-cont ul");
            $(".bacbb1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".bacbb2").prependTo("#comp-cont ul");
                    $(".bacbb1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".bacbb1").show();
                    $(".bacbb2").show();
                    $(".bacbb2").prependTo("#comp-cont ul");
                    $(".bacbb1").prependTo("#comp-cont ul");
                    $(".bacbb1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario BCBAB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "$2 to $10 million" &&
            $("#q2 .drop2 .trigger").text() == "based on my cash flow" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q5Two .drop5 .trigger").text() == "rewards through Qantas")) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".bcbab1").show();
        $(".bcbab2").show();
        $(".bcbab3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== BCBAB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".bcbab1").appendTo("#rec-cont ul");
            $(".bcbab3").prependTo("#comp-cont ul");
            $(".bcbab2").prependTo("#comp-cont ul");
            $(".bcbab1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .business").show();
                    $(".bcbab3").prependTo("#comp-cont ul");
                    $(".bcbab2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".bcbab2").show();
                    $(".bcbab3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== BCBAB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".bcbab1").show();
            $(".bcbab2").show();
            $(".bcbab3").show();
            $(".bcbab2").removeClass('jp-hidden');
            $(".bcbab3").removeClass('jp-hidden');
            $(".bcbab3").prependTo("#comp-cont ul");
            $(".bcbab2").prependTo("#comp-cont ul");
            $(".bcbab1").prependTo("#comp-cont ul");
            $(".bcbab1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .business").show();
                    $(".bcbab3").prependTo("#comp-cont ul");
                    $(".bcbab2").prependTo("#comp-cont ul");
                    $(".bcbab1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".bcbab1").show();
                    $(".bcbab2").show();
                    $(".bcbab3").show();
                    $(".bcbab3").prependTo("#comp-cont ul");
                    $(".bcbab2").prependTo("#comp-cont ul");
                    $(".bcbab1").prependTo("#comp-cont ul");
                    $(".bcbab1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario CAAA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".caaa1").show();
        $(".caaa2").show();
        $(".caaa3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== CAAA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".caaa1").appendTo("#rec-cont ul");
            $(".caaa3").prependTo("#comp-cont ul");
            $(".caaa2").prependTo("#comp-cont ul");
            $(".caaa1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .corporate").show();
                    $(".caaa3").prependTo("#comp-cont ul");
                    $(".caaa2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".caaa2").show();
                    $(".caaa3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== CAAA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".caaa1").show();
            $(".caaa2").show();
            $(".caaa3").show();
            $(".caaa2").removeClass('jp-hidden');
            $(".caaa3").removeClass('jp-hidden');
            $(".caaa3").prependTo("#comp-cont ul");
            $(".caaa2").prependTo("#comp-cont ul");
            $(".caaa1").prependTo("#comp-cont ul");
            $(".caaa1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .corporate").show();
                    $(".caaa3").prependTo("#comp-cont ul");
                    $(".caaa2").prependTo("#comp-cont ul");
                    $(".caaa1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".caaa1").show();
                    $(".caaa2").show();
                    $(".caaa3").show();
                    $(".caaa3").prependTo("#comp-cont ul");
                    $(".caaa2").prependTo("#comp-cont ul");
                    $(".caaa1").prependTo("#comp-cont ul");
                    $(".caaa1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario CAAB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q6 .drop6 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q6 .drop6 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q6 .drop6 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q6 .drop6 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q6 .drop6 .trigger").text() == "no preference") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q6 .drop6 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q6 .drop6 .trigger").text() == "no preference")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".caab1").show();
        $(".caab2").show();
        $(".caab3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== CAAB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".caab1").appendTo("#rec-cont ul");
            $(".caab3").prependTo("#comp-cont ul");
            $(".caab2").prependTo("#comp-cont ul");
            $(".caab1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .corporate").show();
                    $(".caab3").prependTo("#comp-cont ul");
                    $(".caab2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".caab2").show();
                    $(".caab3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== CAAB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".caab1").show();
            $(".caab2").show();
            $(".caab3").show();
            $(".caab2").removeClass('jp-hidden');
            $(".caab3").removeClass('jp-hidden');
            $(".caab3").prependTo("#comp-cont ul");
            $(".caab2").prependTo("#comp-cont ul");
            $(".caab1").prependTo("#comp-cont ul");
            $(".caab1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .corporate").show();
                    $(".caab3").prependTo("#comp-cont ul");
                    $(".caab2").prependTo("#comp-cont ul");
                    $(".caab1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".caab1").show();
                    $(".caab2").show();
                    $(".caab3").show();
                    $(".caab3").prependTo("#comp-cont ul");
                    $(".caab2").prependTo("#comp-cont ul");
                    $(".caab1").prependTo("#comp-cont ul");
                    $(".caab1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario CABA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "very important" &&
            $("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".caba1").show();
        $(".caba2").show();
        $(".caba3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== CABA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".caba1").appendTo("#rec-cont ul");
            $(".caba3").prependTo("#comp-cont ul");
            $(".caba2").prependTo("#comp-cont ul");
            $(".caba1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .corporate").show();
                    $(".caba3").prependTo("#comp-cont ul");
                    $(".caba2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".caba2").show();
                    $(".caba3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== CABA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".caba1").show();
            $(".caba2").show();
            $(".caba3").show();
            $(".caba2").removeClass('jp-hidden');
            $(".caba3").removeClass('jp-hidden');
            $(".caba3").prependTo("#comp-cont ul");
            $(".caba2").prependTo("#comp-cont ul");
            $(".caba1").prependTo("#comp-cont ul");
            $(".caba1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .corporate").show();
                    $(".caba3").prependTo("#comp-cont ul");
                    $(".caba2").prependTo("#comp-cont ul");
                    $(".caba1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".caba1").show();
                    $(".caba2").show();
                    $(".caba3").show();
                    $(".caba3").prependTo("#comp-cont ul");
                    $(".caba2").prependTo("#comp-cont ul");
                    $(".caba1").prependTo("#comp-cont ul");
                    $(".caba1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario CABB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "has premium benefits" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q6 .drop6 .trigger").text() == "rewards through Qantas")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".cabb1").show();
        $(".cabb2").show();
        $(".cabb3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== CABB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".cabb1").appendTo("#rec-cont ul");
            $(".cabb3").prependTo("#comp-cont ul");
            $(".cabb2").prependTo("#comp-cont ul");
            $(".cabb1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .corporate").show();
                    $(".cabb3").prependTo("#comp-cont ul");
                    $(".cabb2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".cabb2").show();
                    $(".cabb3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== CABB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".cabb1").show();
            $(".cabb2").show();
            $(".cabb3").show();
            $(".cabb2").removeClass('jp-hidden');
            $(".cabb3").removeClass('jp-hidden');
            $(".cabb3").prependTo("#comp-cont ul");
            $(".cabb2").prependTo("#comp-cont ul");
            $(".cabb1").prependTo("#comp-cont ul");
            $(".cabb1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .corporate").show();
                    $(".cabb3").prependTo("#comp-cont ul");
                    $(".cabb2").prependTo("#comp-cont ul");
                    $(".cabb1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".cabb1").show();
                    $(".cabb2").show();
                    $(".cabb3").show();
                    $(".cabb3").prependTo("#comp-cont ul");
                    $(".cabb2").prependTo("#comp-cont ul");
                    $(".cabb1").prependTo("#comp-cont ul");
                    $(".cabb1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario CBBA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".cbba1").show();
        $(".cbba2").show();
        $(".cbba3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== CBBA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".cbba1").appendTo("#rec-cont ul");
            $(".cbba3").prependTo("#comp-cont ul");
            $(".cbba2").prependTo("#comp-cont ul");
            $(".cbba1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .corporate").show();
                    $(".cbba3").prependTo("#comp-cont ul");
                    $(".cbba2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".cbba2").show();
                    $(".cbba3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== CBBA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".cbba1").show();
            $(".cbba2").show();
            $(".cbba3").show();
            $(".cbba2").removeClass('jp-hidden');
            $(".cbba3").removeClass('jp-hidden');
            $(".cbba3").prependTo("#comp-cont ul");
            $(".cbba2").prependTo("#comp-cont ul");
            $(".cbba1").prependTo("#comp-cont ul");
            $(".cbba1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .corporate").show();
                    $(".cbba3").prependTo("#comp-cont ul");
                    $(".cbba2").prependTo("#comp-cont ul");
                    $(".cbba1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".cbba1").show();
                    $(".cbba2").show();
                    $(".cbba3").show();
                    $(".cbba3").prependTo("#comp-cont ul");
                    $(".cbba2").prependTo("#comp-cont ul");
                    $(".cbba1").prependTo("#comp-cont ul");
                    $(".cbba1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario CBBB =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q6 .drop6 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "covers the essentials" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q6 .drop6 .trigger").text() == "no preference")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".cbbb1").show();
        $(".cbbb2").show();
        $(".cbbb3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== CBBB Desktop =======================*/

        if ($(window).width() > 739) {
            $(".cbbb1").appendTo("#rec-cont ul");
            $(".cbbb3").prependTo("#comp-cont ul");
            $(".cbbb2").prependTo("#comp-cont ul");
            $(".cbbb1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .corporate").show();
                    $(".cbbb3").prependTo("#comp-cont ul");
                    $(".cbbb2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".cbbb2").show();
                    $(".cbbb3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== CBBB Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".cbbb1").show();
            $(".cbbb2").show();
            $(".cbbb3").show();
            $(".cbbb2").removeClass('jp-hidden');
            $(".cbbb3").removeClass('jp-hidden');
            $(".cbbb3").prependTo("#comp-cont ul");
            $(".cbbb2").prependTo("#comp-cont ul");
            $(".cbbb1").prependTo("#comp-cont ul");
            $(".cbbb1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .corporate").show();
                    $(".cbbb3").prependTo("#comp-cont ul");
                    $(".cbbb2").prependTo("#comp-cont ul");
                    $(".cbbb1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".cbbb1").show();
                    $(".cbbb2").show();
                    $(".cbbb3").show();
                    $(".cbbb3").prependTo("#comp-cont ul");
                    $(".cbbb2").prependTo("#comp-cont ul");
                    $(".cbbb1").prependTo("#comp-cont ul");
                    $(".cbbb1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
    /*=================== Scenario CCBA =======================*/
    else if (
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q6 .drop6 .trigger").text() == "rewards through Qantas") ||
        ($("#q1 .drop1 .trigger").text() == "more than $10 million" &&
            $("#q3 .drop3 .trigger").text() == "no preference" &&
            $("#q4 .drop4 .trigger").text() == "nice to have" &&
            $("#q6 .drop6 .trigger").text() == "no preference")
    ) {
        $("#suggested-cards").show();
        $("#card-results").show();
        $("#card-results li").hide();
        $(".ccba1").show();
        $(".ccba2").show();
        $(".ccba3").show();
        $('html, body').animate({
            scrollTop: $("#suggested-cards").offset().top
        }, 1000);

        /*=================== CCBA Desktop =======================*/

        if ($(window).width() > 739) {
            $(".ccba1").appendTo("#rec-cont ul");
            $(".ccba3").prependTo("#comp-cont ul");
            $(".ccba2").prependTo("#comp-cont ul");
            $(".ccba1 .rec-tag").show();
            $("#legend").css("color", "#ffffff");
            $("#legend").css("width", "500px");
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 2,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont .corporate").show();
                    $(".ccba3").prependTo("#comp-cont ul");
                    $(".ccba2").prependTo("#comp-cont ul");
                    $("#legend").css("color", "#000000");
                    $("#legend").css("width", "50px");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#comp-cont li").show();
                    $("#comp-cont li").hide();
                    $("#legend").css("color", "#ffffff");
                    $("#legend").css("width", "500px");
                    $(".ccba2").show();
                    $(".ccba3").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 2,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }

        /*=================== CCBA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".ccba1").show();
            $(".ccba2").show();
            $(".ccba3").show();
            $(".ccba2").removeClass('jp-hidden');
            $(".ccba3").removeClass('jp-hidden');
            $(".ccba3").prependTo("#comp-cont ul");
            $(".ccba2").prependTo("#comp-cont ul");
            $(".ccba1").prependTo("#comp-cont ul");
            $(".ccba1 .rec-tag").show();
            $("div.holder").jPages({
                containerID: "itemContainer",
                startRange: 0,
                midRange: 0,
                endRange: 0,
                perPage: 1,
                animation: "fadeIn",
                links: "blank",
                previous: "",
                next: "",
                minHeight: false,
                callback: function(pages, items) {
                    $("#legend").html(pages.current + " / " + pages.count);
                }
            });
            $("#showAll").on("change", function() {
                (typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Toggle_ShowAllCards') : null;
                if ($(this).prop("checked")) {
                    $("div.holder").jPages("destroy");
                    $("#card-results .corporate").show();
                    $(".ccba3").prependTo("#comp-cont ul");
                    $(".ccba2").prependTo("#comp-cont ul");
                    $(".ccba1").prependTo("#comp-cont ul");
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                } else {
                    $("div.holder").jPages("destroy");
                    $("#card-results").show();
                    $("#card-results li").hide();
                    $(".ccba1").show();
                    $(".ccba2").show();
                    $(".ccba3").show();
                    $(".ccba3").prependTo("#comp-cont ul");
                    $(".ccba2").prependTo("#comp-cont ul");
                    $(".ccba1").prependTo("#comp-cont ul");
                    $(".ccba1 .rec-tag").show();
                    $("div.holder").jPages({
                        containerID: "itemContainer",
                        startRange: 0,
                        midRange: 0,
                        endRange: 0,
                        perPage: 1,
                        animation: "fadeIn",
                        links: "blank",
                        previous: "",
                        next: "",
                        minHeight: false,
                        callback: function(pages, items) {
                            $("#legend").html(pages.current + " / " + pages.count);
                        }
                    });
                }
            });
        }
    }
});
