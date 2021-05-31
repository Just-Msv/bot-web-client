
		texting("Wait Till the client ready")
		var a = 0;

		function texting(input, content, msg){
			a++;
			document.getElementById('a').outerHTML += `<span class="msg-line"><span class="hover-line"></span>${input}</span><br/>`;
		}
        function color(s, c) {
            var res = '<font style="color:'+c+'">' + s + '</font>';
            return res;
        }
        function evalrun(code){
        	commandeval(document.getElementById(code).value);
        }
		function Test(g, o){
			document.getElementById(o).value = g;
		}
		if(!token){
			const today = new Date(), date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
			var format = `(${date}) <font color="orange">[ERROR]</font> An error occured with output >> <font color="#aaa">PUT THE BOT TOKEN!!! Dont worry this HTML wont steal your bot TOKEN</font>`;
			texting(format);};
