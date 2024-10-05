ServerEvents.recipes(event => {
  event.remove({ output: 'industrialforegoing:infinity_drill' })
  event.remove({ output: 'industrialforegoing:infinity_saw' })
  event.remove({ output: 'industrialforegoing:infinity_hammer' })
  event.remove({ output: 'industrialforegoing:infinity_trident' })
  event.remove({ output: 'industrialforegoing:infinity_backpack' })
  event.remove({ output: 'industrialforegoing:infinity_nuke' })
})