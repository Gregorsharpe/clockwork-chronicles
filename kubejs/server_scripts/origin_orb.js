ServerEvents.recipes(event => {
	event.shaped(
  Item.of('origins:orb_of_origin', 1),
    [
      'EDE',
      'DSD',
      'EDE'
    ],
    {
      E: 'minecraft:ender_pearl',
      D: 'minecraft:diamond',
      S: 'minecraft:nether_star'
    }
  )
});