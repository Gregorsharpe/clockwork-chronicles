ServerEvents.recipes(event => {
  event.shaped(
    Item.of('chisel_chipped_integration:metal_electrum_thermal', 1),
      [
        'NNN',
        'NNN',
        'NNN'
      ],
      {
        N: 'createaddition:electrum_ingot',
      }
  )
});