#version 330
layout(location=0) out vec4 color;

uniform sampler2D text;
uniform vec3 object_color;

in vec3 g_position;
in vec2 g_uv;
in vec3 g_normal;

in float cosine;
in float spec;

void main()
{
    color = vec4(object_color*texture(text, g_uv).rgb*cosine+spec, 1.0);
}