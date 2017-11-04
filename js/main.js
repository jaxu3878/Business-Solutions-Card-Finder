    function gup(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
            return "";
        else
            return results[1];
    }

    $(document).ready(function() {
        $("#cardterms").hide();
        $("#genq1").hide();
        $("#q2").hide();
        $("#q3").hide();
        $("#q4").hide();
        $("#q5One").hide();
        $("#q5Two").hide();
        $("#q6").hide();
        $("#blurb1").hide();
        $("#blurb2").hide();
        $("#blurb3").hide();
        $("#question-btn").hide();
        $("#suggested-cards").hide();
        $("#card-results").hide();
        $(".rec-tag").hide();

        var affid = gup('AFFID');
        var source = gup('sourcecode');
        var cpid = gup('CPID');

        $('input[name=APPCPID]').val(gup('CPID'));
        $('input[name=leadSourceMostRecent]').val(gup('sourcecode'));
        /*

                $(".aaaaa1").appendTo("#rec-cont ul");
                $(".aaaaa3").prependTo("#comp-cont ul");
                $(".aaaaa2").prependTo("#comp-cont ul");
                $(".aaaaa1 .rec-tag").show();
                $(".aabaa1 .rec-tag").hide();


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

        */

        $(".apply-btn").each(function() {
            var currentLink = $(this).attr('href');
            var cardName = $(this).attr('title');
            var newLink = currentLink + '&intlink=au:acq:cardshop:sme:cardfinder:' + cardName + ':applynow&AFFID=' + affid + '&sourcecode=' + source + '&CPID=' + cpid;
            $(this).attr('href', newLink);
        });

        $(".page-link").each(function() {
            var currentLink = $(this).attr('href');
            var cardName = $(this).attr('title');
            var newLink = currentLink + '&intlink=au:acq:cardshop:sme:cardfinder:' + cardName + ':applynow&AFFID=' + affid + '&sourcecode=' + source + '&CPID=' + cpid;
            $(this).attr('href', newLink);
        });

    });

    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);



    $(".specialist").click(function() {
        (typeof($iTagTracker) == 'function') ? $iTagTracker('rmaction', 'Click_SpeakToASpecialist'): null;
    });

    $(".callback").click(function() {
        (typeof($iTagTracker) == 'function') ? $iTagTracker('rmaction', 'Click_RequestACallback'): null;
    });

    $("#genEnquire").click(function() {
        (typeof($iTagTracker) == 'function') ? $iTagTracker('rmaction', 'Click_FindACard'): null;
        $("#q1").hide();
        $("#genq1").show();
        $('html, body').animate({
            scrollTop: $("#question-container").offset().top
        }, 1000);
    });

    $("#cardEnquire").click(function() {
        (typeof($iTagTracker) == 'function') ? $iTagTracker('rmaction', 'Click_SpeakToASpecialist'): null;
        $("#genq1").hide();
        $("#q1").show();
        $('html, body').animate({
            scrollTop: $("#question-container").offset().top
        }, 1000);
    });

    /*

    $('#card-features a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    });

*/


    $("body").on('DOMSubtreeModified', "#genq1 .drop1 .trigger", function() {
        var generalRev = $(this).text();
        $('input[name="genformrev"]').val(generalRev);
        if (($("#genq1 .drop1 .trigger").text() == "under $2 million") || ($("#genq1 .drop1 .trigger").text() == "$2 to $10 million")) {
            $('#contactSpecialist').modal("show");
            $("#blurb1").show();
            $("#blurb2").show();
            $("#blurb3").hide();
        } else if ($("#genq1 .drop1 .trigger").text() == "more than $10 million") {
            $('#contactSpecialist').modal("show");
            $("#blurb1").show();
            $("#blurb2").hide();
            $("#blurb3").show();
        }
    });

    $("body").on('DOMSubtreeModified', "#q1 .drop1 .trigger", function() {
        if ($("#q1 .drop1 .trigger").text() == "under $2 million") {
            $("#q2").show();
            $("#q5Two").hide();
            $("#q6").hide();
            $("#blurb1").show();
            $("#blurb2").show();
            $("#blurb3").hide();
            $("body").on('DOMSubtreeModified', "#q2 .drop2 .trigger", function() {
                if ($("#q2 .drop2 .trigger").text() == "in full each month") {
                    $("#q3").show();
                    $("body").on('DOMSubtreeModified', "#q3 .drop3 .trigger", function() {
                        if ($("#q3 .drop3 .trigger").text() == "has premium benefits") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "covers the essentials") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "no preference") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        }
                    });
                } else if ($("#q2 .drop2 .trigger").text() == "gradually over time") {
                    $("#q3").show();
                    $("body").on('DOMSubtreeModified', "#q3 .drop3 .trigger", function() {
                        if ($("#q3 .drop3 .trigger").text() == "has premium benefits") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "covers the essentials") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "no preference") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        }
                    });
                } else if ($("#q2 .drop2 .trigger").text() == "based on my cash flow") {
                    $("#q3").show();
                    $("body").on('DOMSubtreeModified', "#q3 .drop3 .trigger", function() {
                        if ($("#q3 .drop3 .trigger").text() == "has premium benefits") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "covers the essentials") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "no preference") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5One").show();
                                    $("body").on('DOMSubtreeModified', "#q5One .drop5 .trigger", function() {
                                        if ($("#q5One .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "rewards through Qantas or Virgin") {
                                            $("#question-btn").show();
                                        } else if ($("#q5One .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else if ($("#q1 .drop1 .trigger").text() == "$2 to $10 million") {
            $("#q2").show();
            $("#q5One").hide();
            $("#q6").hide();
            $("#blurb1").show();
            $("#blurb2").show();
            $("#blurb3").hide();
            $("body").on('DOMSubtreeModified', "#q2 .drop2 .trigger", function() {
                if ($("#q2 .drop2 .trigger").text() == "in full each month") {
                    $("#q3").show();
                    $("body").on('DOMSubtreeModified', "#q3 .drop3 .trigger", function() {
                        if ($("#q3 .drop3 .trigger").text() == "has premium benefits") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "covers the essentials") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "no preference") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        }
                    });
                } else if ($("#q2 .drop2 .trigger").text() == "gradually over time") {
                    $("#q3").show();
                    $("body").on('DOMSubtreeModified', "#q3 .drop3 .trigger", function() {
                        if ($("#q3 .drop3 .trigger").text() == "has premium benefits") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "covers the essentials") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "no preference") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        }
                    });
                } else if ($("#q2 .drop2 .trigger").text() == "based on my cash flow") {
                    $("#q3").show();
                    $("body").on('DOMSubtreeModified', "#q3 .drop3 .trigger", function() {
                        if ($("#q3 .drop3 .trigger").text() == "has premium benefits") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "covers the essentials") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        } else if ($("#q3 .drop3 .trigger").text() == "no preference") {
                            $("#q4").show();
                            $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                                if ($("#q4 .drop4 .trigger").text() == "very important") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                                    $("#q5Two").show();
                                    $("body").on('DOMSubtreeModified', "#q5Two .drop5 .trigger", function() {
                                        if ($("#q5Two .drop5 .trigger").text() == "flexible ways to redeem rewards") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "rewards through Qantas") {
                                            $("#question-btn").show();
                                        } else if ($("#q5Two .drop5 .trigger").text() == "no preference") {
                                            $("#question-btn").show();
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else if ($("#q1 .drop1 .trigger").text() == "more than $10 million") {
            $("#q3").show();
            $("#q2").hide();
            $("#q5One").hide();
            $("#q5Two").hide();
            $("#blurb1").show();
            $("#blurb2").hide();
            $("#blurb3").show();
            $("body").on('DOMSubtreeModified', "#q3 .drop3 .trigger", function() {
                if ($("#q3 .drop3 .trigger").text() == "has premium benefits") {
                    $("#q4").show();
                    $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                        if ($("#q4 .drop4 .trigger").text() == "very important") {
                            $("#q6").show();
                            $("body").on('DOMSubtreeModified', "#q6 .drop6 .trigger", function() {
                                if ($("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "rewards through Qantas") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "no preference") {
                                    $("#question-btn").show();
                                }
                            });
                        } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                            $("#q6").show();
                            $("body").on('DOMSubtreeModified', "#q6 .drop6 .trigger", function() {
                                if ($("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "rewards through Qantas") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "no preference") {
                                    $("#question-btn").show();
                                }
                            });
                        }
                    });
                } else if ($("#q3 .drop3 .trigger").text() == "covers the essentials") {
                    $("#q4").show();
                    $(".drop3").css("pointer-events", "none");
                    $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                        if ($("#q4 .drop4 .trigger").text() == "very important") {
                            $("#q6").show();
                            $(".drop4").css("pointer-events", "none");
                            $("body").on('DOMSubtreeModified', "#q6 .drop6 .trigger", function() {
                                if ($("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "rewards through Qantas") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "no preference") {
                                    $("#question-btn").show();
                                }
                            });
                        } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                            $("#q6").show();
                            $(".drop4").css("pointer-events", "none");
                            $("body").on('DOMSubtreeModified', "#q6 .drop6 .trigger", function() {
                                if ($("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "rewards through Qantas") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "no preference") {
                                    $("#question-btn").show();
                                }
                            });
                        }
                    });
                } else if ($("#q3 .drop3 .trigger").text() == "no preference") {
                    $("#q4").show();
                    $("body").on('DOMSubtreeModified', "#q4 .drop4 .trigger", function() {
                        if ($("#q4 .drop4 .trigger").text() == "very important") {
                            $("#q6").show();
                            $("body").on('DOMSubtreeModified', "#q6 .drop6 .trigger", function() {
                                if ($("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "rewards through Qantas") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "no preference") {
                                    $("#question-btn").show();
                                }
                            });
                        } else if ($("#q4 .drop4 .trigger").text() == "nice to have") {
                            $("#q6").show();
                            $("body").on('DOMSubtreeModified', "#q6 .drop6 .trigger", function() {
                                if ($("#q6 .drop6 .trigger").text() == "flexible ways to redeem rewards") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "rewards through Qantas") {
                                    $("#question-btn").show();
                                } else if ($("#q6 .drop6 .trigger").text() == "no preference") {
                                    $("#question-btn").show();
                                }
                            });
                        }
                    });
                }
            });
        }
    });


    /* Card Terms and Conditions CTA */

    /* Qantas Business Card */
    $("#qbcEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexQantasBusTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Gold Business Card */
    $("#gbcEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexGoldBusTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Qantas Business Credit Card */
    $("#qbccEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexQantasBusCreditTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Green Business Card */
    $("#bcEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexBusTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Platinum Business Card */
    $("#pbcEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexPlatBusTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Velocity Business Card */
    $("#vbcEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexVelocityBusTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Business Accelerator Credit Card */
    $("#baccEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexBusAcceleratorCreditTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Business Explorer Credit Card */
    $("#beccEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#BusExpTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Platinum Corporate Card */
    $("#pccEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexPlatCorpTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Gold Corporate Card */
    $("#gccEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexGoldCorpTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Corporate Card */
    $("#ccEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexCorpTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Qantas Platinum Corporate Card */
    $("#qpccEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexQantasPlatCorpTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Qantas Gold Corporate Card */
    $("#qgccEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexQantasGoldCorpTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    /* Qantas Corporate Card */
    $("#qccEnquire").click(function() {
        $("#cardterms").show();
        $(".cardstnc").hide();
        $("#AmexQantasCorpTnC").show();
        $('html, body').animate({
            scrollTop: $("#cardterms").offset().top
        }, 1000);
    });

    $('#contactSpecialist').on('show.bs.modal', function(event) {
        $(document).off('focusin.modal');
        var button = $(event.relatedTarget);
        var enquiry = button.data('whatever');
        $("#card-image").hide();
        if (enquiry == "qantas-business-card") {
            $("#card-image").show();
            $("input[name='card']").val("Qantas Business Card");
            $('input[name="genformrev"]').val("under $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s3042.t.eloqua.com/e/f2',
                name: 'copyOfSBSMCLPFormAU-1498609451440'
            });
            $('input[name="elqFormName"]').val("copyOfSBSMCLPFormAU-1498609451440");
            $('input[name="elqSiteID"]').val("3042");
            $('input[name="sFDCLastCampaignID"]').val("70161000001Hqok");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/qantas-business.png',
                alt: 'Qantas Business Card',
                title: 'Qantas Business Card'
            });
            $("#card-form-cont h4").text("Qantas American Express® Business Card");
        } else if (enquiry == "qantas-business-rewards-card") {
            $("#card-image").show();
            $("input[name='card']").val("Qantas Business Rewards Card");
            $('input[name="genformrev"]').val("under $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s3042.t.eloqua.com/e/f2',
                name: 'copyOfSBSMCLPFormAU-1498609451440'
            });
            $('input[name="elqFormName"]').val("copyOfSBSMCLPFormAU-1498609451440");
            $('input[name="elqSiteID"]').val("3042");
            $('input[name="sFDCLastCampaignID"]').val("70161000001Hqok");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/qantas-business-rewards.png',
                alt: 'Qantas Business Rewards Card',
                title: 'Qantas Business Rewards Card'
            });
            $("#card-form-cont h4").text("American Express® Qantas Business Rewards Card");
        } else if (enquiry == "gold-business-card") {
            $("#card-image").show();
            $("input[name='card']").val("Gold Business Card");
            $('input[name="genformrev"]').val("under $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s3042.t.eloqua.com/e/f2',
                name: 'copyOfSBSMCLPFormAU-1498609451440'
            });
            $('input[name="elqFormName"]').val("copyOfSBSMCLPFormAU-1498609451440");
            $('input[name="elqSiteID"]').val("3042");
            $('input[name="sFDCLastCampaignID"]').val("70161000001Hqok");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/business-gold.png',
                alt: 'Gold Business Card',
                title: 'Gold Business Card'
            });
            $("#card-form-cont h4").text("American Express® Gold Business Card");
        } else if (enquiry == "qantas-business-credit-card") {
            $("#card-image").show();
            $("input[name='card']").val("Qantas Business Credit Card");
            $('input[name="genformrev"]').val("under $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s3042.t.eloqua.com/e/f2',
                name: 'copyOfSBSMCLPFormAU-1498609451440'
            });
            $('input[name="elqFormName"]').val("copyOfSBSMCLPFormAU-1498609451440");
            $('input[name="elqSiteID"]').val("3042");
            $('input[name="sFDCLastCampaignID"]').val("70161000001Hqok");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/qantas-business-credit.png',
                alt: 'Qantas Business Credit Card',
                title: 'Qantas Business Credit Card'
            });
            $("#card-form-cont h4").text("Qantas American Express® Business Credit Card");
        } else if (enquiry == "business-card") {
            $("#card-image").show();
            $("input[name='card']").val("Green Business Card");
            $('input[name="genformrev"]').val("under $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s3042.t.eloqua.com/e/f2',
                name: 'copyOfSBSMCLPFormAU-1498609451440'
            });
            $('input[name="elqFormName"]').val("copyOfSBSMCLPFormAU-1498609451440");
            $('input[name="elqSiteID"]').val("3042");
            $('input[name="sFDCLastCampaignID"]').val("70161000001Hqok");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/business.png',
                alt: 'Green Business Card',
                title: 'Green Business Card'
            });
            $("#card-form-cont h4").text("American Express® Green Business Card");
        } else if (enquiry == "platinum-business-card") {
            $("#card-image").show();
            $("input[name='card']").val("Platinum Business Card");
            $('input[name="genformrev"]').val("under $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s3042.t.eloqua.com/e/f2',
                name: 'copyOfSBSMCLPFormAU-1498609451440'
            });
            $('input[name="elqFormName"]').val("copyOfSBSMCLPFormAU-1498609451440");
            $('input[name="elqSiteID"]').val("3042");
            $('input[name="sFDCLastCampaignID"]').val("70161000001Hqok");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/business-plat.png',
                alt: 'Platinum Business Card',
                title: 'Platinum Business Card'
            });
            $("#card-form-cont h4").text("American Express® Platinum Business Card");
        } else if (enquiry == "velocity-business-card") {
            $("#card-image").show();
            $("input[name='card']").val("Velocity Business Card");
            $('input[name="genformrev"]').val("under $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s3042.t.eloqua.com/e/f2',
                name: 'copyOfSBSMCLPFormAU-1498609451440'
            });
            $('input[name="elqFormName"]').val("copyOfSBSMCLPFormAU-1498609451440");
            $('input[name="elqSiteID"]').val("3042");
            $('input[name="sFDCLastCampaignID"]').val("70161000001Hqok");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/vel-business.jpg',
                alt: 'Velocity Business Card',
                title: 'Velocity Business Card'
            });
            $("#card-form-cont h4").text("American Express® Velocity Business Card");
        } else if (enquiry == "accelerator-business-card") {
            $("#card-image").show();
            $("input[name='card']").val("Accelerator Business Card");
            $('input[name="genformrev"]').val("under $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s3042.t.eloqua.com/e/f2',
                name: 'copyOfSBSMCLPFormAU-1498609451440'
            });
            $('input[name="elqFormName"]').val("copyOfSBSMCLPFormAU-1498609451440");
            $('input[name="elqSiteID"]').val("3042");
            $('input[name="sFDCLastCampaignID"]').val("70161000001Hqok");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/accel-business.png',
                alt: 'Accelerator Business Card',
                title: 'Accelerator Business Card'
            });
            $("#card-form-cont h4").text("American Express® Business Accelerator Credit Card");
        } else if (enquiry == "explorer-business-credit-card") {
            $("#card-image").show();
            $("input[name='card']").val("Explorer Business Credit Card");
            $('input[name="genformrev"]').val("less than $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s3042.t.eloqua.com/e/f2',
                name: 'copyOfSBSMCLPFormAU-1498609451440'
            });
            $('input[name="elqFormName"]').val("copyOfSBSMCLPFormAU-1498609451440");
            $('input[name="elqSiteID"]').val("3042");
            $('input[name="sFDCLastCampaignID"]').val("70161000001Hqok");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/explorer-business.png',
                alt: 'Explorer Business Credit Card',
                title: 'Explorer Business Credit Card'
            });
            $("#card-form-cont h4").text("American Express® Explorer Business Credit Card");
        } else if (enquiry == "platinum-corporate-card") {
            $("#card-image").show();
            $("input[name='card']").val("Platinum Corporate Card");
            $('input[name="genformrev"]').val("more than $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s1124.t.eloqua.com/e/f2',
                name: 'Business-Card-Finder'
            });
            $('input[name="elqFormName"]').val("Business-Card-Finder");
            $('input[name="elqSiteID"]').val("1124");
            $('input[name="sFDCLastCampaignID"]').val("701A0000001BWqP");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/corp-plat.png',
                alt: 'Platinum Corporate Card',
                title: 'Platinum Corporate Card'
            });
            $("#card-form-cont h4").text("American Express® Corporate Platinum Card");
        } else if (enquiry == "gold-corporate-card") {
            $("#card-image").show();
            $("input[name='card']").val("Gold Corporate Card");
            $('input[name="genformrev"]').val("more than $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s1124.t.eloqua.com/e/f2',
                name: 'Business-Card-Finder'
            });
            $('input[name="elqFormName"]').val("Business-Card-Finder");
            $('input[name="elqSiteID"]').val("1124");
            $('input[name="sFDCLastCampaignID"]').val("701A0000001BWqP");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/corp-gold.png',
                alt: 'Gold Corporate Card',
                title: 'Gold Corporate Card'
            });
            $("#card-form-cont h4").text("American Express® Corporate Gold Card");
        } else if (enquiry == "corporate-card") {
            $("#card-image").show();
            $("input[name='card']").val("Green Corporate Card");
            $('input[name="genformrev"]').val("more than $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s1124.t.eloqua.com/e/f2',
                name: 'Business-Card-Finder'
            });
            $('input[name="elqFormName"]').val("Business-Card-Finder");
            $('input[name="elqSiteID"]').val("1124");
            $('input[name="sFDCLastCampaignID"]').val("701A0000001BWqP");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/corporate.png',
                alt: 'Green Corporate Card',
                title: 'Green Corporate Card'
            });
            $("#card-form-cont h4").text("American Express® Green Corporate Card");
        } else if (enquiry == "qantas-platinum-corporate-card") {
            $("#card-image").show();
            $("input[name='card']").val("Qantas Platinum Corporate Card");
            $('input[name="genformrev"]').val("more than $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s1124.t.eloqua.com/e/f2',
                name: 'Business-Card-Finder'
            });
            $('input[name="elqFormName"]').val("Business-Card-Finder");
            $('input[name="elqSiteID"]').val("1124");
            $('input[name="sFDCLastCampaignID"]').val("701A0000001BWqP");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/plat-qantas-corp.png',
                alt: 'Qantas Platinum Corporate Card',
                title: 'Qantas Platinum Corporate Card'
            });
            $("#card-form-cont h4").text("American Express® Qantas Corporate Platinum Card");
        } else if (enquiry == "qantas-gold-corporate-card") {
            $("#card-image").show();
            $("input[name='card']").val("Qantas Gold Corporate Card");
            $('input[name="genformrev"]').val("more than $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s1124.t.eloqua.com/e/f2',
                name: 'Business-Card-Finder'
            });
            $('input[name="elqFormName"]').val("Business-Card-Finder");
            $('input[name="elqSiteID"]').val("1124");
            $('input[name="sFDCLastCampaignID"]').val("701A0000001BWqP");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/gold-qantas-corp.png',
                alt: 'Qantas Gold Corporate Card',
                title: 'Qantas Gold Corporate Card'
            });
            $("#card-form-cont h4").text("American Express® Qantas Corporate Gold Card");
        } else if (enquiry == "qantas-corporate-card") {
            $("#card-image").show();
            $("input[name='card']").val("Qantas Corporate Card");
            $('input[name="genformrev"]').val("more than $10 million");
            $('#card-finder-enquiry-form').attr({
                action: 'https://s1124.t.eloqua.com/e/f2',
                name: 'Business-Card-Finder'
            });
            $('input[name="elqFormName"]').val("Business-Card-Finder");
            $('input[name="elqSiteID"]').val("1124");
            $('input[name="sFDCLastCampaignID"]').val("701A0000001BWqP");
            $("#card-form-cont img").attr({
                src: 'https://mc-apps.com.au/amex/GCP/businesscardfinder/CardFinder/img/qantas-corp.png',
                alt: 'Qantas Corporate Card',
                title: 'Qantas Corporate Card'
            });
            $("#card-form-cont h4").text("American Express® Qantas Corporate Card");
        }
    })

    $('.readMore').click(function() {
        $('.read').toggleClass('read-less');
        if ($(this).text() == 'Show Less') $(this).text('Show All');
        else $(this).text('Show Less');
    });

    $('#readMore').click(function() {
        $('.read').toggleClass('read-less');
        if ($(this).text() == 'Show Less') $(this).text('Show All');
        else $(this).text('Show Less');
    });