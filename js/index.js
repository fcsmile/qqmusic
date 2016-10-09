    $(function(){
       var audio=$('audio').get(0);
        var midbtn=$('.mid-btn');
        var zonggong=$('.zonggong');
        var dangqian=$('.dangqian');
        var jindutiao=$('.jindutiao');
        var yinliang=$('.yinliang');
        var yinkuang=$('.yinkuang');
        var yinyuan=$('.yinyuan');
        var yinliangtiao=$('.yinliangtiao');
        var ztop=yinliangtiao.outerHeight()-yinyuan.outerHeight()/2;
        var laba=$('.laba');
        var yuan=$('.yuan');
        var rightbtn=$('.right-btn');
        var leftbtn=$('.left-btn');
        var name=$('.name');
        var img=$('.pic img');
        var paixu=$('.paixu');
        var paixukuang=$('.paixukuang');
        var datu=$('.datu img');
        // var yemian=$('.yemian');
        var gedanlist=$('.gedanlist');
        var gedan=$('.gedan');
        var geshu=$('.geshu');
        var leftzi=$('.leftzi');
        var liebiao=$('.liebiao');
        var rightzi=$('.rightzi');
        var zhuanquan=$('.datu');
        var xihuan=$('.xihuan');
        var suiji=$('.suijizi');
        var shunxu=$('.shunxuzi');
        var danqu=$('.danquzi');
        var xun=$('.liezi');
        var jishou=$('.jishou');
        var zoudong=$('.zoudong');
        var yintiao=$('.yintiao');
        var zhezhao=$('.zhezhao');
        var playpage=$('.playpage');
        var playimg=$('.playpage img');
        var guanbi=$('.guanbi');
        var bofangquanbu=$('.bofangquanbu');
        var geshoumingzi=$('.singerName');
        var zhuanjimingzi=$('.vidioName');
        var gequmingzi=$('.gequmingcheng');
        var index=0;
        var list=$('.list');
        var yemian=$('.yemian');
        var geci=$('.geci');
        var xinshu;
        var music=[
            {name:'北京东路的日子',color:'rgba(94,3,150,0.4)',picuter:'image/huayu.png',geshou:'华语群星',shichang:'04:43',zhuanji:'华语群星',src:'mp3/北京东路的日子.mp3'},
            {name:'放心去飞',color:'rgba(102,159,188,0.4)',picuter:'image/fangxin.png',geshou:'欧豪',shichang:'04:08',zhuanji:'放心去飞',src:'mp3/放心去飞.mp3'},
            {name:'九儿',color:'rgba(239,156,0,0.4)',picuter:'image/jiuer.png',geshou:'韩红',shichang:'02:33',zhuanji:'红高粱',src:'mp3/九儿.mp3'},
            {name:'因为你爱上他',color:'rgba(227,221,221,0.4)',picuter:'image/yinwei.png',geshou:'蒋雪儿',shichang:'05:04',zhuanji:'因为你爱上他',src:'mp3/因为你爱上他.mP3'},
            {name:'祝你一路顺风',color:'rgba(15,106,192,0.4)',picuter:'image/zhuni.png',geshou:'吴奇隆',shichang:'04:17',zhuanji:'追风少年',src:'mp3/祝你一路顺风.mp3'},
            {name:'一壶老酒',color:'rgba(255,255,255,0.4)',picuter:'image/yihu.png',geshou:'陆树铭',shichang:'01:59',zhuanji:'一壶老酒',src:'mp3/一壶老酒.mp3'},
            {name:'朋友别哭',color:'rgba(190,182,172,0.4)',picuter:'image/pengyou.png',geshou:'吕方',shichang:'04:10',zhuanji:'吕方正传',src:'mp3/朋友别哭.mp3'}  ,
        //     {name:'我想有个家',color:'rgba(11,18,0,0.4)',picuter:'image/woxiang.png',geshou:'潘美辰',shichang:'05:15',zhuanji:'是你',src:'mp3/我想有个家.mp3'},
        //     {name:'不再联系',color:'rgba(255,255,255,0.4)',picuter:'image/buzai.png',geshou:'夏天Alex',shichang:'03:25',zhuanji:'破坏定律',src:'mp3/不再联系.mp3'},
        //     {name:'练习',color:'rgba(150,152,155,0.4)',picuter:'image/lianxi.png',geshou:'刘德华',shichang:'04:41',zhuanji:'幻影中国巡回演唱会',src:'mp3/练习.mp3'},
      ];
        geshu.text(music.length);
        img.attr("src",music[0].picuter);
        name.text(music[0].name+' - '+music[0].geshou);
        datu.attr("src",music[0].picuter);
        jishou.text('('+music.length+')');
        playimg.attr("src",music[0].picuter);
        leftzi.text('播放列表(共'+music.length+'首)');
        gequmingzi.eq(0).text(music[index].name);
        geshoumingzi.eq(0).text(music[index].geshou);
        zhuanjimingzi.eq(0).text(music[index].zhuanji);
        ////////////////////////////////页面选项卡////////////////////////////////////
        yemian.each(function (i,v) {
            yemian.css({display:'none'});
            list.css({background:'rgb(255,255,255)',color:'#444'});
        });
        list.eq(0).css({background:'rgb(49,194,124)',color:'#fff'});
        yemian.eq(0).css({display:'block'});
        list.on('click',function(){
            yemian.each(function (i,v) {
                yemian.css({display:'none'});
                list.css({background:'rgb(255,255,255)',color:'#444'});
            });
            // playpage.css({display:'none'});
            $(this).css({background:'rgb(49,194,124)',color:'#fff'});
            console.log($(this).index()-7);
            yemian.eq($(this).index()-7).css({display:'block'});
        });



////////////////////////////点击事件//////////////////////////////////////////

        //右上角关闭按钮
        guanbi.on('click',function(){
            if
            (confirm("您确定要关闭本页吗？")){
                window.opener=null;
                window.open('','_self');
                window.close();
            }
        });
        //页面中播放全部
        bofangquanbu.on('click',function(){
            playing();
        });
        //歌曲播放顺序
        paixu.on('click',function(){
            paixukuang.toggleClass('xianshi');
        });
        //点击小图片弹出歌词页
        zhezhao.on('click',function () {
            playpage.toggleClass('active');
            if(playpage.hasClass('active')){
                zhezhao.addClass('zhezhao1');
            }else{
                zhezhao.removeClass('zhezhao1');
            }
        });
        geci.on('click',function () {
            playpage.toggleClass('active');
            if(playpage.hasClass('active')){
                zhezhao.addClass('zhezhao1');
            }else{
                zhezhao.removeClass('zhezhao1');
            }
        });
        //点击右下歌单弹出框显示与否
        gedan.on('click',function(){
            gedanlist.toggleClass('gedanxianshi');
        });
        //点击音量按钮 弹出框
        yinliang.on('click',function(){
            yinkuang.toggleClass('xian');
        });
        //点击右下歌单弹出框中的清空按钮 清空歌单
        rightzi.on('click',function(){
            lis.empty();
            gelis.empty();
            audio.pause();
            lis.each(function(){
                lis.css('background','rgb(255,255,255)')
            });

        });
        //点击心（喜欢）按钮
        xihuan.on('click',function(){
            xihuan.toggleClass('hongxin');
        });
        //点击任意位置 foot里弹出框复位
        $(document).on('click',function(e){
            var reg=/con/g;
            var aa=$(e.target).attr('class');
            if(reg.test(aa)){
                return
            }
            console.log($(e.target))
            // if($(e.target).attr('class')=='con'){
            //     alert(1)
            //     return
            // }
            if($('.xian').length==0){
                return
            }else{
                yinkuang.removeClass('xian');
            }

            // if($('.gedanxianshi').length==0){
            //     return
            // }else{
            //     gedanlist.removeClass('gedanxianshi');
            // }

                // if($('.xian').length!=0){
                //     yinkuang.css({display:'none'})
                // }
            // if(yinkuang.filter('xian')){
            //     yinkuang.css({display:'none'})
            // }
            // if(gedanlist.hasClass('gedanxianshi')){
            //     gedanlist.removeClass('gedanxianshi');
            // }
            // if(paixukuang.hasClass('xianshi')){
            //     paixukuang.removeClass('xianshi');
            // }
        });
        $(document).on('click',function(e){
            var reg=/con/g;
            var aa=$(e.target).attr('class');
            if(reg.test(aa)){
                return
            }
            if($('.xianshi').length==0){
                return
            }else{
                paixukuang.removeClass('xianshi');
            }
        });
        $(document).on('click',function(e){
            var reg=/con/g;
            var aa=$(e.target).attr('class');
            if(reg.test(aa)){
                return
            }
            if($('.gedanxianshi').length==0){
                return
            }else{
                gedanlist.removeClass('gedanxianshi');
            }
        });
////////////////////////////////播放/////////////////////////////////////////
        var playing=function () {
            name.text(music[index].name+' - '+music[index].geshou);
            img.attr("src",music[index].picuter);
            datu.attr("src",music[index].picuter);
            audio.src=music[index].src;
            playimg.attr("src",music[index].picuter);
            gequmingzi.text(music[index].name);
            geshoumingzi.text(music[index].geshou);
            zhuanjimingzi.text(music[index].zhuanji);
            // playpage.css('background-image',url(music[index].picture));
            lis.each(function(){
                lis.css('color','rgb(68,68,68)')
            });
            lis.eq(index).css('color','rgb(49,195,124)');
            gelis.each(function(){
                gelis.css('color','#919191')
            });
            gelis.eq(index).css('color','rgb(49,195,124)');
            audio.play();
            console.log(audio.src)
        };
        //下一首
        rightbtn.on('click',function(){
            index++;
            // img.src=music[index].picuter;
            if(index==music.length){index=0;}
            playing();
        });
        num=4;
        audio.onended=function () {
            if(num==0){
                suijibofang();
            }
            if(num==1||num==4){
                index+=1;
                audio.src=music[index].src;
                img.attr("src",music[index].picuter);
                datu.attr("src",music[index].picuter);
                name.text(music[index].name+' - '+music[index].geshou);
                gequmingzi.text(music[index].name);
                geshoumingzi.text(music[index].geshou);
                zhuanjimingzi.text(music[index].zhuanji);
                gelis.each(function(){
                    gelis.css('color','#919191')
                });
                lis.each(function(){
                    lis.css('color','rgb(68,68,68)')
                });
                lis.eq(index).css('color','rgb(49,195,124)');
                gelis.eq(index).css('color','rgb(49,195,124)');
                // audio.play();
            }
            if(num==3){
                danqumu();
            }
            audio.play()
        };
        //下一首结束
        //上一首
        leftbtn.on('click',function(){
            index--;
            if(index==-1){index=music.length-1}
            playing();
        });
        //上一首结束

        //开始暂停
        midbtn.on('click',function(){
            if(audio.paused){
                audio.play();
                zhuanquan.addClass('animation');
            }else{
                audio.pause();
                zhuanquan.removeClass('animation');
            }
        });

        dangqian.text('00'+':'+'00');
        audio.oncanplay=function(){
            //总时间开始
            var zong=Math.floor(audio.duration);
            var min=Math.floor(zong/60);
            var sec=zong%60;
            if(sec<10){
                sec='0'+sec;
            }
            if(min<10){
                min='0'+min;
            }
            zonggong.text(min+':'+sec);
            //总时间结束

            // 音量开始
            // audio.onvolumechange=function(){
            //     var y=audio.volume*yinliangtiao.height();
            //     yinyuan.css({top:y});
            // };
            yintiao.css({height:audio.volume*yinliangtiao.outerHeight()});
            laba.on('click',function(){
                if(audio.volume!==0){
                    prev=audio.volume;
                    audio.volume=0;
                    laba.css('background-image','url(image/tanla2.png)');
                    yinliang.css('background-image','url(image/yinliangwu.png)');
                    yinyuan.css({top:ztop});
                }else{
                    audio.volume=prev;
                    yinliang.css('background-image','url(image/yinliang.png)');
                    laba.css('background-image','url(image/tanla.png)');
                    yinyuan.css({top:-yinyuan.outerHeight()/2});
                    yintiao.css({height:yinliangtiao.outerHeight()});
                }
            });
            // 音量结束

            //音量条开始
            yinliangtiao.on('click',function(e){
                // var yx=e.offsetY-yuan.outerHeight()/2;
                var yx= 1-(e.pageY-yinliangtiao.offset().top)/yinliangtiao.height();
                console.log(yinliangtiao.offset().top);
                audio.volume=yx;

            });
            audio.onvolumechange=function(){
                yinyuan.css({top:(1-audio.volume)*yinliangtiao.outerHeight()});
                yintiao.css({height:audio.volume*yinliangtiao.outerHeight()});
            };
            //音量条结束
            //音量拖动
            yinyuan.on('mousedown',function(){
                $(document).on('mousemove',function(e){
                    var v=1-(e.pageY-yinliangtiao.offset().top)/yinliangtiao.height();
                    console.log(v);
                    v=(v>1)?1:v;
                    v=(v<0)?0:v;
                    audio.volume=v
                });
                $(document).on('mouseup',function(){
                    $(document).off('mousemove')
                })
            })
        };
/////////////////////////首页面////////////////////////////////
        //写入歌曲信息
        $(music).each(function(i,v){
            $('<li>').text(music[i].name+' - '+music[i].geshou).appendTo('.gedanlist');
            $('<li><div class="gequming">'+v.name+'</div><div class="ren">'+v.geshou+'</div><div class="zhuanjiming">'+v.zhuanji+'</div><div class="shijianchang">'+v.shichang+'</div></li>').appendTo('.lielist');
        });
        //点击主页面每条歌曲信息播放
        var lis=$('.lielist li');
        lis.eq(0).css('color','rgb(49,195,124)');
        var nowplay;
            lis.on('click',function(){
                nowplay=$(this).index();
                playimg.attr("src",music[nowplay].picuter);
                img.attr("src",music[nowplay].picuter);
                datu.attr("src",music[nowplay].picuter);
                audio.src=music[nowplay].src;
                name.text(music[nowplay].name+' - '+music[nowplay].geshou);
                audio.play();
                lis.each(function(){
                    lis.css('color','rgb(68,68,68)')
                });
                $(this).css('color','rgb(49,195,124)');
                gelis.each(function(){
                    gelis.css('color','#919191')
                });
                gelis.eq($(this).index()).css('color','rgb(49,195,124)');
                zhuanquan.addClass('animation');
            });
        //点击右下歌曲列表
        var gelis=$('.gedanlist li');
        gelis.eq(0).css('color','rgb(49,195,124)');
        gelis.on('click',function(){
            nowplay=$(this).index();
            playimg.attr("src",music[nowplay-1].picuter);
            img.attr("src",music[nowplay-1].picuter);
            datu.attr("src",music[nowplay-1].picuter);
            audio.src=music[nowplay-1].src;
            name.text(music[nowplay-1].name+' - '+music[nowplay-1].geshou);
            audio.play();
            gelis.each(function(){
                gelis.css('color','#919191')
            });
            $(this).css('color','rgb(49,195,124)');
            lis.each(function(){
                lis.css('color','rgb(68,68,68)')
            });
            lis.eq($(this).index()-1).css('color','rgb(49,195,124)');
            zhuanquan.addClass('animation');
        });
        //播放暂停按钮图片切换
        audio.onplay=function(){
            midbtn.css("background-image","url(image/mid-btn-play.png)");
        };
        audio.onpause=function(){
            midbtn.css("background-image","url(image/mid-btn-pause.png)");
        };
/////////////////////////////////播放进行中///////////////////////////////
        audio.ontimeupdate=function(){
    //当前时间进度开始
            var dangtime=Math.floor(audio.currentTime);
            var minute=Math.floor(dangtime/60);
            var second=dangtime%60;
            if(second<10){
                second='0'+second;
            }
            if(minute<10){
                minute='0'+minute;
            }
            dangqian.text(minute+':'+second);
    //当前时间进度结束
            //点击进度条到对应位置
            jindutiao.on('click',function(e){
                var yuanx=e.offsetX-yuan.outerWidth()/2;
                // yuan.css({left:yuanx});
                audio.currentTime=yuanx/(jindutiao.outerWidth()-yuan.outerWidth()/2)*audio.duration;
                audio.play();
            });

            //自动播放进度条
            var left=audio.currentTime/audio.duration*jindutiao.outerWidth()-yuan.outerWidth()/2;
            yuan.css({left:left});
            zoudong.css({width:left+yuan.outerWidth()/2});
            //自动播放进度条开始结束


            //拖动进度条
            $(yuan).on('mousedown',false);
            $(document).on('mousedown',false);
            // $(document).on('mousemove',false);
            yuan.on('mousedown',function(){
                var hw=jindutiao.offset().left;
                $(document).on('mousemove',function(e){
                    var xw=e.clientX;
                    dw=xw-hw-(yuan.outerWidth()/2);
                    if(dw>=jindutiao.outerWidth()){dw=jindutiao.outerWidth()}
                    if(dw<=0){dw=0}
                    audio.pause();
                    audio.currentTime=audio.duration*(dw/jindutiao.outerWidth());
                    $(document).on('mouseup',function(){
                        audio.play()
                        $(document).off('mousemove');
                        $(document).off('mouseup')
                    })
                });

            })
        };
//////////////////////////////////播放顺序////////////////////////////
    var num;
    var shuzi;
    function suijibofang(){
        // num=1;
         shuzi=Math.floor(Math.random()*6);
        audio.src=music[shuzi].src;
        // yemian.css('background',music[shuzi].color);
        img.attr("src",music[shuzi].picuter);
        datu.attr("src",music[shuzi].picuter);
        name.text(music[shuzi].name+' - '+music[shuzi].geshou);
        gequmingzi.text(music[shuzi].name);
        geshoumingzi.text(music[shuzi].geshou);
        zhuanjimingzi.text(music[shuzi].zhuanji);
        gelis.each(function(){
            gelis.css('color','#919191')
        });
        lis.each(function(){
            lis.css('color','rgb(68,68,68)')
        });
        lis.eq(shuzi).css('color','rgb(49,195,124)');
        gelis.eq(shuzi).css('color','rgb(49,195,124)');
        audio.play();

    }
    function danqumu(){
        var xindanqu=audio.src;
        audio.src=xindanqu;
    }
        suiji.on('click',function(){
            paixu.css("background","url(image/suiji2.png) no-repeat");
            paixukuang.removeClass('xianshi');
            num=0;
        });
        shunxu.on('click',function(){
            paixu.css("background","url(image/shunxu2.png) no-repeat");
            paixukuang.removeClass('xianshi');
            num=1;
        });
        danqu.on('click',function(){
            paixu.css("background","url(image/danqu2.png) no-repeat");
            paixukuang.removeClass('xianshi');
            num=3;
        });
        xun.on('click',function(){
            paixu.css("background","url(image/lie2.png) no-repeat");
            paixukuang.removeClass('xianshi');
            num=4;
        });

    });