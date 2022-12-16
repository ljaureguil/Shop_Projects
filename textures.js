


var worlds=[];
var art=[]
art.push({"name":"logo","pic":"https://as2.ftcdn.net/v2/jpg/03/37/62/41/1000_F_337624179_SCcRL4gleCZGWyVNS8suSUvyEwBoI1hb.jpg"});
art.push({"name":"logo1","pic":"https://i.ytimg.com/vi/B6EKlcW2Jp0/maxresdefault.jpg"});
art.push({"name":"logo2","pic":"https://c4.wallpaperflare.com/wallpaper/189/752/873/landscape-photography-of-twigs-during-golden-hour-wallpaper-preview.jpg"});
art.push({"name":"logo3","pic":"https://t3.ftcdn.net/jpg/01/81/61/50/360_F_181615003_j5vvF46SlLp3kflyknHqh0RP7nNBw5oW.jpg"});
art.push({"name":"logo4","pic":"https://ak.picdn.net/shutterstock/videos/1068260144/thumb/1.jpg?ip=x480"});
art.push({"name":"logo5","pic":"https://l13.alamy.com/360/T3GP16/full-seamless-spherical-panorama-360-by-180-degrees-angle-view-on-the-shore-of-small-river-with-bridge-in-city-park-in-summer-day-in-equirectangular-p-T3GP16.jpg"});
 
var te_=THREE.ImageUtils.loadTexture(art[1].pic);



var ma_=new THREE.MeshPhongMaterial({map:te_});
var move={};
move.animation=false;
move.pvx=0;
move.pvy=0;
move.pvz=0;
move.gx=0;
move.gy=0;
move.gz=0;

function Box(name,w,l,h,c){
    var m=new THREE.Mesh(new THREE.BoxBufferGeometry( w,l,h),new THREE.MeshPhongMaterial({ side: THREE.DoubleSide,map:te_
}));
    var s=name+"_Box";// transparent: true, opacity: 0.5,
    m.name={name:s,w:w,l:l,h:h,x:0,y:0,z:0,rx:0,ry:0,rz:0,rpx:1,rpy:1,ofx:0,ofy:0,rot:0,transparent:true,opacity:1,piv:c,anim:move,pic:art[5].pic}
    return  m;
}
function Sphere(name,r,sx,sy,c){ 
    var m=new THREE.Mesh(new THREE.SphereBufferGeometry(r, sx, sy),new THREE.MeshPhongMaterial({ side: THREE.DoubleSide,map:te_}));
    var s=name+"_Sphere";
    m.name={name:s,r:r,sx:sx,sy:sy,x:0,y:0,z:0,rx:0,ry:0,rz:0,rpx:1,rpy:1,ofx:0,ofy:0,rot:0,transparent:true,opacity:1,piv:c,anim:move,pic:art[5].pic}
    return  m;
}
function Cylinder(name,r1,r2,h,s,cap,c){
    if(cap===undefined)cap=false; 
     var m= new THREE.Mesh(new THREE.CylinderGeometry( r1, r2, h, s),new THREE.MeshPhongMaterial({ side: THREE.DoubleSide,map:te_}));//,starc,arc)/// new THREE.CylinderGeometry( 5, 5, 20, 32 )/
     var ss=name+"_Cylinder";
 m.name={name:ss,r1:r1,r2:r2,h:h,s:s,cap:cap,x:0,y:0,z:0,rx:0,ry:0,rz:0,rpx:1,rpy:1,ofx:0,ofy:0,rot:0,transparent:true,opacity:1,piv:c,anim:move,pic:art[5].pic}
 m.geometry.openEnded=cap;
 return  m;
}
function Torus(name,r,tk,rs,ts,c){
    var m= new THREE.Mesh( geometry = new THREE.TorusGeometry( r, tk, rs, ts ),new THREE.MeshPhongMaterial({ side: THREE.DoubleSide,map:te_}));////new THREE.TorusGeometry( 10, 3, 16, 100 )
    var s=name+"_Torus";
 m.name={name:s,r:r,tk:tk,rs:rs,ts:ts,x:0,y:0,z:0,rx:0,ry:0,rz:0,rpx:1,rpy:1,ofx:0,ofy:0,rot:0,transparent:true,opacity:1,piv:c,anim:move,pic:art[5].pic}
 return  m;
}

/////////

var sbox=""

////////////////////////
