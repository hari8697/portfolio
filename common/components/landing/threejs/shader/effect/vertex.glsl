varying vec2 vUv;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // modelPosition.z += sin(modelPosition.x * 10.0) * 0.1;
    // modelPosition.z += sin(modelPosition.y * 10.0) * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPostion = projectionMatrix * viewPosition;

    gl_Position = projectedPostion;
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
