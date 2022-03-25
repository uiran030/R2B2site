$('#header .rightnav .depth1 > li:last-child').on('mouseover mouseout',function(){
    $(this).css({backgroundColor:'#05deda'})
})

//슬릭슬라이더 플러그인 연결
$('.bfiveInner').slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:500,
    arrow:true,
    prevArrow:'<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow : '<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',
    dots:true,
    fade:true
})