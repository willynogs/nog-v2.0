/* client side js on load */
window.onload = function(){
  var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

  /*
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
  */

  //This will add a starfield to the background of a scene
  var starsGeometry = new THREE.Geometry();

  for (var i = 0; i < 10000; i ++) {
  	var star = new THREE.Vector3();
  	star.x = THREE.Math.randFloatSpread( 2000 );
  	star.y = THREE.Math.randFloatSpread( 2000 );
  	star.z = THREE.Math.randFloatSpread( 2000 );
  	starsGeometry.vertices.push( star );
  }

  var starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } );

  var starField = new THREE.Points( starsGeometry, starsMaterial );

  scene.add( starField );

	camera.position.z = 5;

	var animate = function () {
		requestAnimationFrame( animate );

    /*
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
    */

		renderer.render(scene, camera);
	};

	animate();
};
