import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

// aqui eu crio uma cena para que objetos possão ser rederizados
const scene = new THREE.Scene();
// aqui eu crio uma camera para que possa ver o objeto(o angulo da camera, o tamanho dela, e onde ela começa, até onde ela vai);
const camera = new THREE.PerspectiveCamera( 75,window.innerWidth/window.innerHeight, 0.1, 1000);
// Serve para rederizar a cena e exibir ela
const renderer = new THREE.WebGLRenderer();
// serve para controlar a resulução do objeto
// nesse caso eu to pegamdo a resolução completa da tela
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// aqui serve para criar uma forma de um cubo
const geometry = new THREE.BoxGeometry(0.2,3,1);
// aqui a gente modifica a cor do objeto
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
// aqui a gente junta os dois em um objeto que possa ser rederizado
const cube = new THREE.Mesh(geometry,material);
// e aqui adicionamos o objeto a cena
scene.add(cube);
// aqui a gente deixa a camera um pouco longe para que ela não fique colada no objeto
camera.position.z = 5;

// aqui a gente inicia a animação do objeto
function animate(){
    renderer.render(scene,camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
renderer.setAnimationLoop(animate);