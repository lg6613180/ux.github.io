<!doctype html>
<head>
<meta charset="utf-8">
</head>
<body>
<script>
var xhr = new XMLHttpRequest()
xhr.open('GET','https://lg6613180.github.io/mywork/mock/cate.json',true)     //这里请求的地址不是'/cate.json'了，
//因为github对这个数据生成的URL是https://liuwanyong2017.github.io/mocklianxi/mock.html，
//cate.json文件是同级文件所以去掉域名"https://liuwanyong2017.github.io",
//把mocklianxi/mock.html中的mock.html换成cate.json就行了。
xhr.send()
xhr.onload = function(){
    console.log(JSON.parse(xhr.responseText))
}
</script>
</body>
</html>