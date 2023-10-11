const { AsyncResource } = require("async_hooks");
let http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    switch (req.url) {
      case "/about":
        res.end(
          "Hello there! I'm a multifaceted individual with a passion for diverse interests. By day, I'm a math enthusiast and a dedicated programmer, constantly seeking the elegant solutions to complex problems in the world of algorithms and code. I find the beauty in the precision and creativity of mathematics and programming.Outside the digital realm, you'll often find me in the real world, pushing my limits in the weightlifting arena. I'm a firm believer in the power of discipline and hard work, both in the gym and in life. The challenges of lifting weights resonate with me, reflecting the determination I bring to every aspect of my life. When I'm not immersed in numbers or pushing my physical boundaries, I'm a gamer at heart. I have a deep love for gaming, whether it's delving into epic adventures in the virtual realm or competing in the digital battlegrounds. It's a realm of relaxation and entertainment that complements my analytical and physical pursuits. In essence, I'm a well-rounded individual who thrives on the balance of mind and body, where gaming, weightlifting, mathematics, and programming come together to define my unique identity."
        );
        break;
      default:
        res.end(
          "Hello! This is the homepage of Suncerie's week 2 assignment 1."
        );
    }
  })
  .listen(3000);
