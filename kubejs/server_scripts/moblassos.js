ServerEvents.recipes(event => {
  event.remove({ output: 'moblassos:golden_lasso' })
	event.shaped(
  Item.of('moblassos:golden_lasso', 1),
    [
      'GSG',
      'SES',
      'GSG'
    ],
    {
      G: 'minecraft:gold_ingot',
      S: 'minecraft:string',
      E: 'minecraft:ender_pearl'
    }
  )

  event.remove({ output: 'moblassos:aqua_lasso' })
	event.shaped(
  Item.of('moblassos:aqua_lasso', 1),
    [
      ' L ',
      'FGF',
      ' L '
    ],
    {
      L: 'minecraft:lapis_block',
      F: '#c:raw_fish',
      G: 'minecraft:moblassos:golden_lasso'
    }
  )

  event.remove({ output: 'moblassos:diamond_lasso' })
	event.shaped(
  Item.of('moblassos:diamond_lasso', 1),
    [
      ' D ',
      'ADG',
      ' D '
    ],
    {
      D: 'minecraft:diamond_block',
      A: 'moblassos:aqua_lasso',
      G: 'minecraft:moblassos:golden_lasso'
    }
  )

  event.remove({ output: 'moblassos:emerald_lasso' })
	event.shaped(
  Item.of('moblassos:emerald_lasso', 1),
    [
      'EEE',
      'EGE',
      'EEE'
    ],
    {
      E: 'minecraft:emerald_block',
      G: 'minecraft:moblassos:golden_lasso'
    }
  )

  event.remove({ output: 'moblassos:hostile_lasso' })
	event.shaped(
  Item.of('moblassos:hostile_lasso', 1),
    [
      'RBS',
      'CLC',
      'GBE'
    ],
    {
      C: 'supplementaries:cage',
      B: 'minecraft:blaze_rod',
      L: 'minecraft:moblassos:golden_lasso',
      R: 'minecraft:rotten_flesh',
      S: 'minecraft:bone',
      G: 'quark:gunpowder_sack',
      E: 'minecraft:spider_eye',
    }
  )

  event.remove({ output: 'moblassos:contract' })
	event.shaped(
  Item.of('moblassos:contract', 1),
    [
      'BFE',
      'IPE',
      'EEE'
    ],
    {
      B: 'minecraft:glass_bottle',
      F: 'minecraft:feather',
      I: 'minecraft:ink_sac',
      P: 'minecraft:paper',
      E: 'minecraft:emerald_block',
    }
  )
});