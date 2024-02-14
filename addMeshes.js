import {
	BoxGeometry,
	MeshBasicMaterial,
	MeshStandardMaterial,
	Mesh,
	SphereGeometry,
	MeshPhongMaterial,
	MeshPhysicalMaterial,
	TextureLoader,
	BufferGeometry,
	Shape,
	ShapeGeometry,
	ExtrudeGeometry,
	CircleGeometry,
	TorusGeometry,
	ConeGeometry,
	CylinderGeometry
} from 'three'


const loader = new TextureLoader()



export const Clock = () => {
	const color = loader.load('clock.jpg')
	// const displace = loader.load('Ice_001_DISP.png')
	// const normal = loader.load('Ice_001_NRM.jpg')

    const ClockGeometry = new CircleGeometry(4,32)
    const ClockMaterial = new MeshPhysicalMaterial({ 
		map:color,
		displacementMap:color,
	    normalMap:color,
		metalness:0.0,
		roughness:0.1,
		thickness:1.5
	})
    const ClockMesh = new Mesh(
        ClockGeometry,
        ClockMaterial
    )
    return ClockMesh
}

export const outside = () => {
	const color = loader.load('Sci-fi_Hose_005_basecolor.jpg')
	const normal = loader.load('Sci-fi_Hose_005_normal.jpg')
	const roughness = loader.load('Sci-fi_Hose_005_roughness.jpg')
	const metalness = loader.load('Sci-fi_Hose_005_metallic.jpg')


    const outsideGeometry = new TorusGeometry( 5, 0.5, 160, 200 )
    const outsideMaterial = new MeshPhysicalMaterial({ 
		map:color,
		displacementMap:color,
	    normalMap:normal,
		metalnessMap:metalness,
		roughnessMap:roughness,
		thickness:1.5
	})
    const outsideMesh = new Mesh(
        outsideGeometry,
        outsideMaterial
    )
    return outsideMesh
}

export const Arrow1 = () => {
	const arrow1Geometry = new CylinderGeometry (0.1, 0.1, 5.5, 32)

	const color = loader.load('Sci-fi_Hose_005_basecolor.jpg')
	const normal = loader.load('Sci-fi_Hose_005_normal.jpg')
	const roughness = loader.load('Sci-fi_Hose_005_roughness.jpg')
	const metalness = loader.load('Sci-fi_Hose_005_metallic.jpg')


	const arrow1Material = new MeshPhysicalMaterial({ 
		map:color,
		metalnessMap:metalness,
		roughnessMap:roughness,
		thickness:1.5
	})
    const arrow1Mesh = new Mesh(arrow1Geometry, arrow1Material)

	arrow1Mesh.position.set(0, 0, 1)

    return arrow1Mesh
}

export const Arrow2 = () => {
	const arrow2Geometry = new CylinderGeometry (0.1, 0.1, 5.5, 32)

	const color = loader.load('Sci-fi_Hose_005_basecolor.jpg')
	const roughness = loader.load('Sci-fi_Hose_005_roughness.jpg')
	const metalness = loader.load('Sci-fi_Hose_005_metallic.jpg')


	const arrow2Material = new MeshPhysicalMaterial({ 
		map:color,
		metalnessMap:metalness,
		roughnessMap:roughness,
		thickness:1.5
	})
    const arrow2Mesh = new Mesh(arrow2Geometry, arrow2Material)

	arrow2Mesh.position.set(0, 0, 1)

    return arrow2Mesh
}
