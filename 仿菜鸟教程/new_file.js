new Vue({
	el: '#app',
	data: {
     
	},
	components: {
		'todo': {
		template: ` <div class="col-md-4 col-xs-6">
							      <a href="index2.html">
								      <div class="text">
									      <p>学习HTML/CSS</p>
									      <span>HTML，即超文本标记语言（Hyper Text Markup Language）</span>
								      </div>
							      </a>
						      </div> `
		},
	}
})


tjwz(req,res,loginbean){
		var quetion = new Quetion({});
		quetion.title=req.body['title'];
		quetion.author=req.body['author'];
		quetion.author= loginbean.nicheng;
		quetion.cover=req.body['cover'];
		quetion.publishtime=req.body['publishtime'];
		quetion.content=req.body['content'];
		console.log(loginbean,quetion)
		quetion.save(function(err){
			if(err){
				console.log(err.message)
				return
			}
		})
		// res.redirect(307,'/users')
	}