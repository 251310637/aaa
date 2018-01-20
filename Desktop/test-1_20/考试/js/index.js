var homepag={
	template:`<div>
		<div>文章列表</div>
		<div>视频列表</div>
	</div>`
}

var news={
	template:`
		<div>
			<div>新闻条目</div>
			<div>新闻条目</div>
			<div>新闻条目</div>
		</div>
	`
}
var video={
	template:`
		<div>
			<div>广告栏</div>
			<div>视频内容</div>
		</div>
	`
}
var routes=[
	{path:"/homes",component:homepag},
	{path:"/newss",component:news},
	{path:"/videos",component:video}
]

var router=new VueRouter({
	routes
})

var vm=new Vue({
	el:"#app",
	router
})











