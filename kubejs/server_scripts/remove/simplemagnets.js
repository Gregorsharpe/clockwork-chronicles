ServerEvents.recipes(event => {
  event.remove({ output: 'simplemagnets:basicmagnet' })
  event.remove({ output: 'simplemagnets:advancedmagnet' })
})