import './style.css'
import * as THREE from 'three'
import { Clock} from './addMeshes'
import { outside} from './addMeshes'
import { Arrow1} from './addMeshes'
import { Arrow2} from './addMeshes'
import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
const scene = new THREE.Scene()
const meshes = {}
const lights = {}

const clock = new THREE.Clock()

init()
function init() {
	//set up our renderer default settings, add scene/canvas to webpage
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	meshes.Clock = Clock()

	meshes.outside = outside()

	meshes.arrow1 = Arrow1()

	meshes.arrow2 = Arrow2()

	lights.default = addLight()

	scene.add(lights.default)
	scene.add(meshes.Clock)

	scene.add(meshes.outside)

	scene.add(meshes.arrow1)

	scene.add(meshes.arrow2)


	camera.position.set(0, 0, 10)
	resize()
animate()
}

function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	const tick = clock.getElapsedTime()
	requestAnimationFrame(animate)
	// // meshes.center.rotation.x += 0.01
	// // meshes.center.rotation.y -= 0.01
	// meshes.heart2.position.y = Math.sin(tick * 9) + 20;
	// meshes.heart2.position.z = Math.cos(tick* 2)* 10

	// meshes.heart3.position.y = Math.sin(tick * 9) - 35;
	// meshes.heart3.position.z = Math.cos(tick* 5)* 10

	// meshes.outside.position.x = Math.sin(tick* 2)* 30
	// meshes.outside.position.z = Math.cos(tick* 2)* 50

	meshes.outside.rotateOnAxis(new THREE.Vector3(0, 0, 1), 0.01);


	
	meshes.arrow1.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), 0.05);


	meshes.arrow2.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), -0.02);

	// meshes.center.scale.x = Math.sin(tick* 5) * 0.2 + 1; 
    // meshes.center.scale.y = Math.sin(tick * 5) * 0.2 + 1;
    // meshes.center.scale.z = Math.sin(tick * 5) * 0.2 + 1;

	renderer.render(scene, camera)
}
