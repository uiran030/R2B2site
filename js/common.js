$('#header .rightnav .depth1 > li:last-child').on('mouseover mouseout',function(){
    $(this).css({backgroundColor:'#05deda'})
})

//슬릭슬라이더 플러그인 연결
$('.bfiveInner').slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:500,
    arrow:true,
    prevArrow:'<button class="slick-arrow slick-prev"><i class="fa-solid fa-circle-chevron-left"></i></button>',
    nextArrow : '<button class="slick-arrow slick-next"><i class="fa-solid fa-circle-chevron-right"></i></button>',
    dots:false,
    fade:true
})

// list6 ranking
$('.ranking_btn > a').on('click', function(){
    var aindex = $(this).index()
    $(this).addClass('on').siblings().removeClass('on')
    $('#ranking_list > table').eq(aindex).addClass('on').siblings().removeClass('on')

    return false
})

$(document).ready(function(){
    $('#close').click(function(){
        $('#pop').hide();
    })
})
