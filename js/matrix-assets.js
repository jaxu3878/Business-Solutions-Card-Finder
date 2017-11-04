

$("body").on('DOMSubtreeModified', ".drop1 .trigger", function() {
    if ($(".drop1 .trigger").text() == "under $2 million") {
        $("#q2").show();
        $(".drop1").css("pointer-events", "none");
        $("body").on('DOMSubtreeModified', ".drop2 .trigger", function() {
            if ($(".drop2 .trigger").text() == "in full each month") {
                $("#q3").show();
                $(".drop2").css("pointer-events", "none");
                $("body").on('DOMSubtreeModified', ".drop3 .trigger", function() {
                    if ($(".drop3 .trigger").text() == "has premium benefits") {
                        $("#q4").show();
                        $(".drop3").css("pointer-events", "none");
                        $("body").on('DOMSubtreeModified', ".drop4 .trigger", function() {

                            /*=================== Scenario AAAAA =======================*/

                            if ($(".drop4 .trigger").text() == "very important") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".aaaa1").show();
                                $(".aaaa2").show();
                                $(".aaaa3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== AAAA Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".aaaa1").appendTo("#rec-cont ul");
                                    $(".aaba1").appendTo("#comp-cont ul");
                                    $(".aaaa3").prependTo("#comp-cont ul");
                                    $(".aaaa2").prependTo("#comp-cont ul");
                                    $(".aaaa1 .rec-tag").show();
                                    $(".aaba1 .rec-tag").hide();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".aaaa3").prependTo("#comp-cont ul");
                                            $(".aaaa2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".aaaa2").show();
                                            $(".aaaa3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== AAAA Mobile =======================*/
                                else {
                                    $("#card-results").show();
                                    $("#card-results li").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".aaaa1").show();
                                    $(".aaaa2").show();
                                    $(".aaaa3").show();
                                    $(".aaba3").removeClass('jp-hidden');
                                    $(".aaaa2").removeClass('jp-hidden');
                                    $(".aaaa3").removeClass('jp-hidden');
                                    $(".aaaa3").prependTo("#comp-cont ul");
                                    $(".aaaa2").prependTo("#comp-cont ul");
                                    $(".aaaa1").prependTo("#comp-cont ul");
                                    $(".aaaa1 .rec-tag").show();
                                    $(".aaba1 .rec-tag").hide();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".aaaa3").prependTo("#comp-cont ul");
                                            $(".aaaa2").prependTo("#comp-cont ul");
                                            $(".aaaa1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".aaaa1").show();
                                            $(".aaaa2").show();
                                            $(".aaaa3").show();
                                            $(".aaaa3").prependTo("#comp-cont ul");
                                            $(".aaaa2").prependTo("#comp-cont ul");
                                            $(".aaaa1").prependTo("#comp-cont ul");
                                            $(".aaaa1 .rec-tag").show();
                                            $(".aaba1 .rec-tag").hide();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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

                            /*=================== Scenario AAAB =======================*/
                            else if ($(".drop4 .trigger").text() == "a credit card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".aaab1").show();
                                $(".aaab2").show();
                                $(".aaab3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== AAAB Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".aaab1").appendTo("#rec-cont ul");
                                    $(".aabb1").appendTo("#comp-cont ul");
                                    $(".aaab3").prependTo("#comp-cont ul");
                                    $(".aaab2").prependTo("#comp-cont ul");
                                    $(".aaab1 .rec-tag").show();
                                    $(".aaba1 .rec-tag").hide();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".aaab3").prependTo("#comp-cont ul");
                                            $(".aaab2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".aaab2").show();
                                            $(".aaab3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== AAAB Mobile =======================*/
                                else {
                                    $("#card-results").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".aaab1").show();
                                    $(".aaab2").show();
                                    $(".aaab3").show();
                                    $(".aaab1").removeClass('jp-hidden');
                                    $(".aaab2").removeClass('jp-hidden');
                                    $(".aaab3").removeClass('jp-hidden');
                                    $(".aaba2").removeClass('jp-hidden');
                                    $(".aaab3").prependTo("#comp-cont ul");
                                    $(".aaab2").prependTo("#comp-cont ul");
                                    $(".aaab1").prependTo("#comp-cont ul");
                                    $(".aaab1 .rec-tag").show();
                                    $(".aaba1 .rec-tag").hide();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".aaab3").prependTo("#comp-cont ul");
                                            $(".aaab2").prependTo("#comp-cont ul");
                                            $(".aaab1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".aaab1").show();
                                            $(".aaab2").show();
                                            $(".aaab3").show();
                                            $(".aaab1").prependTo("#comp-cont ul");
                                            $(".aaab1 .rec-tag").show();
                                            $(".aaba1 .rec-tag").hide();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                    } else {
                        $("#q4").show();
                        $(".drop3").css("pointer-events", "none");
                        $("body").on('DOMSubtreeModified', ".drop4 .trigger", function() {

                            /*=================== Scenario AABA =======================*/

                            if ($(".drop4 .trigger").text() == "a charge card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".aaba1").show();
                                $(".aaba2").show();
                                $(".aaba3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== AABA Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".aaba1").appendTo("#rec-cont ul");
                                    $(".aaba3").prependTo("#comp-cont ul");
                                    $(".aaba2").prependTo("#comp-cont ul");
                                    $(".aaba1 .rec-tag").show();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".aaba3").prependTo("#comp-cont ul");
                                            $(".aaba2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".aaba2").show();
                                            $(".aaba3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== AABA Mobile =======================*/
                                else {
                                    $("#card-results").show();
                                    $("#card-results li").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".aaba1").show();
                                    $(".aaba2").show();
                                    $(".aaba3").show();
                                    $(".aaba2").removeClass('jp-hidden');
                                    $(".aaba3").removeClass('jp-hidden');
                                    $(".aaba3").prependTo("#comp-cont ul");
                                    $(".aaba2").prependTo("#comp-cont ul");
                                    $(".aaba1").prependTo("#comp-cont ul");
                                    $(".aaba1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".aaba3").prependTo("#comp-cont ul");
                                            $(".aaba2").prependTo("#comp-cont ul");
                                            $(".aaba1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".aaba1").show();
                                            $(".aaba2").show();
                                            $(".aaba3").show();
                                            $(".aaba3").prependTo("#comp-cont ul");
                                            $(".aaba2").prependTo("#comp-cont ul");
                                            $(".aaba1").prependTo("#comp-cont ul");
                                            $(".aaba1 .rec-tag").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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

                            /*=================== Scenario AABB =======================*/
                            else if ($(".drop4 .trigger").text() == "a credit card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".aabb1").show();
                                $(".aabb2").show();
                                $(".aabb3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== AABB Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".aabb1").appendTo("#rec-cont ul");
                                    $(".aabb3").prependTo("#comp-cont ul");
                                    $(".aabb2").prependTo("#comp-cont ul");
                                    $(".aabb1 .rec-tag").show();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".aabb3").prependTo("#comp-cont ul");
                                            $(".aabb2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".aabb2").show();
                                            $(".aabb3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== AABB Mobile =======================*/
                                else {
                                    $(".aabb1 .rec-tag").show();
                                    $("#card-results").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".aabb1").show();
                                    $(".aabb2").show();
                                    $(".aabb3").show();
                                    $(".aabb2").removeClass('jp-hidden');
                                    $(".aabb3").removeClass('jp-hidden');
                                    $(".aabb3").prependTo("#comp-cont ul");
                                    $(".aabb2").prependTo("#comp-cont ul");
                                    $(".aabb1").prependTo("#comp-cont ul");
                                    $(".aabb1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".aabb3").prependTo("#comp-cont ul");
                                            $(".aabb2").prependTo("#comp-cont ul");
                                            $(".aabb1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".aabb1").show();
                                            $(".aabb2").show();
                                            $(".aabb3").show();
                                            $(".aabb1").prependTo("#comp-cont ul");
                                            $(".aabb1 .rec-tag").show();
                                            $(".aaba1 .rec-tag").hide();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                    }
                });
            } else if ($(".drop2 .trigger").text() == "less than once a month") {
                $("#q3").show();
                $(".drop2").css("pointer-events", "none");
                $("body").on('DOMSubtreeModified', ".drop3 .trigger", function() {
                    if ($(".drop3 .trigger").text() == "Qantas Frequent Flyer") {
                        $("#q4").show();
                        $(".drop3").css("pointer-events", "none");
                        $("body").on('DOMSubtreeModified', ".drop4 .trigger", function() {

                            /*=================== Scenario ABAA =======================*/

                            if ($(".drop4 .trigger").text() == "a charge card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".abaa1").show();
                                $(".abaa2").show();
                                $(".abaa3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== ABAA Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".abaa1").appendTo("#rec-cont ul");
                                    $(".aaaa2").appendTo("#comp-cont ul");
                                    $(".abaa3").prependTo("#comp-cont ul");
                                    $(".abaa2").prependTo("#comp-cont ul");
                                    $(".abaa1 .rec-tag").show();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".abaa3").prependTo("#comp-cont ul");
                                            $(".abaa2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".abaa2").show();
                                            $(".abaa3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== ABAA Mobile =======================*/
                                else {
                                    $("#card-results").show();
                                    $("#card-results li").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".abaa1").show();
                                    $(".abaa2").show();
                                    $(".abaa3").show();
                                    $(".aaaa2").removeClass('jp-hidden');
                                    $(".abaa2").removeClass('jp-hidden');
                                    $(".abaa3").removeClass('jp-hidden');
                                    $(".abaa3").prependTo("#comp-cont ul");
                                    $(".abaa2").prependTo("#comp-cont ul");
                                    $(".abaa1").prependTo("#comp-cont ul");
                                    $(".abaa1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".abaa3").prependTo("#comp-cont ul");
                                            $(".abaa2").prependTo("#comp-cont ul");
                                            $(".abaa1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".abaa1").show();
                                            $(".abaa2").show();
                                            $(".abaa3").show();
                                            $(".abaa3").prependTo("#comp-cont ul");
                                            $(".abaa2").prependTo("#comp-cont ul");
                                            $(".abaa1").prependTo("#comp-cont ul");
                                            $(".abaa1 .rec-tag").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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

                            /*=================== Scenario ABAB =======================*/
                            else if ($(".drop4 .trigger").text() == "a credit card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".abab1").show();
                                $(".abab2").show();
                                $(".abab3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== ABAB Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".abab1").appendTo("#rec-cont ul");
                                    $(".aabb1").appendTo("#comp-cont ul");
                                    $(".abab3").prependTo("#comp-cont ul");
                                    $(".abab2").prependTo("#comp-cont ul");
                                    $(".abab1 .rec-tag").show();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".abab3").prependTo("#comp-cont ul");
                                            $(".abab2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".abab2").show();
                                            $(".abab3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== ABAB Mobile =======================*/
                                else {
                                    $("#card-results").show();
                                    $("#card-results li").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".abab1").show();
                                    $(".abab2").show();
                                    $(".abab3").show();
                                    $(".abab1").removeClass('jp-hidden');
                                    $(".abab2").removeClass('jp-hidden');
                                    $(".abab3").removeClass('jp-hidden');
                                    $(".aabb1").removeClass('jp-hidden');
                                    $(".abab3").prependTo("#comp-cont ul");
                                    $(".abab2").prependTo("#comp-cont ul");
                                    $(".abab1").prependTo("#comp-cont ul");
                                    $(".abab1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".abab3").prependTo("#comp-cont ul");
                                            $(".abab2").prependTo("#comp-cont ul");
                                            $(".abab1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".abab1").show();
                                            $(".abab2").show();
                                            $(".abab3").show();
                                            $(".abab3").prependTo("#comp-cont ul");
                                            $(".abab2").prependTo("#comp-cont ul");
                                            $(".abab1").prependTo("#comp-cont ul");
                                            $(".abab1 .rec-tag").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                    } else {
                        $("#q4").show();
                        $(".drop3").css("pointer-events", "none");
                        $("body").on('DOMSubtreeModified', ".drop4 .trigger", function() {

                            /*=================== Scenario ABBA =======================*/

                            if ($(".drop4 .trigger").text() == "a charge card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".abba1").show();
                                $(".abba2").show();
                                $(".abba3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== ABBA Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".abba1").appendTo("#rec-cont ul");
                                    $(".abba3").prependTo("#comp-cont ul");
                                    $(".abba2").prependTo("#comp-cont ul");
                                    $(".abba1 .rec-tag").show();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".abba3").prependTo("#comp-cont ul");
                                            $(".abba2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".abba2").show();
                                            $(".abba3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== ABBA Mobile =======================*/
                                else {
                                    $("#card-results").show();
                                    $("#card-results li").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".abba1").show();
                                    $(".abba2").show();
                                    $(".abba3").show();
                                    $(".abba1").removeClass('jp-hidden');
                                    $(".abba2").removeClass('jp-hidden');
                                    $(".abba3").removeClass('jp-hidden');
                                    $(".abba3").prependTo("#comp-cont ul");
                                    $(".abba2").prependTo("#comp-cont ul");
                                    $(".abba1").prependTo("#comp-cont ul");
                                    $(".abba1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".abba3").prependTo("#comp-cont ul");
                                            $(".abba2").prependTo("#comp-cont ul");
                                            $(".abba1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".abba1").show();
                                            $(".abba2").show();
                                            $(".abba3").show();
                                            $(".abba3").prependTo("#comp-cont ul");
                                            $(".abba2").prependTo("#comp-cont ul");
                                            $(".abba1").prependTo("#comp-cont ul");
                                            $(".abba1 .rec-tag").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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

                            /*=================== Scenario ABBB =======================*/
                            else if ($(".drop4 .trigger").text() == "a credit card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".abbb1").show();
                                $(".abbb2").show();
                                $(".abbb3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== ABBB Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".abbb1").appendTo("#rec-cont ul");
                                    $(".abbb3").prependTo("#comp-cont ul");
                                    $(".abbb2").prependTo("#comp-cont ul");
                                    $(".abbb1 .rec-tag").show();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".abbb3").prependTo("#comp-cont ul");
                                            $(".abbb2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".abbb2").show();
                                            $(".abbb3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== ABBB Mobile =======================*/
                                else {
                                    $("#card-results").show();
                                    $("#card-results li").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".abbb1").show();
                                    $(".abbb2").show();
                                    $(".abbb3").show();
                                    $(".abbb1").removeClass('jp-hidden');
                                    $(".abbb2").removeClass('jp-hidden');
                                    $(".abbb3").removeClass('jp-hidden');
                                    $(".abbb3").prependTo("#comp-cont ul");
                                    $(".abbb2").prependTo("#comp-cont ul");
                                    $(".abbb1").prependTo("#comp-cont ul");
                                    $(".abbb1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".abbb3").prependTo("#comp-cont ul");
                                            $(".abbb2").prependTo("#comp-cont ul");
                                            $(".abbb1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".abbb1").show();
                                            $(".abbb2").show();
                                            $(".abbb3").show();
                                            $(".abbb3").prependTo("#comp-cont ul");
                                            $(".abbb2").prependTo("#comp-cont ul");
                                            $(".abbb1").prependTo("#comp-cont ul");
                                            $(".abbb1 .rec-tag").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                    }
                });
            } else if ($(".drop2 .trigger").text() == "more than once a month") {
                $("#q3").show();
                $(".drop2").css("pointer-events", "none");
                $("body").on('DOMSubtreeModified', ".drop3 .trigger", function() {
                    if ($(".drop3 .trigger").text() == "Qantas Frequent Flyer") {
                        $("#q4").show();
                        $(".drop3").css("pointer-events", "none");
                        $("body").on('DOMSubtreeModified', ".drop4 .trigger", function() {

                            /*=================== Scenario ACAA =======================*/

                            if ($(".drop4 .trigger").text() == "a charge card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".acaa1").show();
                                $(".acaa2").show();
                                $(".acaa3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== ACAA Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".acaa1").appendTo("#rec-cont ul");
                                    $(".aaba1").appendTo("#comp-cont ul");
                                    $(".acaa3").prependTo("#comp-cont ul");
                                    $(".acaa2").prependTo("#comp-cont ul");
                                    $(".acaa1 .rec-tag").show();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".acaa3").prependTo("#comp-cont ul");
                                            $(".acaa2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".acaa2").show();
                                            $(".acaa3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                } else

                                /*=================== ACAA Mobile =======================*/

                                {
                                    $("#card-results").show();
                                    $("#card-results li").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".acaa1").show();
                                    $(".acaa2").show();
                                    $(".acaa3").show();
                                    $(".acaa1").removeClass('jp-hidden');
                                    $(".acaa2").removeClass('jp-hidden');
                                    $(".acaa3").removeClass('jp-hidden');
                                    $(".aaaa2").removeClass('jp-hidden');
                                    $(".acaa3").prependTo("#comp-cont ul");
                                    $(".acaa2").prependTo("#comp-cont ul");
                                    $(".acaa1").prependTo("#comp-cont ul");
                                    $(".acaa1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".acaa3").prependTo("#comp-cont ul");
                                            $(".acaa2").prependTo("#comp-cont ul");
                                            $(".acaa1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".acaa1").show();
                                            $(".acaa2").show();
                                            $(".acaa3").show();
                                            $(".acaa3").prependTo("#comp-cont ul");
                                            $(".acaa2").prependTo("#comp-cont ul");
                                            $(".acaa1").prependTo("#comp-cont ul");
                                            $(".acaa1 .rec-tag").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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

                            /*=================== Scenario ACAB =======================*/
                            else if ($(".drop4 .trigger").text() == "a credit card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".acab1").show();
                                $(".acab2").show();
                                $(".acab3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== ACAB Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".acab1").appendTo("#rec-cont ul");
                                    $(".aabb1").appendTo("#comp-cont ul");
                                    $(".acab3").prependTo("#comp-cont ul");
                                    $(".acab2").prependTo("#comp-cont ul");
                                    $(".acab1 .rec-tag").show();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".acab3").prependTo("#comp-cont ul");
                                            $(".acab2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".acab2").show();
                                            $(".acab3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== ACAB Mobile =======================*/
                                else {
                                    $("#card-results").show();
                                    $("#card-results li").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".acab1").show();
                                    $(".acab2").show();
                                    $(".acab3").show();
                                    $(".acab1").removeClass('jp-hidden');
                                    $(".acab2").removeClass('jp-hidden');
                                    $(".acab3").removeClass('jp-hidden');
                                    $(".aabb1").removeClass('jp-hidden');
                                    $(".acab3").prependTo("#comp-cont ul");
                                    $(".acab2").prependTo("#comp-cont ul");
                                    $(".acab1").prependTo("#comp-cont ul");
                                    $(".acab1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".acab3").prependTo("#comp-cont ul");
                                            $(".acab2").prependTo("#comp-cont ul");
                                            $(".acab1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".acab1").show();
                                            $(".acab2").show();
                                            $(".acab3").show();
                                            $(".acab3").prependTo("#comp-cont ul");
                                            $(".acab2").prependTo("#comp-cont ul");
                                            $(".acab1").prependTo("#comp-cont ul");
                                            $(".acab1 .rec-tag").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                    } else {
                        $("#q4").show();
                        $(".drop3").css("pointer-events", "none");
                        $("body").on('DOMSubtreeModified', ".drop4 .trigger", function() {

                            /*=================== Scenario ACBA =======================*/

                            if ($(".drop4 .trigger").text() == "a charge card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".acba1").show();
                                $(".acba2").show();
                                $(".acba3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== ACBA Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".acba1").appendTo("#rec-cont ul");
                                    $(".acba3").prependTo("#comp-cont ul");
                                    $(".acba2").prependTo("#comp-cont ul");
                                    $(".acba1 .rec-tag").show();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".acba3").prependTo("#comp-cont ul");
                                            $(".acba2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".acba2").show();
                                            $(".acba3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== ACBA Mobile =======================*/
                                else {
                                    $("#card-results").show();
                                    $("#card-results li").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".acba1").show();
                                    $(".acba2").show();
                                    $(".acba3").show();
                                    $(".acba1").removeClass('jp-hidden');
                                    $(".acba2").removeClass('jp-hidden');
                                    $(".acba3").removeClass('jp-hidden');
                                    $(".acba3").prependTo("#comp-cont ul");
                                    $(".acba2").prependTo("#comp-cont ul");
                                    $(".acba1").prependTo("#comp-cont ul");
                                    $(".acba1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".acba3").prependTo("#comp-cont ul");
                                            $(".acba2").prependTo("#comp-cont ul");
                                            $(".acba1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".acba1").show();
                                            $(".acba2").show();
                                            $(".acba3").show();
                                            $(".acba3").prependTo("#comp-cont ul");
                                            $(".acba2").prependTo("#comp-cont ul");
                                            $(".acba1").prependTo("#comp-cont ul");
                                            $(".acba1 .rec-tag").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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

                            /*=================== Scenario ACBB =======================*/
                            else if ($(".drop4 .trigger").text() == "a credit card") {
                                $(".drop4").css("pointer-events", "none");
                                $("#suggested-cards").show();
                                $("#card-results").show();
                                $("#card-results li").hide();
                                $(".acbb1").show();
                                $(".acbb2").show();
                                $(".acbb3").show();
                                $('html, body').animate({
                                    scrollTop: $("#suggested-cards").offset().top
                                }, 1000);

                                /*=================== ACBB Desktop =======================*/

                                if ($(window).width() > 739) {
                                    $(".acbb1").appendTo("#rec-cont ul");
                                    $(".acbb3").prependTo("#comp-cont ul");
                                    $(".acbb2").prependTo("#comp-cont ul");
                                    $(".acbb1 .rec-tag").show();
                                    $("#legend").css("color", "#ffffff");
                                    $("#legend").css("width", "500px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#comp-cont li").show();
                                            $(".acbb3").prependTo("#comp-cont ul");
                                            $(".acbb2").prependTo("#comp-cont ul");
                                            $("#legend").css("color", "#000000");
                                            $("#legend").css("width", "50px");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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
                                            $(".acbb2").show();
                                            $(".acbb3").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 2,
                                                animation: "bounceInLeft",
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

                                /*=================== ACBB Mobile =======================*/
                                else {
                                    $("#card-results").show();
                                    $("#card-results li").show();
                                    $("#card-results li").hide();
                                    $("#legend").css("width", "50px");
                                    $(".acbb1").show();
                                    $(".acbb2").show();
                                    $(".acbb3").show();
                                    $(".acbb1").removeClass('jp-hidden');
                                    $(".acbb2").removeClass('jp-hidden');
                                    $(".acbb3").removeClass('jp-hidden');
                                    $(".acbb3").prependTo("#comp-cont ul");
                                    $(".acbb2").prependTo("#comp-cont ul");
                                    $(".acbb1").prependTo("#comp-cont ul");
                                    $(".acbb1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
                                        links: "blank",
                                        previous: "",
                                        next: "",
                                        minHeight: false,
                                        callback: function(pages, items) {
                                            $("#legend").html(pages.current + " / " + pages.count);
                                        }
                                    });
                                    $("#showAll").on("change", function() {
                                        if ($(this).prop("checked")) {
                                            $("div.holder").jPages("destroy");
                                            $("#card-results li").show();
                                            $(".acbb3").prependTo("#comp-cont ul");
                                            $(".acbb2").prependTo("#comp-cont ul");
                                            $(".acbb1").prependTo("#comp-cont ul");
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                                            $(".acbb1").show();
                                            $(".acbb2").show();
                                            $(".acbb3").show();
                                            $(".acbb3").prependTo("#comp-cont ul");
                                            $(".acbb2").prependTo("#comp-cont ul");
                                            $(".acbb1").prependTo("#comp-cont ul");
                                            $(".acbb1 .rec-tag").show();
                                            $("div.holder").jPages({
                                                containerID: "itemContainer",
                                                startRange: 0,
                                                midRange: 0,
                                                endRange: 0,
                                                perPage: 1,
                                                animation: "bounceInLeft",
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
                    }
                });
            }
        });

    } else if ($(".drop1 .trigger").text() == "over $10 million") {
        $("#q2").show();
        $(".drop1").css("pointer-events", "none");
        $("body").on('DOMSubtreeModified', ".drop2 .trigger", function() {
            if ($(".drop2 .trigger").text() == "rarely") {
                $("#q3").show();
                $(".drop2").css("pointer-events", "none");
                $("body").on('DOMSubtreeModified', ".drop3 .trigger", function() {

                    /*=================== Scenario BAA =======================*/

                    if ($(".drop3 .trigger").text() == "Qantas Frequent Flyer") {
                        $(".drop3").css("pointer-events", "none");
                        $("#suggested-cards").show();
                        $("#card-results").show();
                        $("#card-results li").hide();
                        $(".baa1").show();
                        $(".baa2").show();
                        $(".baa3").show();
                        $('html, body').animate({
                            scrollTop: $("#suggested-cards").offset().top
                        }, 1000);

                        /*=================== BAA Desktop =======================*/

                        if ($(window).width() > 739) {
                            $(".baa1").appendTo("#rec-cont ul");
                            $(".bab1").appendTo("#comp-cont ul");
                            $(".baa3").prependTo("#comp-cont ul");
                            $(".baa2").prependTo("#comp-cont ul");
                            $(".baa1 .rec-tag").show();
                            $("#legend").css("color", "#ffffff");
                            $("#legend").css("width", "500px");
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 2,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                            $("#showAll").on("change", function() {
                                if ($(this).prop("checked")) {
                                    $("div.holder").jPages("destroy");
                                    $("#comp-cont li").show();
                                    $(".baa3").prependTo("#comp-cont ul");
                                    $(".baa2").prependTo("#comp-cont ul");
                                    $("#legend").css("color", "#000000");
                                    $("#legend").css("width", "50px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
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
                                    $(".baa2").show();
                                    $(".baa3").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
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

                        /*=================== BAA Mobile =======================*/
                        else {
                            $("#card-results").show();
                            $("#card-results li").show();
                            $("#card-results li").hide();
                            $("#legend").css("width", "50px");
                            $(".baa1").show();
                            $(".baa2").show();
                            $(".baa3").show();
                            $(".baa1").removeClass('jp-hidden');
                            $(".baa2").removeClass('jp-hidden');
                            $(".baa3").removeClass('jp-hidden');
                            $(".bab1").removeClass('jp-hidden');
                            $(".bab2").removeClass('jp-hidden');
                            $(".baa3").prependTo("#comp-cont ul");
                            $(".baa2").prependTo("#comp-cont ul");
                            $(".baa1").prependTo("#comp-cont ul");
                            $(".baa1 .rec-tag").show();
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 1,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                            $("#showAll").on("change", function() {
                                if ($(this).prop("checked")) {
                                    $("div.holder").jPages("destroy");
                                    $("#card-results li").show();
                                    $(".baa3").prependTo("#comp-cont ul");
                                    $(".baa2").prependTo("#comp-cont ul");
                                    $(".baa1").prependTo("#comp-cont ul");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
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
                                    $(".baa1").show();
                                    $(".baa2").show();
                                    $(".baa3").show();
                                    $(".baa3").prependTo("#comp-cont ul");
                                    $(".baa2").prependTo("#comp-cont ul");
                                    $(".baa1").prependTo("#comp-cont ul");
                                    $(".baa1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
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

                    /*=================== Scenario BAB =======================*/
                    else {
                        $(".drop3").css("pointer-events", "none");
                        $("#suggested-cards").show();
                        $("#card-results").show();
                        $("#card-results li").hide();
                        $(".bab1").show();
                        $(".bab2").show();
                        $(".bab3").show();
                        $('html, body').animate({
                            scrollTop: $("#suggested-cards").offset().top
                        }, 1000);

                        /*=================== BAB Desktop =======================*/

                        if ($(window).width() > 739) {
                            $(".bab1").appendTo("#rec-cont ul");
                            $(".bab3").prependTo("#comp-cont ul");
                            $(".bab2").prependTo("#comp-cont ul");
                            $(".bab1 .rec-tag").show();
                            $("#legend").css("color", "#ffffff");
                            $("#legend").css("width", "500px");
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 2,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                            $("#showAll").on("change", function() {
                                if ($(this).prop("checked")) {
                                    $("div.holder").jPages("destroy");
                                    $("#comp-cont li").show();
                                    $(".bab3").prependTo("#comp-cont ul");
                                    $(".bab2").prependTo("#comp-cont ul");
                                    $("#legend").css("color", "#000000");
                                    $("#legend").css("width", "50px");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
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
                                    $(".bab2").show();
                                    $(".bab3").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 2,
                                        animation: "bounceInLeft",
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
                        } else {
                            $("#card-results").show();
                            $("#card-results li").show();
                            $("#card-results li").hide();
                            $("#legend").css("width", "50px");
                            $(".bab1").show();
                            $(".bab2").show();
                            $(".bab3").show();
                            $(".bab1").removeClass('jp-hidden');
                            $(".bab2").removeClass('jp-hidden');
                            $(".bab3").removeClass('jp-hidden');
                            $(".bab3").prependTo("#comp-cont ul");
                            $(".bab2").prependTo("#comp-cont ul");
                            $(".bab1").prependTo("#comp-cont ul");
                            $(".bab1 .rec-tag").show();
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 1,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                            $("#showAll").on("change", function() {
                                if ($(this).prop("checked")) {
                                    $("div.holder").jPages("destroy");
                                    $("#card-results li").show();
                                    $(".bab3").prependTo("#comp-cont ul");
                                    $(".bab2").prependTo("#comp-cont ul");
                                    $(".bab1").prependTo("#comp-cont ul");
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
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
                                    $(".bab1").show();
                                    $(".bab2").show();
                                    $(".bab3").show();
                                    $(".bab3").prependTo("#comp-cont ul");
                                    $(".bab2").prependTo("#comp-cont ul");
                                    $(".bab1").prependTo("#comp-cont ul");
                                    $(".bab1 .rec-tag").show();
                                    $("div.holder").jPages({
                                        containerID: "itemContainer",
                                        startRange: 0,
                                        midRange: 0,
                                        endRange: 0,
                                        perPage: 1,
                                        animation: "bounceInLeft",
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
            } else if ($(".drop2 .trigger").text() == "less than once a month") {
                $("#q3").show();
                $(".drop2").css("pointer-events", "none");
                $("body").on('DOMSubtreeModified', ".drop3 .trigger", function() {
                    if ($(".drop3 .trigger").text() == "Qantas Frequent Flyer") {
                        $(".drop3").css("pointer-events", "none");
                        $("#suggested-cards").show();
                        $("#card-results").show();
                        $("#card-results li").hide();
                        $(".bba1").show();
                        $(".bba2").show();
                        $(".bba3").show();
                        if ($(window).width() > 739) {
                            $(".bba1").appendTo("#rec-cont ul");
                            $("#rec-cont .rec-tag").show();
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 2,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                        } else {
                            $(".bba1 .rec-tag").show();
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 1,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                        }
                    } else {
                        $(".drop3").css("pointer-events", "none");
                        $("#suggested-cards").show();
                        $("#card-results").show();
                        $("#card-results li").hide();
                        $(".bbb1").show();
                        $(".bbb2").show();
                        $(".bbb3").show();
                        if ($(window).width() > 739) {
                            $(".bbb1").appendTo("#rec-cont ul");
                            $("#rec-cont .rec-tag").show();
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 2,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                        } else {
                            $(".bbb1 .rec-tag").show();
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 1,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                        }
                    }
                });
            } else if ($(".drop2 .trigger").text() == "more than once a month") {
                $("#q3").show();
                $(".drop2").css("pointer-events", "none");
                $("body").on('DOMSubtreeModified', ".drop3 .trigger", function() {
                    if ($(".drop3 .trigger").text() == "Qantas Frequent Flyer") {
                        $(".drop3").css("pointer-events", "none");
                        $("#suggested-cards").show();
                        $("#card-results").show();
                        $("#card-results li").hide();
                        $(".bca1").show();
                        $(".bca2").show();
                        $(".bca3").show();
                        if ($(window).width() > 739) {
                            $(".bca1").appendTo("#rec-cont ul");
                            $("#rec-cont .rec-tag").show();
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 2,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                        } else {
                            $(".bca1 .rec-tag").show();
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 1,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                        }
                    } else {
                        $(".drop3").css("pointer-events", "none");
                        $("#suggested-cards").show();
                        $("#card-results").show();
                        $("#card-results li").hide();
                        $(".bcb1").show();
                        $(".bcb2").show();
                        $(".bcb3").show();
                        if ($(window).width() > 739) {
                            $(".bcb1").appendTo("#rec-cont ul");
                            $("#rec-cont .rec-tag").show();
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 2,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                        } else {
                            $(".bcb1 .rec-tag").show();
                            $("div.holder").jPages({
                                containerID: "itemContainer",
                                startRange: 0,
                                midRange: 0,
                                endRange: 0,
                                perPage: 1,
                                animation: "bounceInLeft",
                                links: "blank",
                                previous: "",
                                next: "",
                                minHeight: false,
                                callback: function(pages, items) {
                                    $("#legend").html(pages.current + " / " + pages.count);
                                }
                            });
                        }
                    }
                });
            }
        });
    }
});