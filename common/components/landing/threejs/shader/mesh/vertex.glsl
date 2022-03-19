// uniform mat4 projectionMatrix;
// uniform mat4 viewMatrix;
// uniform mat4 modelMatrix;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // modelPosition.z += sin(20000.0 * 500.0);
    // modelPosition.z += sin(modelPosition.y * 50.0);
    // modelPosition.z += sin(modelPosition.y * 10.0) * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPostion = projectionMatrix * viewPosition;

    gl_Position = projectedPostion;

}
