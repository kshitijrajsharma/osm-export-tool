# goals:
# for clipping efficiency, we want a < 500 point geometry.
# * geometries of < 500 points should be unchanged.
# * when geom A is simplified to B,
#   A can have areas that are missing from B.
# * therefore, buffer by 0.02 degrees if > 500 points, then simplify.
# * geometries with an excessive amount of points can't
#   be buffered efficiently, they must be simplified first.
#   so first simplify them to 0.01 degrees.

def simplify_geom(geom,force_buffer=False):
    if geom.num_coords > 10000:
        geom = geom.simplify(0.01)
    if geom.num_coords > 500 or force_buffer:
        geom = geom.buffer(0.02)
    param = 0.01
    while geom.num_coords > 500:
        geom = geom.simplify(param, preserve_topology=True)
        param = param * 2
    return geom
