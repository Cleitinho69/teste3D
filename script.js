import * as three from './three.js-master/src/Three.js';
import { OrbitControls } from './three.js-master/examples/jsm/controls/OrbitControls.js';
// Create a scene
const div = document.querySelector('div');
console.log(div)
const scane = new three.Scene();
const camera = new three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new three.WebGLRenderer();
renderer.setSize(div.clientHeight,div.clientWidth);
div.appendChild( renderer.domElement );
const geometry = new three.BoxGeometry( 1, 1, 1 );
const material = new three.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new three.Mesh( geometry, material );
const controls = new OrbitControls( camera, renderer.domElement );
scane.add( cube );

camera.position.z = 5;

function animate() {
	cube.rotation.y += 0.01;
	cube.rotation.x += 0.01;
	renderer.render( scane, camera, controls);
}
renderer.setAnimationLoop( animate );