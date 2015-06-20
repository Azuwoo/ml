
function showMessage(type,no,time){

    if(type=="e"){ 
        $("#message_erea").css({"background":"#ffa07a"});
    }else if(type=="w"){  
        $("#message_erea").css({"background":"#daa520",
                                    "color" : "#fff"
        });
    }else if(type=="i"){  
        $("#message_erea").css({
                                    "background":"#87ceeb",
                                    "color" : "#353535"
        });
    }

    if(no=="001"){     
        $("#message_erea").fadeIn('slow');  
        $("#message").html("ランダムに学習データを沢山つくってDBに挿入中...　<br>しばらくお待ちください");
        //$("#message").html("updated successfully.");
    }else if(no=="002"){  
        $("#message").html("学習が終了しました");
        $("#message_erea").delay(1500).fadeOut('slow');       

    }else if(no=="003"){  
        $("#message_erea").fadeIn('slow');  
        $("#message").html("はい、はい、はい、それはね、、、、");
    }else if(no=="004"){  
        $("#message_erea").delay(1500).fadeOut('slow');       
//        $("#message").html("please fill out all field.");
    }else if(no=="005"){
        $("#message_erea").fadeIn('slow');  
        $("#message").html("今、DBに溜め込んだデータを使って学習中...<br>ちょっとだけお待ちを");

//        $("#message").html("Convertion done");
    }else if(no=="031"){
        $("#message").html("DBへ挿入が終わりました。<br>Thank you!!");
        $("#message_erea").delay(1500).fadeOut('slow');       
    }else if(no=="032"){  
        $("#message_erea").fadeIn('slow');  
        $("#message").html("初期化しました。");
        $("#message_erea").delay(1500).fadeOut('slow');       
    }else if(no=="033"){  
        $("#message_erea").fadeIn('slow');  
        $("#message").html("DBに学習用のデータはありません。");
        $("#message_erea").delay(1500).fadeOut('slow');       
    }else if(no=="034"){  
        $("#test_answer").fadeIn('slow');  
        $("#test_answer").html("");
        $("#test_answer").html("<br><br><br><br><span style='font-size:80px'><(_ _)></span><br><br>ここに、書いた文字を記入してください<br><br><br><br><br><br>↓↓↓↓↓");
        $("#test_answer").delay(2000).fadeOut('slow'); 

        $("#ans").focus();
    }else if(no=="035"){  
        $("#message_erea").fadeIn('slow');  
        $("#message").html("<a href='closeHelp()'>help画面を閉じる</a>");
    }else if(no=="040"){
            $("#test_answer").fadeIn('slow');  
            $("#test_answer").html("");
            $("#test_answer").html("<img src='assets/img/doubt.jpg'><br>怪しい。ちゃんと書いた？<br>もう一回書いて");
            $("#test_answer").delay(2000).fadeOut('slow'); 

    }
}