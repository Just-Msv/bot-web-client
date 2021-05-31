
		var token = prompt("please put the Bot Token, Please put the real token or it willnt work");
		if(!token) {alert("This client wouldnt start with out your bot token! refresh this page to try again")};
		const client = new Discord.Client();

		client.on('ready', () => {
			const today = new Date(), date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
			var format = `(${date}) ${color("[CLIENT READY!] ", "#00ff00")} The client (<b>${client.user.tag}</b>) is now ready. Chat in your server discord (with your bot in it) and your bot will fetch it xD`;
			texting(format);
		});
		client.on('message', msg =>{
			if(msg.content == token) msg.delete();
			if(msg.author.bot && msg.author.id !== client.user.id) return ;
			const guildTag = msg.channel.type === 'text' ? color(`${msg.guild.name}`, "lightgreen") : color("Discord", "red");

			const channelTag = msg.channel.type === 'text' ? 
			color(`${msg.channel.name}`, "orange"): color("Direct Message", "purple");var attach = "";

			if(msg.attachments.size){
				for(var i = 0; i<msg.attachments.size; i++){
				attach += `<img class="attach" src="${msg.attachments.array()[i].url}"/>`
					}
			}
			/*if(msg.content.match(/@\d+>/gi)){
				for(var i = 0; i+1<msg.content.match(/@\d+>/gi);i++){
					x =
				}
			}*/

			const today = new Date(), date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();

			texting(`<img class="profile" src="${msg.author.avatarURL}"/> (${color(date, "white")}) <span class="clicky" title="Delete The Message" onclick="del('${msg.channel.id}', '${msg.id}');this.parentElement.style.display = 'none';">${color("[MESSAGE]", "lightblue")}</span> &nbsp;<span class="clicky" title="Send a message to this channel" onclick="gm('${msg.channel.id}')">[${guildTag}/${channelTag}</span>] &nbsp;|| &nbsp;<span title="Send a message to this User" class="clicky" onclick="dm('${msg.author.id}')">${color(msg.channel.type === "text" ? color(msg.member.displayName, msg.member.displayHexColor) : msg.author.tag, "#ffffff")}</span> &nbsp;>>&nbsp; ${color(msg.content.split("\n").join("<br/>"), "#aaaaaa")} ${attach}`, msg.content, msg)
			
			const evp = "!>eval"
			if(msg.content.indexOf(evp) !== 0) return;
			const args = msg.content.substring().trim().split(" ");
			const arg = msg.content.slice(evp.length).trim();
			try{
			  let ev = arg,
			  cond = ev.toLowerCase().includes("token") || ev.includes("dG9rZW4="),conda,output;
			  if(!cond){
			    output = eval(ev);
			    conda = output.includes(token);
			  }
			  if(cond||conda) msg.channel.send("Nope")
			  else msg.channel.send(output)
			}catch(e){
			  msg.channel.send(e.message)
			}
		});
		client.on('messageDelete', msg =>{
			const today = new Date(), date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
			var attach = "";

			if(msg.attachments.size){
				for(var i = 0; i<msg.attachments.size; i++){
				attach += `<img class="attach" src="${msg.attachments.array()[i].url}">`
					}
			}

			var format = `(${date}) ${color("[MESSAGE DELETED!]", "red")}  <b>"${msg.member.displayName}"</b>'s message deleted in [${color(msg.guild.name, "lightgreen")+"/"+color(msg.channel.name, "orange")}] with content&nbsp; >> ${color(msg.content.split("\n").join("<br/>"), "#aaaaaa")} ${attach}`;
			texting(format);
		});
		client.on("guildMemberUpdate", (o, n) =>{
			const today = new Date(), date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
			var format = `(${date}) ${color("[MEMBER UPDATED!] ", "red")} <b>"${color(o.displayName, o.displayHexColor)}"</b>'s nickname are now changed to &nbsp;<b> "${color(n.displayName, n.displayHexColor)}"</b>&nbsp;in [${color(n.guild.name, "lightgreen")}]`;
			texting(format);
		});
		client.on("error", err =>{
			const today = new Date(), date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
			var format = `(${date}) ${color("[ERROR!] ", "orange")} An error occured with output >> ${color(err.message, "#aaaaaa")}`;
			texting(format);

		});
		client.on("disconnect", err =>{
			const today = new Date(), date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
			var format = `(${date}) ${color("[DISCONNECT!] ", "orange")} Disconnected from Server. >> ${color(err.code, "#aaaaaa")} - ${color(err.reason, "#aaaaaa")}`;
			texting(format);

		});

		function commandeval(c){
			try{
			alert("! successfully runned with output!\n"+eval(c))
		}catch(err){
			alert("X ERROR! Output :\n"+err.message);
		}
		}
		function del(c, id){
			if(confirm("Are you sure to delete this message?")){
			client.channels.get(c).fetchMessage(id).then(msg=>{msg.react('🗑️');msg.delete(1000)}).catch(console.log("ERROR!"));}
		};
		function dm(a){
			var b = prompt("Put a message to send it to a user");
			if(!b) return alert("your message wasnt send because its blank");
			client.users.get(a).send(b);
		}
		function gm(b){
			var c = prompt("Put a message to send it to channel");
			if(!c) return alert("your message wasnt send because its blank");
				client.channels.get(b).send(c);
		}
		client.login(token)
