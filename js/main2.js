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
        $(".rec-tag").hide();

        var affid = gup('AFFID');
        var source = gup('sourcecode');
        var cpid = gup('CPID');

        $('input[name=APPCPID]').val(gup('CPID'));
        if ($(window).width() > 739) {
            $(".qcorp1").appendTo("#rec-cont ul");
            $(".qcorp3").prependTo("#comp-cont ul");
            $(".qcorp2").prependTo("#comp-cont ul");
            $(".qcorp1 .rec-tag").show();
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
        }

        /*=================== AAAAA Mobile =======================*/
        else {
            $("#card-results").show();
            $("#card-results li").show();
            $("#card-results li").hide();
            $("#legend").css("width", "50px");
            $(".qcorp1").show();
            $(".qcorp2").show();
            $(".qcorp3").show();
            $(".qcorp3").removeClass('jp-hidden');
            $(".qcorp2").removeClass('jp-hidden');
            $(".qcorp3").prependTo("#comp-cont ul");
            $(".qcorp2").prependTo("#comp-cont ul");
            $(".qcorp1").prependTo("#comp-cont ul");
            $(".qcorp1 .rec-tag").show();
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

        $(".page-link").each(function() {
            var currentLink = $(this).attr('href');
            var cardName = $(this).attr('title');
            var newLink = currentLink + '&intlink=au:acq:cardshop:sme:cardfinder:' + cardName + ':applynow&AFFID=' + affid + '&sourcecode=' + source + '&CPID=' + cpid;
            $(this).attr('href', newLink);
        });

    });

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

    /* Card Terms and Conditions CTA */

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
        if (enquiry == "qantas-platinum-corporate-card") {
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