/**
 * Created by Tony on 2015/10/19.
 */
!function(w, $){

  $(".sidebar-fold").click(function(){
    $(".viewFramework-body").toggleClass("viewFramework-sidebar-full").toggleClass("viewFramework-sidebar-mini");
  });

  $(".sidebar-nav .sidebar-title").click(function(){
    $(this).parent().toggleClass("sidebar-nav-fold");
    $(this).siblings(".sidebar-trans").slideToggle(240);
  });

  //TODO: 解决方法（API）导出的问题
  /*w.setActiveMenu = function(x, y){
    $(".sidebar-nav")[x-1].find(".sidebar-trans .nav-item")[y-1].addClass("active");
  }*/
}(window, jQuery);

function setActiveMenu(x, y){
  $($($(".sidebar-nav")[x-1]).find(".sidebar-trans .nav-item")[y-1]).addClass("active");
}
