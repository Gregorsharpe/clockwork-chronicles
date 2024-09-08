ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('beer_craft:hops', 1), // arg 1: output
    [
      'minecraft:bone_meal',
      'create:wheat_flour',
      'minecraft:brown_mushroom'
    ]
  )
});