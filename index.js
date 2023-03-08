const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const response = {
    data: [
      'Celine Dion;My heart will go on;210;https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/78/34/f8/7834f882-eb93-1c78-7e98-c86643b5094b/886447917251.jpg/600x600bb.jpg',
      'Celine Dion;The power of live;312;https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ef/14/69/ef146934-5fe5-432c-ca10-2f7d390502ca/mzm.uzdbriyy.jpg/600x600bb.jpg',
      'Celine Dion;The prayer;293;https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/a1/19/40/a11940e9-2bf4-7d56-df1d-47fe7c736d7e/886448694656.jpg/600x600bb.jpg',
      'Bruno Mars;Talking to the moon;225;https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/52/b1/45/52b1452b-229e-78db-231b-7b43fa0077cc/075679956491.jpg/600x600bb.jpg',
      'Bruno Mars;Just the way you are;260;https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/52/b1/45/52b1452b-229e-78db-231b-7b43fa0077cc/075679956491.jpg/600x600bb.jpg',
      'Maroon 5;Payphone;225;https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/1b/5b/95/1b5b95d1-b7f2-f2e9-acb2-22f558017056/12UMGIM26178.rgb.jpg/600x600bb.jpg',
      'Maroon 5;One more night;260;https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/1b/5b/95/1b5b95d1-b7f2-f2e9-acb2-22f558017056/12UMGIM26178.rgb.jpg/600x600bb.jpg',
      'Maroon 5;This Love;333;https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d0/3e/25/d03e255d-e205-0e66-20f6-01e251896c25/14UMGIM27076.rgb.jpg/600x600bb.jpg',
      'Maroon 5;Sugar;211;https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/0d/f0/8b/0df08b64-3743-4ae0-f3cc-1314716d841d/14UMGIM31675.rgb.jpg/600x600bb.jpg',
      'Akon;Right now;216;https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/d7/c3/9e/d7c39e5c-1284-8c22-8ea5-ca259bcfc525/08UMGIM26305.rgb.jpg/600x600bb.jpg',
    ],
    message: 'Success'
  }
  res.write(JSON.stringify(response));
  res.end();
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});