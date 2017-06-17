<script type="text/javascript" src="js/jquery-1.4.1.js" ></script>
		<script>
			window.onload=function(){
				$(".mytop_right ul li").mouseover(function(){
					$(this).children(".myul2").slideDown().end().siblings().children(".myul2").slideUp();
				}).mouseout(function(){
					$(".mytop_right ul li").mouseover=null;
				});
			}
		</script>