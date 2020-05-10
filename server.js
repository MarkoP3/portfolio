var express=require('express');
var app=express();
var server=app.listen(process.env.PORT || 8080);
app.use('/public', express.static('public'));
app.get('/',function (zahtev,odgovor)
	{
		odgovor.sendFile(__dirname+'/index.html');
	});