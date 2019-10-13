$(document).ready(function(){
    getGdata();
});
function getGdata() {
    var a = "";
    route = "https://spreadsheets.google.com/tq?key=1kI4-DDcdpPwm3t5e6J-rDuE1l0doyI6nN4us8UCyt2w&gid=0";
    selector = "select *";
    $.ss(route).setQuery(selector).setField('status,topic_txt,type,subtopic_num,subtopic_txt,linkTo').send(function (b) {
        this.each(function (c) {
            a += '<a href="topics/'  + this.linkTo + '.html"> <p class="' + this.type + ' ' + this.status + '">';
            a += '<i>' + this.subtopic_txt + '</i><br>';
            a += '<b> ' + this.subtopic_num + ' </b> ';
            a += '<span class="category"> ' + this.subtopic_txt + '</span>';
            a += this.topic_txt + '</p></a>';
        });
        $(a).appendTo('.target');
    });
    setTimeout(function(){
      $('.target .disable').remove();
      $('.target .topic i').remove();
      $('.target .topic b').remove();
      $('.target .topic .category').remove();
      $('#loading').remove();
    }, 3000);
}
