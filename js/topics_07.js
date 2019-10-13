$(document).ready(function(){
    getGtitle();
    getGmenu();
    if (screen.width < 800) {
        $('section .anotations').appendTo('section .sidePannel');
    }
});
function getGtitle() {
    var a = "";
    route = "https://spreadsheets.google.com/tq?key=1kI4-DDcdpPwm3t5e6J-rDuE1l0doyI6nN4us8UCyt2w&gid=0";
    selector = "select *";
    $.ss(route).setQuery(selector).setField('status,topic_txt,type,subtopic_num,subtopic_txt,linkTo').send(function (b) {
        this.each(function (c) {
            a += '<h1>' + this.topic_txt + '</h1>';
        });
        $(a).appendTo('.noDisplay.titles');
    });
    setTimeout(function(){
      $('.noDisplay h1:nth-child(8)').appendTo('.target .header');
      $('.noDisplay.titles').remove();
    }, 3000);
}
function getGmenu() {
    var menu = "";
    routeM = "https://spreadsheets.google.com/tq?key=1kI4-DDcdpPwm3t5e6J-rDuE1l0doyI6nN4us8UCyt2w&gid=849684882";
    selector = "select *";
    $.ss(routeM).setQuery(selector).setField('idNum,criteria,status,content,notes').send(function (b) {
        this.each(function (c) {
            menu += '<a class="menu ' + this.status + ' anchor_' + this.idNum + '"><span class="txt">' + this.criteria + '</span> <span class="device"> ( swap )</span></a>';
            menu += '<p class="conten ' + this.status + '" id="paragraph_' + this.idNum + '">' + this.content + '</p>';
            menu += '<p class="note ' + this.status + '" id="note_' + this.idNum + '">' + this.notes + '</p>';
        });
        $(menu).appendTo('.noDisplay.holder');
    });
    setTimeout(function(){
        $('.noDisplay.holder a.menu').appendTo('#menu');
        $('#menu a:nth-child(1)').addClass('current');
        $('a.disable').remove();
        $('.noDisplay.holder p.conten').appendTo('.target .body');
        $('.noDisplay.holder p.note').appendTo('.anotations .body');
        $('.anotations .body p:not(#note_01)').hide();
        $('.target .body p:not(#paragraph_01)').hide();
        menuActions();
        $('#loading').remove();
    }, 4000);
}
function menuActions(){
    $('#menu a').click(function(){
       $('#menu a').removeClass('current');
       $(this).addClass('current');
       $('.sidePannel').toggleClass('hiden');
    });
    $('#menu .anchor_01').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_01, #note_01').show();});
    $('#menu .anchor_02').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_02, #note_02').show();});
    $('#menu .anchor_03').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_03, #note_03').show();});
    $('#menu .anchor_04').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_04, #note_04').show();});
    $('#menu .anchor_05').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_05, #note_05').show();});
    $('#menu .anchor_06').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_06, #note_06').show();});
    $('#menu .anchor_07').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_07, #note_07').show();});
    $('#menu .anchor_08').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_08, #note_08').show();});
    $('#menu .anchor_09').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_09, #note_09').show();});
    $('#menu .anchor_10').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_10, #note_10').show();});
    $('#menu .anchor_11').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_11, #note_11').show();});
    $('#menu .anchor_12').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_12, #note_12').show();});
    $('#menu .anchor_13').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_13, #note_13').show();});
    $('#menu .anchor_14').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_14, #note_14').show();});
    $('#menu .anchor_15').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_15, #note_15').show();});
    $('#menu .anchor_16').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_16, #note_16').show();});
    $('#menu .anchor_17').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_17, #note_17').show();});
    $('#menu .anchor_18').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_18, #note_18').show();});
    $('#menu .anchor_19').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_19, #note_19').show();});
    $('#menu .anchor_20').click(function(){$('.target .body p, .anotations .body p').hide();$('#paragraph_20, #note_20').show();});
}