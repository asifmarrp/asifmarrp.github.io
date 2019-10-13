$(document).ready(function(){
    getGtitle();
    getGmenu();
    if (screen.width < 800) {
        $('section .anotations').appendTo('section .sidePannel');
    }
});
function getGtitle() {
    var a = "";
    route = "https://spreadsheets.google.com/tq?key=1kI4-DDcdpPwm3t5e6J-rDuE1l0doyI6nN4us8UCyt2w&gid=1042635931";
    selector = "select *";
    $.ss(route).setQuery(selector).setField('status,topic_txt,type,subtopic_num,subtopic_txt,openingcnt,openingtitle,closingcnt,closingtitle,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20').send(function (b) {
        this.each(function (c) {
            a += '<div class="' + this.status + '">';
            a += '<h3  class="' + this.type + '">';
            a += '<i><span class="ita">[ ' + this.subtopic_num + ' ]</span> ' + this.subtopic_txt + '</i><br>' + this.topic_txt + '</h3>';
            a += '<div class="cnt c2">' + this.c2 + '</div>';
            a += '<div class="cnt c3">' + this.c3 + '</div>';
            a += '<div class="cnt c4">' + this.c4 + '</div>';
            a += '<div class="cnt c5">' + this.c5 + '</div>';
            a += '<div class="cnt c6">' + this.c6 + '</div>';
            a += '<div class="cnt c7">' + this.c7 + '</div>';
            a += '<div class="cnt c8">' + this.c8 + '</div>';
            a += '<div class="cnt c9">' + this.c9 + '</div>';
            a += '<div class="cnt c10">' + this.c10 + '</div>';
            a += '<div class="cnt c11">' + this.c11 + '</div>';
            a += '<div class="cnt c12">' + this.c12 + '</div>';
            a += '<div class="cnt c13">' + this.c13 + '</div>';
            a += '<div class="cnt c14">' + this.c14 + '</div>';
            a += '<div class="cnt c15">' + this.c15 + '</div>';
            a += '<div class="cnt c16">' + this.c16 + '</div>';
            a += '<div class="cnt c17">' + this.c17 + '</div>';
            a += '<div class="cnt c18">' + this.c18 + '</div>';
            a += '<div class="cnt c19">' + this.c19 + '</div>';
            a += '<div class="cnt c20">' + this.c20 + '</div>';
            a += '</div>';
        });
        $(a).appendTo('#target .body');
    });
    setTimeout(function(){
        $('div.disable').remove();
        $('#target .body .cnt').not('.c2').hide();
    }, 2800);
}
function getGmenu() {
    var menu = "";
    routeM = "https://spreadsheets.google.com/tq?key=1kI4-DDcdpPwm3t5e6J-rDuE1l0doyI6nN4us8UCyt2w&gid=105050943";
    selector = "select *";
    $.ss(routeM).setQuery(selector).setField('idNum,criteria,status,content,notes').send(function (b) {
        this.each(function (c) {
            menu += '<a class="menu ' + this.status + ' anchor_' + this.idNum + '">';
            menu += '<span class="txt">' + this.criteria + '</span> <span class="device"> ( swap )</span></a>';
            menu += '<p class="note ' + this.status + '" id="note_' + this.idNum + '">' + this.notes + '</p>';
        });
        $(menu).appendTo('.noDisplay.holder');
    });
    setTimeout(function(){
        $('.noDisplay.holder a.menu').appendTo('#menu');
        $('#menu a:nth-child(1)').addClass('current');
        $('a.disable').remove();
        $('.noDisplay.holder p.note').appendTo('.anotations .body');
        $('.anotations .body p:not(#note_01)').hide();
        menuActions();
        $('#loading').remove();
        $('#target .body div .topic i').remove();
        $('#target .body div .topic').find("br:even").remove();
    }, 3700);
}
function menuActions(){
    $('#menu a').click(function(){
       $('#menu a').removeClass('current');
       $(this).addClass('current');
       $('.sidePannel').toggleClass('hiden');
    });
    $('#menu .anchor_01').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c2, #note_01').show();});
    $('#menu .anchor_02').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c3, #note_02').show();});
    $('#menu .anchor_03').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c4, #note_03').show();});
    $('#menu .anchor_04').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c5, #note_04').show();});
    $('#menu .anchor_05').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c6, #note_05').show();});
    $('#menu .anchor_06').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c7, #note_06').show();});
    $('#menu .anchor_07').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c8, #note_07').show();});
    $('#menu .anchor_08').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c9, #note_08').show();});
    $('#menu .anchor_09').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c10, #note_09').show();});
    $('#menu .anchor_10').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c11, #note_10').show();});
    $('#menu .anchor_11').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c12, #note_11').show();});
    $('#menu .anchor_12').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c13, #note_12').show();});
    $('#menu .anchor_13').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c14, #note_13').show();});
    $('#menu .anchor_14').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c15, #note_14').show();});
    $('#menu .anchor_15').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c16, #note_15').show();});
    $('#menu .anchor_16').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c17, #note_16').show();});
    $('#menu .anchor_17').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c18, #note_17').show();});
    $('#menu .anchor_18').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c19, #note_18').show();});
    $('#menu .anchor_19').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c20 #note_19').show();});
    $('#menu .anchor_20').click(function(){$('#target .body .cnt, .anotations .body p').hide();$('#target .body .c21, #note_20').show();});
}