let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let container, stats, controls;
let camera, scene, renderer;

let gui;

let manoMesh;


function start(Module) {
    if (!Detector.webgl) Detector.addGetWebGLMessage();

    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(40, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 1000);
    camera.position.y = 150;
    camera.zoom = 2;
    camera.updateProjectionMatrix();

    // renderer
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();
    controls.addEventListener('change', draw);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);

    let gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    // mano params
    initGui();

    let geomHeap;
    let shapeHeap;

    let geometry = new THREE.BufferGeometry();


    let ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);
    let light1 = new THREE.DirectionalLight(0xffffff, 0.5);
    light1.position.set(1, 1, 1);
    scene.add(light1);
    let light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(0, -1, 0);
    scene.add(light2);

    let material = new THREE.MeshStandardMaterial({color: 0xff5500, flatShading: true, side: THREE.DoubleSide});


    let shapePData = new Float32Array(10);
    let shapePSize = shapePData.length * shapePData.BYTES_PER_ELEMENT;
    let shapePPtr = Module._malloc(shapePSize);
    shapeHeap = new Uint8Array(Module.HEAPU8.buffer, shapePPtr, shapePSize);

    try {

        //The index array will have a size of 13842 (4614 faces * 3)
        let geomData = new Float32Array(13842);
        let dataLength = geomData.length * geomData.BYTES_PER_ELEMENT;
        let geomPtr = Module._malloc(dataLength);
        geomHeap = new Uint8Array(Module.HEAPU8.buffer, geomPtr, dataLength);

        geometry.addAttribute("position", new THREE.BufferAttribute(geomData, 3));


        function refreshGeometry() {

            /*geomHeap = new Uint8Array(Module.HEAPU8.buffer, ptr, dataLength);
            geomHeap.set(new Uint8Array(geomData.buffer));
            shapePHeap.set(new Uint8Array(shapePData.buffer));*/
            shapeHeap.set(new Uint8Array(shapePData.buffer));
            //geomHeap.set(new Uint8Array(geomData.buffer));

            Module.ccall("manoUpdateGeometry", null, ["number", "number", "number", "number"], [geomPtr, geomData.length, shapePPtr, shapePData.length]);
            //Module._manoUpdateGeometry()

            geomData = new Float32Array(geomHeap.buffer, geomHeap.byteOffset, 13842);
            geometry.attributes.position.array.set(geomData);
        }

        refreshGeometry();

        manoMesh = new THREE.Mesh(geometry, material);
        scene.add(manoMesh);

        window.addEventListener('resize', onWindowResize, false);

        // stats
        stats = new Stats();
        container.appendChild(stats.dom);

        function draw() {
            requestAnimationFrame(draw);

            refreshGeometry();
            // manoMesh.rotation.x += .01;

            manoMesh.geometry.attributes.position.needsUpdate = true;

            renderer.clear();
            renderer.render(scene, camera);
            stats.update();
        }

        draw();
    } catch (e) {
        console.log(e);
    } finally {
        Module._free(shapeHeap.byteOffset);
        Module._free(geomHeap.byteOffset);
    }


    function onWindowResize(event) {
        SCREEN_WIDTH = window.innerWidth;
        SCREEN_HEIGHT = window.innerHeight;
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
        camera.updateProjectionMatrix();
    }

    function initGui() {

        let params = {
            shapeBlendShape1: 0,
            shapeBlendShape2: 0,
            shapeBlendShape3: 0,
            shapeBlendShape4: 0,
            shapeBlendShape5: 0,
            shapeBlendShape6: 0,
            shapeBlendShape7: 0,
            shapeBlendShape8: 0,
            shapeBlendShape9: 0,
            shapeBlendShape10: 0,
        };
        gui = new dat.GUI();
        gui.width = 400;
        let folder = gui.addFolder('Shape BlendShapes');

        folder.add(params, 'shapeBlendShape1', -10, 10).name('Shape BlendShape 1').step(0.01).onChange(function (value) {  shapePData[0] = value; });
        folder.add(params, 'shapeBlendShape2', -10, 10).name('Shape BlendShape 2').step(0.01).onChange(function (value) {  shapePData[1] = value; });
        folder.add(params, 'shapeBlendShape3', -10, 10).name('Shape BlendShape 3').step(0.01).onChange(function (value) {  shapePData[2] = value; });
        folder.add(params, 'shapeBlendShape4', -10, 10).name('Shape BlendShape 4').step(0.01).onChange(function (value) {  shapePData[3] = value; });
        folder.add(params, 'shapeBlendShape5', -10, 10).name('Shape BlendShape 5').step(0.01).onChange(function (value) {  shapePData[4] = value; });
        folder.add(params, 'shapeBlendShape6', -10, 10).name('Shape BlendShape 6').step(0.01).onChange(function (value) {  shapePData[5] = value; });
        folder.add(params, 'shapeBlendShape7', -10, 10).name('Shape BlendShape 7').step(0.01).onChange(function (value) {  shapePData[6] = value; });
        folder.add(params, 'shapeBlendShape8', -10, 10).name('Shape BlendShape 8').step(0.01).onChange(function (value) {  shapePData[7] = value; });
        folder.add(params, 'shapeBlendShape9', -10, 10).name('Shape BlendShape 9').step(0.01).onChange(function (value) {  shapePData[8] = value; });
        folder.add(params, 'shapeBlendShape10', -10, 10).name('Shape BlendShape 10').step(0.01).onChange(function (value) {shapePData[9] = value; });
        folder.open();
    }
}