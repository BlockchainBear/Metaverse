const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowUp') {
        camera.position.z -= 0.1;
    } else if (keyName === 'ArrowDown') {
        camera.position.z += 0.1;
    } else if (keyName === 'ArrowLeft') {
        camera.position.x -= 0.1;
    } else if (keyName === 'ArrowRight') {
        camera.position.x += 0.1;
    }
});

const avatarGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const avatarMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const avatar = new THREE.Mesh(avatarGeometry, avatarMaterial);
avatar.position.set(0, 0.5, 0);
scene.add(avatar);

function checkInteraction() {
    // Simple distance check for interaction
    const distance = camera.position.distanceTo(avatar.position);
    if (distance < 1) {
        avatar.material.color.set(0xff0000); // Change color on interaction
    } else {
        avatar.material.color.set(0x0000ff); // Reset color
    }
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    checkInteraction();
    renderer.render(scene, camera);
}

animate();