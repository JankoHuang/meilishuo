
$(document).ready(function(){
    $(".search-tab span").each(function(index){
        $(this).click(function(){
            $(".search-tab .active").removeClass("active");
            $(".search-tab span").eq(index).addClass("active")
        });
    });

    $(".right-menu").each(function(index){
        $(this).mouseover(function(){
            $(".left-menu").eq(index).css({borderRight:"0"})
        });
        $(".right-menu").mouseout(function(){
            $(".left-menu").eq(index).css({borderRight:"1px solid #D3D3D3"})
        })
    });
    $(".left-menu").each(function(index){
        $(this).mouseover(function(){
            $(".left-menu").eq(index).css({borderRight:"0"})
        });
        $(".left-menu").mouseout(function(){
            $(".left-menu").eq(index).css({borderRight:"1px solid #D3D3D3"})
        })
    });

    $(".hi .tab div").each(function(index){
        $(this).hover(function(){
            $(".hi .tab div").removeClass("active-1").eq(index).addClass("active-1");
            $(".hi .tab-item").removeClass("active-2").eq(index).addClass("active-2");
        });
    });

    $(".good-shop .tab div").each(function(index){
        $(this).hover(function(){
            $(".good-shop .tab div").removeClass("active-1").eq(index).addClass("active-1");
            $(".good-shop .tab-item").removeClass("active-2").eq(index).addClass("active-2");
        });
    });

    $(".good-shop .cont .tab-inner .item .unadd").hover(function(){
        $(this).text("取消关注");
    }).mouseout(function(){
        $(this).text("已关注");
    });


});

$(function () {
    $(window).scroll(function(){
        if($(window).scrollTop()>155) {
            $(".mid-nav").css({position:"fixed",top:"0"})
        }else{
            $(".mid-nav").css({position:"relative"})
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop()>1){
            $(".back").fadeIn(300);
        } else {
            $(".back").fadeOut(300);
        }
    });
    $(".back").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });

    $(".aside").hover(function(){
        $(".aside-whole").stop(false, true).animate({width:"toggle",right: '0'},250, 'linear');
    })

});




