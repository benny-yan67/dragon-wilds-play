export const createNativeArt=function createNativeArt(E){
  const css=n=>{n=n>>>0;return '#'+(n&0xffffff).toString(16).padStart(6,'0')+(n>>>24).toString(16).padStart(2,'0');};
  const Color={WHITE:0xffffffff,rgb:(r,g,b)=>(0xff000000|(Math.floor(r)<<16)|(Math.floor(g)<<8)|Math.floor(b))>>>0,red:n=>(n>>>16)&255,green:n=>(n>>>8)&255,blue:n=>n&255};
  const WildsProfile={element:E.element,rarity:E.rarity,family:E.family,LORD_ID:144,COLORS:[0xffffaa68,0xff8ce5a4,0xff8bdffc,0xffb7ffe4,0xffffd778,0xffc4a4ff]},SovereignRules={DRAGONS:E.rulerIds},Shader={TileMode:{CLAMP:0}};
  class Paint {static Style={FILL:0,STROKE:1};constructor(){this.color=0xffffffff;this.style=0;this.width=1;this.shader=null;this.filter=null;}setColor(v){this.color=v;}setStyle(v){this.style=v;}setStrokeWidth(v){this.width=v;}setShader(v){this.shader=v;}setColorFilter(v){this.filter=v;}}
  class Path {constructor(){this.reset();}reset(){this.value=new Path2D();}moveTo(x,y){this.value.moveTo(x,y);}lineTo(x,y){this.value.lineTo(x,y);}cubicTo(a,b,c,d,e,f){this.value.bezierCurveTo(a,b,c,d,e,f);}quadTo(a,b,c,d){this.value.quadraticCurveTo(a,b,c,d);}close(){this.value.closePath();}}
  class LinearGradient {constructor(x,y,x2,y2,a,b){Object.assign(this,{x,y,x2,y2,a,b});}get(c,convert=css){const g=c.createLinearGradient(this.x,this.y,this.x2,this.y2);g.addColorStop(0,convert(this.a));g.addColorStop(1,convert(this.b));return g;}}
  class RadialGradient {constructor(x,y,r,colors){Object.assign(this,{x,y,r,colors});}get(c,convert=css){const g=c.createRadialGradient(this.x,this.y,0,this.x,this.y,this.r);this.colors.forEach((n,i)=>g.addColorStop(i/(this.colors.length-1),convert(n)));return g;}}
  class Canvas {constructor(ctx){this.ctx=ctx;this.tint=null;this.stack=[];}save(){this.ctx.save();this.stack.push(this.tint);}restore(){this.ctx.restore();this.tint=this.stack.pop()??null;}translate(x,y){this.ctx.translate(x,y);}scale(x,y){this.ctx.scale(x,y);}saveLayer(l,t,r,b,paint){this.save();this.tint=paint.filter;}apply(p){const c=this.ctx,convert=n=>{if(!this.tint)return css(n);const r=(n>>>16)&255,g=(n>>>8)&255,b=n&255,light=this.tint===.55?r*.15+g*.28+b*.07:r*.09+g*.17+b*.04;return css(((n>>>24)<<24)|(Math.min(255,Math.round(light+5))<<16)|(Math.min(255,Math.round(light+(this.tint===.55?7:5)))<<8)|Math.min(255,Math.round(light+10)));};c.fillStyle=c.strokeStyle=p.shader?p.shader.get(c,convert):convert(p.color);c.lineWidth=p.width;c.lineJoin='round';c.lineCap='round';}drawPath(path,p){this.apply(p);p.style?this.ctx.stroke(path.value):this.ctx.fill(path.value);}drawOval(l,t,r,b,p){if(r<=l||b<=t)return;this.apply(p);const c=this.ctx;c.beginPath();c.ellipse((l+r)/2,(t+b)/2,(r-l)/2,(b-t)/2,0,0,Math.PI*2);p.style?c.stroke():c.fill();}drawCircle(x,y,r,p){this.drawOval(x-r,y-r,x+r,y+r,p);}drawRect(l,t,r,b,p){this.apply(p);p.style?this.ctx.strokeRect(l,t,r-l,b-t):this.ctx.fillRect(l,t,r-l,b-t);}drawRoundRect(l,t,r,b,rx,ry,p){this.apply(p);const c=this.ctx;c.beginPath();c.roundRect(l,t,r-l,b-t,Math.max(0,Math.min(rx,Math.abs(r-l)/2,Math.abs(b-t)/2)));p.style?c.stroke():c.fill();}drawLine(x,y,x2,y2,p){this.apply(p);const c=this.ctx;c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.stroke();}drawArc(l,t,r,b,start,sweep,center,p){this.apply(p);const c=this.ctx;c.beginPath();c.ellipse((l+r)/2,(t+b)/2,(r-l)/2,(b-t)/2,0,start*Math.PI/180,(start+sweep)*Math.PI/180);p.style?c.stroke():c.fill();}}
  const p=new Paint(),path=new Path(),hostileTint=new Paint(),DARK_DRAGON=.55,BLACK_DRAGON=.36;
      function companion(c,id,evolution,clock,moving){
        if(id==WildsProfile.LORD_ID){companion(c,143,evolution,clock,moving);c.save();c.scale(1+evolution*.16,1+evolution*.16);for(const side of [-1,1]){tri(c,side*47,-48,side*111,-100,side*78,-29,0xff7771b4);line(c,side*48,-47,side*109,-97,0xffe3cfff,1.6);tri(c,side*18,-77,side*39,-120,side*28,-69,0xffdfc69e);}tri(c,-12,-89,0,-122,12,-89,0xffffd58d);line(c,-15,-88,15,-88,0xffffedc1,3);c.restore();return;}
        let element=WildsProfile.element(id),tier=WildsProfile.rarity(id),family=WildsProfile.family(id),base=WildsProfile.COLORS[element];
        if(family>0)base=mix(base,[0,0xffd5f6ff,0xff394f67,0xff365279,0xfffff2cf,0xff5e3c52,0xffb9afff,0xff758b98][family],[0,.19,.25,.18,.23,.18,.25,.25][family]);
        let flap=Math.sin(clock*(moving?10:2.8))*6,bob=Math.sin(clock*3)*1.7;
        c.save();c.scale((1+evolution*.16)*[1,.88,1.1,.85,.97,1.08,.94,1.14][family],(1+evolution*.16)*[1,1.02,.95,1.08,1,1.02,1.02,.98][family]);oval(c,-18,-3,61,17,0x28041325);oval(c,-32,-7,34,7,0x55041325);c.translate(0,bob);
        if(family==6){p.setShader(null);p.setColor(0x8889eaff);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(1.3);c.drawOval(-60,-102,60,-18,p);c.drawOval(-51,-115,51,-6,p);p.setStyle(Paint.Style.FILL);}
        if(family==7)for(let i=0;i<4;i++)tri(c,16+i*8,-20,24+i*8,-57+i*2,35+i*8,-18,0xffa6b5b6);
        if(family==3){path.reset();path.moveTo(16,-19);path.cubicTo(94,24,101,-42,63,-31);path.cubicTo(42,-24,78,-14,83,-39);p.setShader(null);p.setColor(base);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(11);c.drawPath(path,p);p.setStyle(Paint.Style.FILL);tri(c,80,-35,93,-57,73,-45,0xffd9e7d1);}
        if(family==5)for(let i=0;i<4;i++)tri(c,18+i*8,-25-i*2,26+i*8,-53+i*2,32+i*8,-20-i*2,0xffdacfae);
        // Articulated tail with a luminous elemental tip.
        path.reset();path.moveTo(12,-21);path.cubicTo(50,-8,62,-32,49,-47+flap);path.cubicTo(85,-17,49,16,6,-4);path.close();fill(c,0xff254859);
        tri(c,49,-43+flap,64,-58+flap,62,-35+flap,base);
        // Layered wing membranes, ribs and metallic leading edges.
        for(const side of [-1,1]){c.save();c.scale(side,1);path.reset();path.moveTo(10,-35);path.cubicTo(25,-69,51,-65+flap,67,-78+flap);path.quadTo(61,-55+flap,59,-38+flap);path.quadTo(47,-51,39,-22);path.quadTo(27,-40,14,-19);path.close();gradient(c,mix(base,Color.WHITE,.18),mix(base,0xff142942,.62),-70,-14);c.drawPath(path,p);p.setShader(null);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(1.2);p.setColor(0xff294653);c.drawPath(path,p);p.setStyle(Paint.Style.FILL);
            line(c,12,-33,66,-76+flap,0xffdcf6ec,1.6);line(c,14,-32,57,-40+flap,base,1);line(c,14,-32,38,-24,base,1);tri(c,64,-77+flap,70,-87+flap,69,-69+flap,0xfff4e5b9);c.restore();}
        for(const side of [-1,1]){c.save();c.scale(side,1);
            if(family==1){tri(c,18,-39,88,-84+flap,65,-42+flap,base);line(c,21,-39,86,-81+flap,0xffedfdf7,1.5);tri(c,43,-42,75,-37+flap,47,-30,0xffd2ece6);}
            if(family==2){for(let i=0;i<3;i++){tri(c,20+i*10,-39-i*8,34+i*10,-62-i*7,40+i*9,-32-i*8,0xff92a4a2);line(c,24+i*10,-41-i*8,34+i*10,-58-i*7,0xffdbe2cf,1);}}
            if(family==4)for(let i=0;i<5;i++){path.reset();path.moveTo(15,-30);path.quadTo(51+i*8,-77+flap,81-i*4,-43+i*7+flap);path.quadTo(51,-44+i*3,15,-24);path.close();fill(c,i%2==0?0xffedf4df:base);line(c,22,-30,76-i*4,-43+i*7+flap,0x888ba9b5,.8);}
            if(family==5){tri(c,20,-35,76,-81+flap,62,-22,base);for(let i=0;i<3;i++)tri(c,50+i*7,-44-i*7,67+i*6,-56-i*6,60+i*6,-35-i*7,0xffc3bda5);}
            if(family==6){for(let i=0;i<5;i++){let xx=27+i*8,yy=-41-i*4+flap*.5;oval(c,xx-1,yy-1,xx+1,yy+1,0xffe4faff);if(i>0)line(c,xx-8,yy+4,xx,yy,0x7797dfff,.7);}tri(c,46,-61+flap,50,-71+flap,54,-61+flap,0xffdeefff);tri(c,46,-61+flap,54,-61+flap,50,-54+flap,0xffc6b2ff);}
            if(family==7){for(let i=0;i<3;i++){tri(c,19+i*11,-36-i*5,30+i*12,-68-i*4,40+i*9,-27-i*6,0xff82999b);line(c,24+i*11,-38-i*5,30+i*12,-63-i*4,0xffe1e2cb,1.5);}}
            c.restore();}
        // Iridescent wing veins and overlapping reflective scale plates.
        for(const side of [-1,1])for(let i=0;i<4;i++){let xx=side*(24+i*9),yy=-43-i*6+flap*.45;line(c,side*17,-32,xx,yy,mix(base,Color.WHITE,.4),.9);oval(c,xx-1.4,yy-1.4,xx+1.4,yy+1.4,0xaaefffff);}
        // Body, scales, paws and segmented belly.
        volume(c,base,-9,-38,51);c.drawOval(-23,-47,24,-1,p);p.setShader(null);outline(c,-23,-47,24,-1,0xff284653,1.1);oval(c,-12,-33,13,-5,0xffe4ecce);
        for(let y=0;y<4;y++)line(c,-9,-27+y*6,10,-27+y*6,0x55748c82,1);
        for(const side of [-1,1])for(let row=0;row<4;row++){let xx=side*(16+row%2*2),yy=-32+row*6;tri(c,xx-3,yy-2,xx+3,yy-2,xx,yy+3,mix(base,Color.WHITE,.28));line(c,xx-2,yy-2,xx+2,yy-2,0x99ffffff,.7);}
        if(family==2)for(const side of [-1,1]){oval(c,side*23-12,-40,side*23+12,-17,0xff718995);tri(c,side*23-10,-30,side*23,-47,side*23+10,-30,0xffc7d4c0);}
        if(family==7)for(const side of [-1,1]){oval(c,side*23-14,-43,side*23+14,-15,0xff5c7889);tri(c,side*23-13,-29,side*23,-52,side*23+13,-29,0xffb9c9c7);line(c,side*23,-49,side*23,-24,0xffedf0d8,1.5);}
        for(const side of [-1,1]){oval(c,side*16-8,-11,side*16+8,3,base);for(let k=0;k<3;k++)tri(c,side*16-6+k*4,1,side*16-4+k*4,-5,side*16-2+k*4,1,0xfff7e8c6);}
        // Broad dragon muzzle, curved horns, brow ridges and glassy eyes.
        volume(c,base,-13,-66,57);c.drawOval(-28,-75,28,-29,p);p.setShader(null);outline(c,-28,-75,28,-29,0xff2f4c59,1.1);oval(c,-23,-71,22,-53,0x33ffffff);
        for(const side of [-1,1]){c.save();c.scale(side,1);path.reset();path.moveTo(12,-67);path.quadTo(32,-85,22,-98-tier*5);path.quadTo(41,-79,25,-58);path.close();fill(c,0xfff5deae);tri(c,23,-55,40,-63,29,-41,base);c.restore();}
        if(family==1){tri(c,-20,-68,-45,-87,-29,-56,0xffd8eaf0);tri(c,20,-68,45,-87,29,-56,0xffd8eaf0);}
        if(family==2){tri(c,-20,-63,0,-76,20,-63,0xff647f91);line(c,-15,-63,15,-63,0xffe3ddbb,2);}
        if(family==3){for(const side of [-1,1]){line(c,side*21,-69,side*48,-91,0xffe4d3b4,3);line(c,side*37,-82,side*39,-99,0xffe4d3b4,2);line(c,side*34,-80,side*51,-78,0xffe4d3b4,2);}}
        if(family==4){p.setShader(null);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(2);p.setColor(0xffffe9ad);c.drawOval(-32,-104,32,-92,p);p.setStyle(Paint.Style.FILL);}
        if(family==5){tri(c,-24,-52,-35,-72,-6,-60,0xff7f6a67);tri(c,24,-52,35,-72,6,-60,0xff7f6a67);}
        if(family==6){tri(c,-6,-74,0,-91,6,-74,0xfff1eaff);tri(c,-6,-74,6,-74,0,-63,0xffadcbef);}
        if(family==7){tri(c,-23,-57,-30,-79,-7,-62,0xff869da4);tri(c,23,-57,30,-79,7,-62,0xff869da4);line(c,-26,-75,-10,-63,0xffe1ead9,1.5);line(c,26,-75,10,-63,0xffe1ead9,1.5);}
        oval(c,-18,-45,19,-27,base);oval(c,-12,-36,-7,-33,0xff294751);oval(c,9,-36,14,-33,0xff294751);line(c,-9,-29,10,-29,0xff4c6367,1.3);
        if(clock%6>5.85){line(c,-18,-51,-8,-51,0xff193b50,3);line(c,8,-51,18,-51,0xff193b50,3);}else{dragonEye(c,-13,-51,base);dragonEye(c,13,-51,base);}line(c,-20,-60,-8,-57,0xff315368,2);line(c,8,-57,20,-60,0xff315368,2);
        path.reset();path.moveTo(-9,-29);path.quadTo(0,-25,10,-29);p.setShader(null);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(1);p.setColor(0xff40545c);c.drawPath(path,p);p.setStyle(Paint.Style.FILL);tri(c,-10,-29,-7,-24,-5,-28,0xfffff4d7);tri(c,5,-28,8,-24,11,-29,0xfffff4d7);
        oval(c,-20,-65,-5,-61,0x55ffffff);oval(c,-20,-43,-13,-40,0x55ffdfb7);oval(c,13,-43,20,-40,0x55ffdfb7);
        for(let i=0;i<3;i++)tri(c,-7+i*5,-69-i%2*3,-4+i*5,-80-i%2*3,-1+i*5,-69-i%2*3,0xffedf2d2);
        for(let i=0;i<7;i++){let side=i%2==0?-1:1;oval(c,side*18-2,-26+(i/2)*5,side*18+2,-23+(i/2)*5,0x6680b9c0);}
        // Six silhouettes: leafy frill, sea fins, wind feathers, lightning, shadow antlers.
        if(element==1)for(let i=0;i<5;i++)tri(c,-25+i*12,-62,-26+i*12,-83-(i%2)*6,-18+i*12,-63,0xff7fac70);
        if(element==2){tri(c,0,-73,0,-98,12,-74,0xffd5f7ff);line(c,-15,-13,15,-13,0xffb6f4ff,2);}
        if(element==3)for(const s of [-1,1])for(let i=0;i<3;i++)tri(c,s*25,-52+i*5,s*(45-i*3),-65+i*6,s*28,-43+i*4,0xffdcfff1);
        if(element==4){tri(c,-3,-73,5,-94,1,-81,0xfffff1aa);tri(c,1,-82,14,-87,4,-69,0xffffe197);}
        if(element==5){line(c,-20,-71,-39,-89,0xffcab4ff,3);line(c,20,-71,39,-89,0xffcab4ff,3);line(c,-32,-82,-42,-78,base,2);line(c,32,-82,42,-78,base,2);}
        if(tier>=1){tri(c,-7,-21,0,-32,7,-21,base);tri(c,-7,-21,7,-21,0,-10,0xfff7f3d1);}
        if(tier==2){for(let i=0;i<5;i++)tri(c,-15+i*6,-80,-17+i*6,-91-(i%2)*6,-10+i*6,-80,0xffffd778);line(c,-15,-79,15,-79,0xffffebae,3);}
        for(const side of [-1,1])for(let i=0;i<4;i++){let xx=side*(25+i*8),yy=-46-i*4+flap*.4;line(c,side*18,-32,xx,yy,0x66e4f8f0,.7);}
        for(let i=0;i<5+tier*3;i++){let a=clock*.6+i*2.39996,r=40+i%3*8;let xx=Math.cos(a)*r,yy=-43+Math.sin(a)*34;oval(c,xx-1.1,yy-1.1,xx+1.1,yy+1.1,(base&0xffffff)|0x77000000);}
        if(evolution>0){for(let i=0;i<3+evolution;i++){let a=clock+i*6.283/(3+evolution);oval(c,Math.cos(a)*57-2,-43+Math.sin(a)*28-2,Math.cos(a)*57+2,-43+Math.sin(a)*28+2,base);}}
        c.restore();
    }
    function outline(c,l,t,r,b,col,width){p.setShader(null);p.setColor(col);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(width);c.drawOval(l,t,r,b,p);p.setStyle(Paint.Style.FILL);}
    function dragonEye(c,x,y,base){oval(c,x-6,y-8,x+6,y+5,0xff17384b);oval(c,x-4.7,y-6.5,x+4.7,y+3,0xffecf5ec);oval(c,x-3.4,y-6,x+3.4,y+2.8,mix(base,0xff409db1,.4));oval(c,x-1.3,y-6,x+1.3,y+2.3,0xff112a40);oval(c,x-2.8,y-6,x-.2,y-3,Color.WHITE);oval(c,x+1,y-.2,x+2.2,y+1,0xffd6fbff);}
    function hostile(c,id,evolution,clock,moving,legendary){
        hostileTint.setColorFilter(legendary?BLACK_DRAGON:DARK_DRAGON);c.saveLayer(-180,-230,180,55,hostileTint);companion(c,id,evolution,clock,moving);c.restore();
        let family=WildsProfile.family(id);c.save();c.scale((1+evolution*.16)*[1,.88,1.1,.85,.97,1.08,.94,1.14][family],(1+evolution*.16)*[1,1.02,.95,1.08,1,1.02,1.02,.98][family]);c.translate(0,Math.sin(clock*3)*1.7);
        for(const side of [-1,1]){let x=side*13;p.setShader(new RadialGradient(x,-51,12,[0xbbff1f42,0x00ff1f42],null,Shader.TileMode.CLAMP));p.setColor(Color.WHITE);c.drawCircle(x,-51,12,p);p.setShader(null);oval(c,x-5.2,-57.8,x+5.2,-46.2,0xffff244b);oval(c,x-1.2,-57,x+1.2,-46.5,0xff260e20);oval(c,x-3,-57,x-.5,-54.5,0xffffd9d4);line(c,side*20,-60,side*8,-57,0xffce4058,1.5);}
        if(legendary){tri(c,-5,-77,0,-88,5,-77,0xffff476c);tri(c,-5,-77,5,-77,0,-68,0xffb5266c);}
        c.restore();
    }
    function sovereign(c,boss,time){
        hostile(c,SovereignRules.DRAGONS[boss],0,time,true,true);let accent=WildsProfile.COLORS[boss];
        c.save();c.translate(0,Math.sin(time*2)*2);
        // A broken elemental crown and floating armor distinguish the council.
        for(const side of [-1,1]){tri(c,side*22,-63,side*(49+boss%3*5),-93,side*33,-44,0xff303649);line(c,side*25,-65,side*46,-86,accent,1.7);tri(c,side*29,-42,side*49,-50,side*40,-20,0xff596273);line(c,side*32,-38,side*43,-43,accent,1.4);}
        for(let i=0;i<5;i++){let x=-25+i*12.5,y=-104+Math.sin(time*1.7+i)*3;tri(c,x-5,y+5,x,y-9-i%2*5,x+5,y+5,accent);oval(c,x-1,y-5,x+1,y-2,0xfffff8db);}
        p.setColor(accent);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(1.6);c.drawArc(-74,-132,74,5,time*22,105,false,p);c.drawArc(-74,-132,74,5,time*22+180,105,false,p);p.setStyle(Paint.Style.FILL);
        if(boss==0)for(let i=0;i<5;i++){let x=-40+i*20,y=-80-(time*25+i*13)%50;oval(c,x-2,y-4,x+2,y+4,0xffffb36e);}
        if(boss==1)for(const side of [-1,1])for(let i=0;i<3;i++)tri(c,side*(27+i*10),-55,side*(38+i*10),-80-i*4,side*(39+i*10),-46,0xff789d8d);
        if(boss==2)for(const side of [-1,1])tri(c,side*16,-76,side*49,-122,side*27,-63,0xff9ebbc9);
        if(boss==3)for(const side of [-1,1])for(let i=0;i<4;i++)tri(c,side*36,-45+i*6,side*(90-i*7),-77+i*12,side*44,-31+i*4,0xffaabfbf);
        if(boss==4){line(c,-44,-75,-57,-96,accent,2);line(c,-57,-96,-47,-96,accent,2);line(c,-47,-96,-60,-116,accent,2);}
        if(boss==5){outline(c,-56,-130,56,-35,0x77c2a1ff,2);tri(c,-9,-92,0,-118,9,-92,0xffb7a1e3);}
        c.restore();
    }
    function awakening(c,element,time){
        let accent=WildsProfile.COLORS[element];c.save();let flap=Math.sin(time*5)*9;
        p.setShader(new RadialGradient(0,-50,115,[(accent&0xffffff)|0x88000000,0x00122539],null,Shader.TileMode.CLAMP));p.setColor(Color.WHITE);c.drawCircle(0,-50,115,p);p.setShader(null);
        for(const side of [-1,1]){tri(c,side*23,-32,side*108,-119+flap,side*79,-22,0xff5d596d);tri(c,side*29,-35,side*102,-108+flap,side*70,-30,(accent&0xffffff)|0xbb000000);line(c,side*30,-36,side*105,-115+flap,0xffffe2a0,2);for(let i=0;i<3;i++)tri(c,side*(62+i*11),-61-i*12+flap,side*(81+i*12),-82-i*15+flap,side*(72+i*11),-47-i*12+flap,0xffffd194);}
        p.setColor(0xffffd88a);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(2);c.drawOval(-65,-137,65,-19,p);c.drawArc(-74,-146,74,-10,time*35,90,false,p);c.drawArc(-74,-146,74,-10,time*35+180,90,false,p);p.setStyle(Paint.Style.FILL);
        for(let i=0;i<12;i++){let a=time*.8+i*6.283/12,x=Math.cos(a)*83,y=-58+Math.sin(a)*67;tri(c,x-3,y,x,y-8,x+3,y,accent);}
        c.restore();
    }
    function mix(a,b,weight){return Color.rgb((Color.red(a)*(1-weight)+Color.red(b)*weight),(Color.green(a)*(1-weight)+Color.green(b)*weight),(Color.blue(a)*(1-weight)+Color.blue(b)*weight));}
    function fill(c,color){p.setShader(null);p.setStyle(Paint.Style.FILL);p.setColor(color);c.drawPath(path,p);}
    function volume(c,base,x,y,radius){p.setStyle(Paint.Style.FILL);p.setColor(Color.WHITE);p.setShader(new RadialGradient(x,y,radius,[mix(base,Color.WHITE,.52),base,mix(base,0xff102839,.65)]));}
    function gradient(c,top,bottom,y,end){p.setStyle(Paint.Style.FILL);p.setColor(Color.WHITE);p.setShader(new LinearGradient(0,y,18,end,top,bottom,Shader.TileMode.CLAMP));}
    function line(c,x,y,a,b,color,width){p.setShader(null);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(width);p.setColor(color);c.drawLine(x,y,a,b,p);p.setStyle(Paint.Style.FILL);}
    function oval(c,l,t,r,b,color){p.setShader(null);p.setColor(color);p.setStyle(Paint.Style.FILL);c.drawOval(l,t,r,b,p);}
    function tri(c,x,y,a,b,u,v,color){p.setColor(color);path.reset();path.moveTo(x,y);path.lineTo(a,b);path.lineTo(u,v);path.close();c.drawPath(path,p);}
    function eye(c,x,y){oval(c,x-5,y-7,x+5,y+5,0xff193b50);oval(c,x-2,y-6,x+2,y-1,Color.WHITE);}

  const creature={companion,hostile,sovereign,awakening};
  const battle=(()=>{const p=new Paint(),path=new Path();
        function darkDragon(c,variant,clock,stage){
        let form=(WildsProfile.family(variant)+stage)%8;let flap=Math.sin(clock*(8+form%3))*6,bob=Math.sin(clock*8)*1.5;let body=(variant+stage)%2==0?0xff34404a:0xff5a6269;
        c.save();c.scale(form==2||form==7?1.13:form==3?.84:1,form==3?1.12:1);
        color(0x55081321);c.drawOval(-27,-4,27,7,p);c.save();c.translate(0,bob);
        path.reset();path.moveTo(10,-17);path.quadTo(58,-4,43,-34);path.quadTo(70,-6,17,1);path.close();color(0xff26323d);c.drawPath(path,p);
        for(const side of [-1,1]){c.save();c.scale(side,1);path.reset();path.moveTo(12,-25);path.quadTo(31,-60+flap,52,-64+flap);path.lineTo(43,-18);path.quadTo(31,-30,22,-12);path.close();p.setColor(Color.WHITE);p.setShader(new LinearGradient(12,-55,52,-18,0xff718397,0xff222d42));c.drawPath(path,p);p.setShader(null);color(0xff697583);p.setStrokeWidth(1.4);c.drawLine(13,-26,50,-61+flap,p);c.drawLine(13,-26,42,-19,p);c.restore();}
        p.setColor(Color.WHITE);p.setShader(new RadialGradient(-9,-34,48,[0xff8895a0,body,0xff18232f]));c.drawOval(-21,-38,21,0,p);p.setShader(null);color(0xff68747c);c.drawOval(-11,-28,11,-5,p);p.setColor(Color.WHITE);p.setShader(new RadialGradient(-12,-51,50,[0xffa0acb4,body,0xff1b2837]));c.drawOval(-24,-58,24,-25,p);p.setShader(null);
        for(const side of [-1,1]){path.reset();path.moveTo(side*12,-52);path.lineTo(side*22,-78);path.lineTo(side*22,-45);path.close();color(0xff9ca6a9);c.drawPath(path,p);color(0xff501e30);c.drawOval(side*11-8,-48,side*11+8,-31,p);color(0xffff294c);c.drawOval(side*11-5,-45,side*11+5,-34,p);color(0xff170d20);c.drawRect(side*11-1,-44,side*11+1,-34,p);color(0xffffc6c3);c.drawCircle(side*11-2,-43,1.4,p);color(body);c.drawOval(side*14-7,-6,side*14+7,2,p);}
        for(const side of [-1,1]){color(0x44ff294c);c.drawOval(side*11-10,-48,side*11+10,-30,p);color(0xffa6b8c5);p.setStrokeWidth(1);c.drawLine(side*14,-30,side*39,-39+flap,p);c.drawLine(side*14,-30,side*48,-59+flap,p);for(let row=0;row<3;row++){let xx=side*(15+row%2*2),yy=-30+row*7;path.reset();path.moveTo(xx-3,yy);path.lineTo(xx,yy+4);path.lineTo(xx+4,yy-1);path.close();color(0xff8698a6);c.drawPath(path,p);}path.reset();path.moveTo(side*18,-51);path.lineTo(side*31,-57);path.lineTo(side*23,-45);path.close();color(0xff637789);c.drawPath(path,p);for(let toe=0;toe<3;toe++){color(0xffd6e1d9);c.drawOval(side*14-6+toe*4,-1,side*14-3+toe*4,3,p);}}
        if(form==1)for(const side of [-1,1]){path.reset();path.moveTo(side*14,-50);path.lineTo(side*36,-78);path.lineTo(side*23,-44);path.close();color(0xff909ca3);c.drawPath(path,p);}
        if(form==2||form==7){for(let i=0;i<3;i++){color(0xff7d8b92);c.drawRoundRect(-20,-27+i*7,20,-22+i*7,2,2,p);}for(const side of [-1,1]){color(0xff87959b);c.drawOval(side*22-10,-28,side*22+10,-10,p);}}
        if(form==3){color(0xff6c7a85);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(5);c.drawArc(26,-21,67,6,10,280,false,p);p.setStyle(Paint.Style.FILL);}
        if(form==4)for(const side of [-1,1])for(let i=0;i<3;i++){path.reset();path.moveTo(side*22,-31);path.lineTo(side*(57-i*5),-50+i*9+flap);path.lineTo(side*28,-18+i*2);path.close();color(i%2==0?0xff899298:0xff46515d);c.drawPath(path,p);}
        if(form==5)for(const side of [-1,1]){path.reset();path.moveTo(side*17,-39);path.lineTo(side*36,-51);path.lineTo(side*21,-28);path.close();color(0xffa5aaab);c.drawPath(path,p);}
        if(form==6){color(0xff858f9f);p.setStyle(Paint.Style.STROKE);p.setStrokeWidth(1.5);c.drawOval(-28,-74,28,-62,p);p.setStyle(Paint.Style.FILL);}
        color(0xff66737c);c.drawOval(-15,-33,16,-20,p);color(0xff212c38);c.drawOval(-6,-25,7,-19,p);path.reset();path.moveTo(-5,-24);path.lineTo(-2,-19);path.lineTo(0,-24);path.lineTo(3,-19);path.lineTo(5,-24);path.close();color(0xffcdd1c7);c.drawPath(path,p);c.restore();c.restore();
    }
    function color(value){p.setShader(null);p.setStyle(Paint.Style.FILL);p.setColor(value);}

    return {darkDragon};
  })();
  return {draw(ctx,x,y,id,scale,time,{hostile:enemy=false,awake=false,moving=false,evolution=0,wild=false,stage=0,regional=false}={}){const c=new Canvas(ctx);c.save();c.translate(x,y);c.scale(scale,scale);if(awake)creature.awakening(c,E.element(id),time);if(wild)battle.darkDragon(c,id,time,stage);else if(regional&&E.rulerIds.indexOf(id)>=0&&E.rulerIds.indexOf(id)<6)creature.sovereign(c,E.rulerIds.indexOf(id),time);else if(enemy)creature.hostile(c,id,evolution,time,moving,E.rarity(id)===2);else creature.companion(c,id,evolution,time,moving);c.restore();}};
};