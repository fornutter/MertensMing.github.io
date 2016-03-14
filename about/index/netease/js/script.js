/* 
* @Author: Mertens
* @Date:   2015-11-20 19:18:43
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-06 15:13:39
*/

// 兼容版 children
  function getElemChildren(element){
    if(!element.children){
      var results = [];
      var nodeList = element.chilf-dnodes;
      for(var i=0;i<nodelist.length;i++){ if(nodelist[i].nodetype="=1){" results.push(nodelist[i]);="" }="" return="" results;="" else{="" element.children;="" 兼容版="" getelementsbyclassname="" function="" getelementsbyclassname(root,="" names){="" if(root.getelementsbyclassname(names)){="" root.getelementsbyclassname(names);="" 浏览器兼容="" var="" classnames="names.split(/\s+/)," arr="[];" nodes="root.getElementsByTagName("*");" 获取所有后代节点="" for(var="" i="0,len" =="" nodes.length="" ;="" <="" len="" i++){="" 遍历所有后代节点，检测它们是否包含传入的类名="" if(="" hasclass(nodes[i],classnames)="" ){="" arr.push(nodes[i]);="" arr;="" hasclass(node,classnames){="" classnames.length;="" if(node.classname.indexof(classnames[i])="==" -1){="" false;="" true;="" ajax请求get方法的封装="" get(url,callback,options){="" xhr="window.XMLHttpRequest" ?="" new="" xmlhttprequest()="" :="" activexobject("microsoft.xmlhttp");="" xhr.onreadystatechange="function(){" if(xhr.readystate="=" 4){="" if((xhr.status="">=200 && xhr.status <300) ||="" xhr.status="=304){" callback(xhr.responsetext);="" }else{="" alert("请求错误："+xhr.status+"="" "+xhr.statustext);="" }="" xhr.open("get",url+"?"+serialize(options),true);="" xhr.send(null);="" function="" serialize(data){="" if(!data){="" return="" '';="" var="" pairs="[];" for(var="" name="" in="" data){="" if(!data.hasownproperty(name)){="" continue;="" if(typeof="" data[name]="=="function"){" value="data[name].toString();" pairs.push(name+'="+value);
          }
          return pairs.join(" &');="" 设置cookie="" setcookie(name,value,expires,path,domain,secure){="" cookie="encodeURIComponent(name)" +="" "=" + encodeURIComponent(value);
  	if(expires) 
  		cookie += " ;="" expires=" + expires.toGMTString();
  	if(path)
  		cookie += " path=" + path;
  	if(domain)
  		cookie += " domain=" + domain;
  	if(secure)
  		cookie += " secure=" + secure;
  	document.cookie = cookie;
  }

// 获取cookie
  function getCookie(){
    var cookie = {};
    var all = document.cookie;
    if(all === " "){="" cookie;="" list="all.split(";");" i="0;" i<list.length="" i++){="" item="list[i];" p="item.indexOf("=");" cookie[name]="value;" 跨浏览器事件对象="" evenutil="{" 跨浏览器添加事件处理程序="" addhandler:function(element,type,handler){="" if(element.addeventlistener){="" element.addeventlistener(type,handler,false);="" }else="" if(element.attachevent){="" element.attachevent("on"+type,handler);="" element["on"+type]="null;" },="" 跨浏览器移除事件处理程序="" removehandler:function(element,type,handler){="" if(element.removeeventlistener){="" element.removeeventlistener(type,handler,false);="" if(element.detachevent){="" element.detachevent("on"+type,handler);="" };="" *创建一个对象储存变量="" *="" m="{};" *关闭顶部通知条*="" m.headtop="document.getElementById("head-top");" m.noremind="m.headTop.getElementsByTagName("div")[1];" 点击关闭小黄条="" evenutil.addhandler(m.noremind,"click",function(){="" m.headtop.classname="f-dn" setcookie("tip","hidden");="" });="" 设置关闭后刷新不再显示="" evenutil.addhandler(window,"load",function(){="" cookies="getCookie();" tip="cookies.tip;" if(tip="=" "hidden"){="" *关注按钮和登录框*="" m.head="document.getElementById("head");" 取消关注区域="" m.cblock="getElementsByClassName(m.head,"m-cancel")[0];" 关注区域="" m.followblock="getElementsByClassName(m.head,"m-follow")[0];" 取消关注按钮="" m.cancelbtn="m.cBlock.getElementsByTagName("a")[0];" 关注按钮="" m.followbtn="getElementsByClassName(m.followBlock,"u-btn" ")[0];="" (function(){="" m.loginform="document.forms.loginForm;" loginblock="getElementsByClassName(document,"m-login")[0];" 刷新页面显示登录状态="" followsuc="cookies.followSuc;" if(followsuc="=" "true"){="" m.followblock.style.display="none" m.cblock.style.display="inline-block" 点击取消关注按钮="" evenutil.addhandler(m.cancelbtn,"click",function(){="" setcookie("followsuc","false",0);="" 点击关注按钮="" evenutil.addhandler(m.followbtn,"click",function(){="" loginsuc="cookies.loginSuc;" 判断登录的="" 是否已设置（="" loginsuc）="" if(loginsuc="" !="true" ){="" 如果未设置登录="" cookie，则弹出登录框="" loginblock.style.display="block" else="" 调用关注="" api="" get("http:="" study.163.com="" webdev="" attention.htm",function(text){="" if(text="=" 1){="" 设置关注成功的="" cookie（="" followsuc）="" setcookie("followsuc","true");="" 登录后“关注”按钮变成不可点的“已关注”状态="" 输入用户名、密码="" unlabel="getElementsByClassName(m.loginForm,"u-tip0")[0];" psdlabel="getElementsByClassName(m.loginForm,"u-tip1")[0];" evenutil.addhandler(m.loginform.username,"focus",function(){="" unlabel.style.display="none" evenutil.addhandler(m.loginform.password,"focus",function(){="" psdlabel.style.display="none" evenutil.addhandler(m.loginform.username,"blur",function(){="" if(m.loginform.username.value.length="=" 0)="" evenutil.addhandler(m.loginform.password,"blur",function(){="" if(m.loginform.password.value.length="=" 点击按钮关闭登陆框="" lgnclosebtn="getElementsByClassName(loginBlock,"u-close-btn")[0];" evenutil.addhandler(lgnclosebtn,"click",function(){="" 为登录表单的="" submit事件="" 添加事件处理程序="" evenutil.addhandler(m.loginform,"submit",function(event){="" username="m.loginForm.userName;" password="m.loginForm.password;" 使用md5加密数据="" account="hex_md5(userName.value);" pswd="hex_md5(password.value);" 使用="" ajax="" 登录="" login.htm",function(status){="" if="" (status="=1){" 成功后设置登录="" setcookie("loginsuc","true");="" alert("输入的用户名或密码错误！");="" },{username:account,password:pswd});="" m.loginform.reset();="" })();="" *轮播图*="" m.banfix="document.getElementById("ban-fix");" m.banimg="m.banFix.getElementsByTagName("img")[0];" m.bcontainer="getElementsByClassName(m.banFix,"u-btn")[0];" m.buttons="m.banFix.getElementsByTagName("span");" m.banlink="m.banFix.getElementsByTagName("a")[0];" 设置轮播图内容居中="" (function="" (){="" setbancenter="function(){" gap="1652" -="" document.body.clientwidth;="" mwidth="document.body.clientWidth;" buttonsleft="(document.body.clientWidth" 52)="" 2;="" m.banfix.style.width="mWidth+"px";" m.banimg.style.marginleft="-" +gap="" 2+"px";="" m.bcontainer.style.left="buttonsLeft+"px";" evenutil.addhandler(window,"resize",setbancenter);="" evenutil.addhandler(window,"load",setbancenter);="" 设置图片轮播="" msrc="["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"];" mhref="["http://open.163.com/","http://study.163.com/","http://www.icourse163.org/"];" index="1;" 淡出显示="" show="function(){" steplength="1" 100;="" offset="0;" step="function(){" tmpoffset="offset" steplength;="" (tmpoffset="" <="" 1)="" {="" m.banimg.style.opacity="0" tmpoffset;="" clearinterval(intervalid);="" intervalid="setInterval(step,5);" 按钮切换="" m.buttons.length;="" m.buttons[i].onclick="(function(j){" function(){="" m.banimg.src="mSrc[j];" m.banlink.href="mHref[j];" m.buttons[i].classname="" m.buttons[j].classname="active" if(index="=3)index=0;" show();="" })(i);="" 定时切换="" toswitch="function(){" m.buttons[index].classname="active" 3){="" 鼠标悬停，暂停切换="" evenutil.addhandler(m.banfix,"mouseover",function(){="" 鼠标离开，继续切换="" evenutil.addhandler(m.banfix,"mouseout",function(){="" *tab区域*="" m.course="document.getElementById("course").getElementsByTagName("ul")[0];" m.courselist="m.course.getElementsByTagName("li");" couresbycategory.htm",appenditem,{pageno:1,psize:20,type:10});="" })="" 填充课程列表="" appenditem(data){="" datacopy="JSON.parse(data);" 在重新填充课程列表的时候，清除之前的事件="" i<m.courselist.length-1;="" m.courselist[i].getelementsbytagname("img")[0].onmouseover="null;" 设置每个课程的自定义属性和信息="" mydata="dataCopy.list[i];" item.getelementsbytagname("img")[0].setattribute("src",mydata["middlephotourl"]);="" item.getelementsbytagname("a")[1].innerhtml="myData["name"];" getelementsbyclassname(item,"u-pder")[0].innerhtml="myData["provider"];" item.getelementsbytagname("span")[0].innerhtml="myData["learnerCount"];" itemprice="myData["price"];" if(itemprice="=" 0){="" getelementsbyclassname(item,"u-price")[0].style.color="#999" getelementsbyclassname(item,"u-price")[0].style.fontweight="bold" +itemprice;="" getelementsbyclassname(item,"u-price")[0].innerhtml="itemPrice;" hover="" 到图片上，去添加出现详细信息的效果="" itemdetail="m.courseList[m.courseList.length-1];" itemdetail.getelementsbytagname("img")[0].setattribute("src",mydata["middlephotourl"]);="" itemdetail.getelementsbytagname("h3")[0].innerhtml="myData["name"];" itemdetail.getelementsbytagname("span")[0].innerhtml="myData["learnerCount"]+"" 人在学";="" getelementsbyclassname(itemdetail,"u-pder")[0].innerhtml="发布者：" mydata["provider"];="" getelementsbyclassname(itemdetail,"u-ctn")[0].innerhtml="分类：" (mydata["categoryname"]="=" "null"="" ?="" mydata["categoryname"]="" :="" ""="" );="" description="myData["description"];""" if(description.length=""> 60){
                  description = description.substring(0,60) + " ……";
                }
                itemDetail.getElementsByTagName("p")[0].innerHTML = description;
                var index = i,
                    row = Math.floor(index/4),
                    col = index%4;
                itemDetail.style.top = (-8+(row*249))+"px";
                itemDetail.style.left = (-10+(col*246))+"px";
                itemDetail.style.display = "block";
              }
            })(i);
        }
      })();
      
      // hover 到非图片区域，阴影加重
      (function(){
        for(var i = 0; i</300)></nodelist.length;i++){>