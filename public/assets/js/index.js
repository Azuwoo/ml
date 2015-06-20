
var userAgent = window.navigator.userAgent.toLowerCase();
var conv_prefix = "<___";

if (userAgent.indexOf('chrome') != -1) {
 
}else{
    alert("ごめんなさい、Chrome以外でやるとバグるので、Chromeでお願いします。Chromeのダウンロードサイトへ飛びます。");
    setTimeout("location.href = 'http://www.google.com/chrome/';",500);
}


$(function() {
    //クリックしたときのファンクションをまとめて指定
    $('.tab li').click(function() {

        //.index()を使いクリックされたタブが何番目かを調べ、
        //indexという変数に代入します。
        var index = $('.tab li').index(this);

        //コンテンツを一度すべて非表示にし、
        $('.content').css('display','none');

        //クリックされたタブと同じ順番のコンテンツを表示します。
        $('.content').eq(index).css('display','block');

        //一度タブについているクラスselectを消し、
        $('.tab li').removeClass('select');

        //クリックされたタブのみにクラスselectをつけます。
        $(this).addClass('select');
    });

    createGAtext();
    $("#utm_s_str").val(getDateTime());

    //showFeedbackLink()をリサイズの時や初期ロード時に読込
    $(window).resize(function(){
         showFeedbackLink();
    });
    showFeedbackLink();

    $("#utm_m_str").focus(function(){
        getInputData('UM');
    });

    $("#utm_c_str").focus(function(){
        getInputData('UC');
    });

    $("#your_url").focus(function(){
        getInputData('YU');
    });

});

