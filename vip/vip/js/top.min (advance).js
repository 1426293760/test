$.ajax({
	type: "get",
	url: "json/index.json",
	async: false,
	success: function(data) {
		$.each(data.navTit, function(i, v) {
			$("<li class='actli'>").html($("<a>").html(v)).appendTo($(".active"))
		});
		$.each(data.href, function(i, v) {
			$(".nav li a").eq(i).attr("href", v)
		});
		$("<div class='sub sub1'>").appendTo("li:eq(1)");
		$("<div class='sub sub2'>").appendTo("li:eq(3)");
		$.each(data.xlTit1, function(i, v) {
			$("<a>").html(v).attr("href", data.xlhref1[i]).appendTo(".sub1")
		});
		$.each(data.xlTit2, function(i, v) {
			$("<a>").html(v).attr("href", data.xlhref2[i]).appendTo(".sub2")
		});
		$.each(data.xlhref3, function(i, v) {
			$("<li>").html($("<a>").html($("<div class='icon'>")).attr("href", v)).appendTo(".clearfix1");
			$("<img>").attr("src", data.xlImg3[i]).appendTo($(".icon")[i]);
			$("<div class='name'>").html(data.xlTit3[i]).appendTo($(".clearfix1>li>a")[i])
		});
		$(".actli a").unbind();
		$(".actli a").not($(".actli:eq(0) a")).hover(function() {
			$(this).css("color", "#fff")
		}, function() {
			$(this).css("color", "#B2B2B2")
		});
		$("li>a").css("color", "#B2B2B2");
		$("li").css("border", "none");
		$("li:eq(0)>a").css("color", "#fff");
		$("li:eq(0)").css("border-bottom", "2px solid #fff");
		$("li:eq(1)").hover(function() {
			$(".sub1").show()
		}, function() {
			$(".sub1").hide()
		});
		$("li:eq(3)").hover(function() {
			$(".sub2").show()
		}, function() {
			$(".sub2").hide()
		});
		$("li:eq(5)").hover(function() {
			$(".brand-subnav").show()
		}, function() {
			$(".brand-subnav").hide()
		});
		$(".sub a").hover(function() {
			$(this).css({
				"color": "#000",
				"background": "#B2B2B2"
			})
		}, function() {
			$(this).css({
				"color": "#B2B2B2",
				"background": "#1b1b1b"
			})
		});
		$(".brand-subnav").hover(function() {
			$(this).show()
		}, function() {
			$(this).hide()
		});
		$(".clearfix1 li").hover(function() {
			$(this).css("opacity", 1)
		}, function() {
			$(this).css("opacity", 0.6)
		});
		$.each(data.zbtp, function(i, v) {
			$("<div class='picbox'>").html($("<div class='video'>").html($("<video class='v1' style='width:1200px;height:675px;'>"))).appendTo($(".pic-wrapper"));
			$("<source>").attr("src", data.bjsp[i]).appendTo($(".v1")[i]);
			$("<div class='text'>").appendTo($(".picbox")[i]);
			$("<img>").attr("src", v).appendTo($(".text")[i])
		});
		$(".picbox:eq(1) .video").remove();
		$(".picbox:eq(2) .video").remove();
		$.each(data.lbwz1, function(i, v) {
			$("<li class='qt'>").html($("<div class='cn'>").html(v)).appendTo(".clearfix");
			$("<div class='en'>").html(data.lbwz2[i]).appendTo($(".clearfix>li")[i])
		});
		$(".clearfix>li").click(function() {
			$(".clearfix>li").removeClass("activ");
			$(this).addClass("activ")
		});
		var ui, we, er, rt;
		$(".v1").eq(0).on('ended', function() {
			$(".clearfix>li").eq(1).click();
			er = setTimeout(function() {
				$(".clearfix>li").eq(2).click()
			}, 3000);
			ui = setTimeout(function() {
				$(".clearfix>li").eq(3).click()
			}, 6000)
		});
		$(".v1").eq(1).on('ended', function() {
			$(".clearfix>li").eq(4).click()
		});
		$(".v1").eq(2).on('ended', function() {
			$(".clearfix>li").eq(0).click()
		});
		$(".clearfix>li").eq(1).click(function() {
			$(".v1")[0].pause();
			$(".v1")[1].pause();
			$(".v1")[2].pause();
			rt = setTimeout(function() {
				$(".clearfix>li").eq(2).click()
			}, 3000);
			clearTimeout(ui);
			clearTimeout(we);
			clearTimeout(er)
		});
		$(".clearfix>li").eq(2).click(function() {
			$(".v1")[0].pause();
			$(".v1")[1].pause();
			$(".v1")[2].pause();
			we = setTimeout(function() {
				$(".clearfix>li").eq(3).click()
			}, 3000);
			clearTimeout(ui);
			clearTimeout(rt);
			clearTimeout(er)
		});
		$.each($(".clearfix>li"), function(i) {
			var w = 0;
			$(this).click(function() {
				$(".clearfix>li").removeClass("activ");
				if(i == 3) {
					w = 1;
					clearTimeout(we);
					$(".v1")[0].pause();
					$(".v1")[2].pause();
					$(".v1")[w].currentTime = 0;
					$(".v1")[w].play()
				} else if(i == 4) {
					w = 2;
					clearTimeout(we);
					$(".v1")[0].pause();
					$(".v1")[1].pause();
					$(".v1")[w].currentTime = 0;
					$(".v1")[w].play()
				} else if(i == 0) {
					clearTimeout(we);
					$(".v1")[1].pause();
					$(".v1")[2].pause();
					$(".v1")[i].currentTime = 0;
					$(".v1")[i].play()
				}
				$(this).addClass("activ");
				$(".picbox").hide();
				$(".picbox").eq(i).fadeIn(500)
			})
		});
		$(".picbox").eq(0).show();
		$(".clearfix>li").eq(0).addClass("activ");
		$("<div class='btn'>").appendTo($(".video").next());
		$.each(data.splj, function(i, v) {
			$("<a>").html(data.spwb[i]).attr("href", v).appendTo($(".btn")[i])
		});
		$.each(data.gk, function(i, v) {
			$("<a>").html(v).appendTo($(".btn")[i])
		});
		for(var q = 1; q < $(".btn>a").length; q += 2) {
			$(".btn>a").eq(q).click(function() {
				$(".play-box").show();
				$(".gray-bg").show()
			})
		}
		$(".btn>a").hover(function() {
			$(this).css({
				"border": "1px solid rgb(0, 0, 0, 0)",
				"background": "rgb(0, 0, 0, 0.6)"
			})
		}, function() {
			$(this).css({
				"border": "1px solid #fff",
				"background": "none"
			})
		});
		$(".close").hover(function() {
			$(this).css("background-position", "0 0")
		}, function() {
			$(this).css("background-position", "0 -21px")
		});
		$(".btn>a").eq(1).click(function() {
			$(".tyu").attr("src", data.tblj[0]);
			$(".tyu")[0].currentTime = 0
		});
		$(".btn>a").eq(3).click(function() {
			$(".tyu").attr("src", data.tblj[1]);
			$(".tyu")[0].currentTime = 0
		});
		$(".btn>a").eq(5).click(function() {
			$(".tyu").attr("src", data.tblj[2]);
			$(".tyu")[0].currentTime = 0
		});
		$.each(data.zxtb, function(i, v) {
			$("<li>").html($("<a class='www'>").attr("href", data.tblj1[i])).appendTo($(".clearfi"));
			$(".www").eq(2).click(function() {
				alert("网页还在开发中")
			});
			$("<div class='ico'>").html($("<img>").attr("src", v)).appendTo($(".clearfi>li>a")[i]);
			$("<div class='gray'>").appendTo($(".clearfi>li>a")[i]);
			$("<div class='content'>").html($("<div>").html(data.zxh5[i])).appendTo($(".clearfi>li>a")[i]);
			$("<div class='line'>").appendTo($(".content")[i]);
			$("<p>").html(data.zxp[i]).appendTo($(".content")[i])
		});
		$(".clearfi>li").hover(function() {
			$(this).find($(".gray")).css("opacity", 0);
			$(this).find($(".content")).animate({
				"height": 100,
				"padding-top": 60
			}, 200)
		}, function() {
			$(".gray").css("opacity", 0.5);
			$(".content").animate({
				"height": 30,
				"padding-top": 85
			}, 200)
		});
		$.each(data.zdwb1, function(i, v) {
			$("<li>").html($("<a>").attr("href", data.zdlj[i]).html($("<div class='title'>").html(v))).appendTo($(".clear")[1]).click(function() {
				alert("网页还在开发中")
			});
			$("<div class='description'>").html(data.zdwb2[i]).appendTo($(".clear>li>a")[i])
		});
		$("<img src='" + data.zhtb + "'>").appendTo($(".description").eq(3));
		$.each(data.zdxx, function(i, v) {
			$(".description").eq(i + 1).after($("<div class='inline-block'>").html(v))
		});
		$(".clear a").hover(function() {
			$(this).css("color", "#fff");
			$(this).find(".inline-block").css({
				"background": "#fff",
				"color": "#000"
			})
		}, function() {
			$(this).css("color", "gray");
			$(this).find(".inline-block").css({
				"background": "#131313",
				"color": "gray"
			})
		});
		$(".customer").hover(function() {
			$(this).css("background-position", "0 0");
			$(".nav-content").show()
		}, function() {
			$(this).css("background-position", "-50px 0");
			$(".nav-content").hide()
		});
		$(".gray-bg").click(function() {
			$(this).hide();
			$(".denglu").hide()
		});
		$(".close").click(function() {
			$(".gray-bg").hide();
			$(".denglu").hide()
		});
		$(".actli").eq(6).click(function() {
			$(".gray-bg").show();
			$(".denglu").show()
		});
		$(".gray-bg").click(function() {
			$(".tyu")[0].pause();
			$(".play-box").hide();
			$(this).hide()
		});
		$(".close").click(function() {
			$(".tyu")[0].pause();
			$(".play-box").hide();
			$(".gray-bg").hide()
		});
		$(".gotop").hover(function() {
			$(this).css("background-position", "0 -60px")
		}, function() {
			$(this).css("background-position", "-50px -60px")
		}).click(function() {
			timer = setInterval(function() {
				var current = parseInt($(document).scrollTop());
				var iSpeed = Math.abs(0 - current) / 5;
				$(document).scrollTop(current - iSpeed);
				if(current == 0) {
					clearInterval(timer);
					return
				}
			}, 30)
		});
	}
});
$(".lll").click(function() {
	if($(":text").val() == "" && $(":password").val() == "") {
		alert("请输入账号和密码")
	} else if($(":text").val() == "") {
		alert("请输入账号")
	} else if($(":password").val() == "") {
		alert("请输入密码")
	} else {
		alert("登录成功")
	}
})
$(".ccc").click(function() {
	if($(":checked").prop("checked")) {
		var txt = $(":text").val();
		var pass = $(":password").val();
		$.cookie("txt", txt);
		$.cookie("pass", pass);
	}
})