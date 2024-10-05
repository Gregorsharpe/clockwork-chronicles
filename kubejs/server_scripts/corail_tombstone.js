// Stop certain seeds from dropping from the seed bag.
ServerEvents.tags('item', event => {
  event.removeAll('tombstone:seeds')

  const blacklist = ['mysticalagriculture', 'occultism', 'ars_nouveau']

  const regularSeeds = event.get('forge:seeds').getObjectIds();
  const acceptableSeeds = regularSeeds.filter((seed) => {
    const name = Item.of(seed).getId()
    for (const mod of blacklist) {
      if (name.includes(mod)) return false;
    }
    return true;
  })
  
  acceptableSeeds.forEach(seed => {
    event.add('tombstone:seeds', seed);
  });
});