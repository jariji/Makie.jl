{{GLSL_VERSION}}
{{GLSL_EXTENSIONS}}

{{define_fast_path}}

struct Nothing{ //Nothing type, to encode if some variable doesn't contain any data
    bool _; //empty structs are not allowed
};

struct WorldAxisLimits{
    vec3 min, max;
};

layout(lines) in;
layout(triangle_strip, max_vertices = 4) out;

uniform vec2 resolution;
uniform float pattern_length;
{{pattern_type}} pattern;
{{clip_planes_type}} clip_planes;

in vec4 g_color[];
in uvec2 g_id[];
in float g_thickness[];

out float f_thickness;
out vec4 f_color;
out vec2 f_uv;
flat out uvec2 f_id;
flat out vec2 f_uv_minmax;

#define AA_THICKNESS 4.0

// Get pattern values
float fetch(Nothing _, float u){return 10000000.0;}
float fetch(sampler1D pattern, float u){return texture(pattern, u).x;}

vec3 screen_space(vec4 vertex)
{
    return vec3(vertex.xy * resolution, vertex.z) / vertex.w;
}

void set_clip(Nothing planes, int idx){ return; };
void set_clip(WorldAxisLimits planes, int idx){
    gl_ClipDistance[0] = gl_in[idx].gl_ClipDistance[0];
    gl_ClipDistance[1] = gl_in[idx].gl_ClipDistance[1];
    gl_ClipDistance[2] = gl_in[idx].gl_ClipDistance[2];
    gl_ClipDistance[3] = gl_in[idx].gl_ClipDistance[3];
    gl_ClipDistance[4] = gl_in[idx].gl_ClipDistance[4];
    gl_ClipDistance[5] = gl_in[idx].gl_ClipDistance[5];
};

void emit_vertex(vec2 position, vec2 uv, int index)
{
    vec4 inpos = gl_in[index].gl_Position;
    f_uv = uv;
    f_color = g_color[index];
    gl_Position = vec4((position.xy / resolution), position.z, 1.0);
    f_id = g_id[index];
    f_thickness = g_thickness[index];
    set_clip(clip_planes, index);
    EmitVertex();
}

out vec3 o_view_pos;
out vec3 o_normal;

void main(void)
{
    o_view_pos = vec3(0);
    o_normal = vec3(0);

    // get the four vertices passed to the shader:
    vec3 p0 = screen_space(gl_in[0].gl_Position); // start of previous segment
    vec3 p1 = screen_space(gl_in[1].gl_Position); // end of previous segment, start of current segment

    float thickness_aa0 = g_thickness[0] + AA_THICKNESS;
    float thickness_aa1 = g_thickness[1] + AA_THICKNESS;
    // determine the direction of each of the 3 segments (previous, current, next)
    vec3 vun0 = p1 - p0;
    vec3 v0 = vun0 / length(vun0.xy);
    // determine the normal of each of the 3 segments (previous, current, next)
    vec3 n0 = vec3(-v0.y, v0.x, 0);
    float l = length(p1 - p0);
    float px2u = 0.5 / pattern_length;
    float u = l * px2u;

    vec3 AA_offset = AA_THICKNESS * v0;
    float AA = AA_THICKNESS * px2u;

    /*                  0              v0              l 
                        |             -->              | 
     -thickness_aa0 - .----------------------------------. - -thickness_aa1
    -g_thickness[0] - | .------------------------------. | - -g_thickness[1]
                      | |                              | |
                n0 ↑  | |                              | |
                      | |                              | |
    +g_thickness[0] - | '------------------------------' | - +g_thickness[1]
     +thickness_aa0 - '----------------------------------' - +thickness_aa1
                      |                                  |
                -AA_THICKNESS                    l + AA_THICKNESS
    */

    #ifdef FAST_PATH
        // For solid lines the uv cordinates are used as a signed distance field.
        // We keep the values positive to draw a solid line and add limits to
        // f_uv_minmax to add anti-aliasing at the start and end of the line
        f_uv_minmax = vec2(u, 2*u);
        emit_vertex(p0 + thickness_aa0 * n0 - AA_offset, vec2(  u - AA, -thickness_aa0), 0);
        emit_vertex(p0 - thickness_aa0 * n0 - AA_offset, vec2(  u - AA,  thickness_aa0), 0);
        emit_vertex(p1 + thickness_aa1 * n0 + AA_offset, vec2(2*u + AA, -thickness_aa1), 1);
        emit_vertex(p1 - thickness_aa1 * n0 + AA_offset, vec2(2*u + AA,  thickness_aa1), 1);
    #else
        // For patterned lines AA is mostly done by the pattern sampling. We 
        // still set f_uv_minmax here to ensure that cut off patterns als have 
        // anti-aliasing at the start/end of this segment
        f_uv_minmax = vec2(0, u);
        emit_vertex(p0 + thickness_aa0 * n0 - AA_offset, vec2(  - AA, -thickness_aa0), 0);
        emit_vertex(p0 - thickness_aa0 * n0 - AA_offset, vec2(  - AA,  thickness_aa0), 0);
        emit_vertex(p1 + thickness_aa1 * n0 + AA_offset, vec2(u + AA, -thickness_aa1), 1);
        emit_vertex(p1 - thickness_aa1 * n0 + AA_offset, vec2(u + AA,  thickness_aa1), 1);
    #endif
}
